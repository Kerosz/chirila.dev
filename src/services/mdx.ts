// packages
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { serialize } from 'next-mdx-remote/serialize';
// types
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';

export interface IFrontMatter {
  meta: {
    text: string;
    time: number;
    words: number;
    minutes: number;
  };
  slug: string | null;
  title: string;
  publishedAt: string;
  updatedAt: string | null;
  excerpt: string;
  media: string;
  author: string;
}

export interface IFileResult {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  frontMatter: IFrontMatter;
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
      slug: slug || null,
      ...data,
    },
  } as IFileResult;
}
