// packages
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { serialize } from 'next-mdx-remote/serialize';
import { parseISO } from 'date-fns';
// types
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';

export interface IFrontMatter {
  meta: {
    text: string;
    time: number;
    words: number;
    minutes: number;
  };
  slug: string;
  title: string;
  publishedAt: string;
  updatedAt: string | null;
  excerpt: string;
  media: string;
  author: string;
  tags: string[];
}

export type FrontMatterWithoutMeta = Omit<IFrontMatter, 'meta'>;

export interface IFileResult {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  frontMatter: IFrontMatter;
}

export interface IRecommandPosts {
  next: FrontMatterWithoutMeta | null;
  prev: FrontMatterWithoutMeta | null;
}

const rootDir = process.cwd();

export async function getAllFiles(dir: string = 'blog'): Promise<string[]> {
  return fs.readdirSync(path.join(rootDir, 'data', dir));
}

export async function getFileBySlug(
  slug: string,
  dir: string = 'blog'
): Promise<IFileResult> {
  const file = fs.readFileSync(
    path.join(rootDir, 'data', dir, `${slug}.mdx`),
    'utf-8'
  );

  const { data, content } = matter(file);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        require('remark-code-titles'),
        require('remark-slug'),
        [
          require('remark-autolink-headings'),
          {
            linkProperties: {
              className: ['autolink'],
            },
          },
        ],
        require('remark-prism'),
      ],
      rehypePlugins: [require('mdx-prism')],
    },
  });

  return {
    source: mdxSource,
    frontMatter: {
      meta: readingTime(content),
      slug: slug.replace(/\.mdx/, ''),
      ...data,
    },
  } as IFileResult;
}

export async function getAllFilesMeta(
  dir: string = 'blog'
): Promise<FrontMatterWithoutMeta[]> {
  const files = fs.readdirSync(path.join(rootDir, 'data', dir));

  const posts: FrontMatterWithoutMeta[] = files.reduce(
    (allPosts: any, postSlug) => {
      const source = fs.readFileSync(
        path.join(rootDir, 'data', dir, postSlug),
        'utf8'
      );
      const { data } = matter(source);

      const post = {
        ...data,
        slug: postSlug.replace(/\.mdx/, ''),
      } as FrontMatterWithoutMeta;

      return [post, ...allPosts];
    },
    []
  );

  return posts.sort((a, b) => {
    const dateA = parseISO(a.publishedAt);
    const dateb = parseISO(b.publishedAt);

    if (dateA > dateb) return -1;
    if (dateA < dateb) return 1;

    return 0;
  });
}

export async function getRecommandationBySlug(
  slug: string
): Promise<IRecommandPosts> {
  const allPosts = await getAllFilesMeta();

  const currentPostIndex = allPosts.findIndex((el) => el.slug === slug);

  function getNextPost(idx: number) {
    if (idx !== -1 && idx - 1 >= 0) {
      return allPosts[idx - 1];
    }

    return null;
  }

  function getPrevPost(idx: number) {
    if (idx !== -1 && idx + 1 <= allPosts.length - 1) {
      return allPosts[idx + 1];
    }

    return null;
  }

  return {
    next: getNextPost(currentPostIndex),
    prev: getPrevPost(currentPostIndex),
  };
}