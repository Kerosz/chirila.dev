// packages
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote';
import { ParsedUrlQuery } from 'querystring';
// internals
import Link from '~/components/common/link';
import PostLayout from '~/components/layouts/post';
import {
  getAllFiles,
  getFileBySlug,
  getRecommandationBySlug,
  IFileResult,
  IRecommandPosts,
} from '~/services/mdx';
// types
import type {
  GetStaticProps,
  GetStaticPaths,
  GetStaticPropsResult,
  GetStaticPathsResult,
} from 'next';

interface IStaticProps extends IFileResult {
  recommand: IRecommandPosts;
}

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export default function Post({ source, frontMatter, recommand }: IStaticProps) {
  return (
    <PostLayout frontMatter={frontMatter} recommand={recommand}>
      <MDXRemote {...source} components={{ a: Link, Image }} />
    </PostLayout>
  );
}

export const getStaticPaths: GetStaticPaths =
  async (): Promise<GetStaticPathsResult> => {
    const posts = await getAllFiles();

    return {
      paths: posts.map((p) => ({
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
  const post = await getFileBySlug(params!.slug);
  const recommand = await getRecommandationBySlug(params!.slug);

  return { props: { ...post, recommand } };
};
