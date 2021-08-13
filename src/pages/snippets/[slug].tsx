// packages
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote';
import { ParsedUrlQuery } from 'querystring';
// internals
import Link from '~/components/common/link';
import SnippetLayout from '~/components/layouts/snippet';
import {
  getAllFiles,
  getFileBySlug,
  IFileResult,
  ISnippetsFrontMatter,
} from '~/services/mdx';
// data
import config from '~data/config';
// types
import type {
  GetStaticProps,
  GetStaticPaths,
  GetStaticPropsResult,
  GetStaticPathsResult,
} from 'next';

interface IStaticProps extends IFileResult<ISnippetsFrontMatter> {}

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export default function Snippet({ source, frontMatter }: IStaticProps) {
  return (
    <SnippetLayout frontMatter={frontMatter}>
      <MDXRemote {...source} components={{ a: Link, Image }} />
    </SnippetLayout>
  );
}

export const getStaticPaths: GetStaticPaths =
  async (): Promise<GetStaticPathsResult> => {
    const snippets = await getAllFiles('snippets');

    return {
      paths: snippets.map((p) => ({
        params: {
          slug: p.replace(/\.mdx/, ''),
        },
      })),
      fallback: false,
    };
  };

export const getStaticProps: GetStaticProps<IStaticProps, IParams> = async ({
  params,
}): Promise<GetStaticPropsResult<IStaticProps>> => {
  const snippet = await getFileBySlug<ISnippetsFrontMatter>(
    params!.slug,
    config.snippets.path
  );

  return { props: { ...snippet } };
};
