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
  updatedAt?: string;
  excerpt: string;
  media: string;
  author: string;
  tags: string[];
}

export interface ISnippetsFrontMatter {
  meta: {
    text: string;
    time: number;
    words: number;
    minutes: number;
  };
  slug: string;
  title: string;
  description: string;
  tags: string[];
}

export type SnippetsFrontMatterWithoutMeta = Omit<ISnippetsFrontMatter, 'meta'>;

export type FrontMatterWithoutMeta = Omit<IFrontMatter, 'meta'>;

export interface IFileResult<T> {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  frontMatter: T;
}

export interface IRecommandArticles {
  next: FrontMatterWithoutMeta | null;
  prev: FrontMatterWithoutMeta | null;
}

const rootDir = process.cwd();

export async function getAllFiles(dir: string = 'writing'): Promise<string[]> {
  return fs.readdirSync(path.join(rootDir, 'data', dir));
}

export async function getFileBySlug<T>(
  slug: string,
  dir: string = 'writing'
): Promise<IFileResult<T>> {
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
        [
          require('remark-prism'),
          {
            plugins: [
              'command-line',
              'data-uri-highlight',
              'diff-highlight',
              'inline-color',
              'line-numbers',
              'treeview',
            ],
          },
        ],
      ],
      rehypePlugins: [],
    },
  });

  return {
    source: mdxSource,
    frontMatter: {
      meta: readingTime(content),
      slug: slug.replace(/\.mdx/, ''),
      ...data,
    },
  } as unknown as IFileResult<T>;
}

export async function getAllFilesMeta<T>(
  dir: string = 'writing'
): Promise<T[]> {
  const files = fs.readdirSync(path.join(rootDir, 'data', dir));

  const articles: T[] = files.reduce((allArticles: any, articleSlug) => {
    const source = fs.readFileSync(
      path.join(rootDir, 'data', dir, articleSlug),
      'utf8'
    );
    const { data } = matter(source);

    const post = {
      ...data,
      slug: articleSlug.replace(/\.mdx/, ''),
    } as FrontMatterWithoutMeta;

    return [post, ...allArticles];
  }, []);

  return articles;
}

export async function getRecommandationBySlug(
  slug: string
): Promise<IRecommandArticles> {
  const allArticles = await getAllFilesMeta<FrontMatterWithoutMeta>();

  const sortedArticles = allArticles.sort((a, b) => {
    const dateA = parseISO(a.publishedAt);
    const dateb = parseISO(b.publishedAt);

    if (dateA > dateb) return -1;
    if (dateA < dateb) return 1;

    return 0;
  });

  const currentArticleIdx = sortedArticles.findIndex((el) => el.slug === slug);

  function getNextArticle(idx: number) {
    if (idx !== -1 && idx - 1 >= 0) {
      return allArticles[idx - 1];
    }

    return null;
  }

  function getPrevArticle(idx: number) {
    if (idx !== -1 && idx + 1 < allArticles.length) {
      return allArticles[idx + 1];
    }

    return null;
  }

  return {
    next: getNextArticle(currentArticleIdx),
    prev: getPrevArticle(currentArticleIdx),
  };
}