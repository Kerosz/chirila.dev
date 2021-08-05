// packages
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote';
import { ParsedUrlQuery } from 'querystring';
// internals
import Link from '~/components/common/link';
import PostLayout from '~/components/layouts/post';
import LiveLinks from '~/components/writing/live-links';
import ProjectOverview from '~/components/writing/project-overview';
import {
  getAllFiles,
  getFileBySlug,
  getRecommandationBySlug,
  IFileResult,
  IFrontMatter,
  IRecommandArticles,
} from '~/services/mdx';
// types
import type {
  GetStaticProps,
  GetStaticPaths,
  GetStaticPropsResult,
  GetStaticPathsResult,
} from 'next';

interface IStaticProps extends IFileResult<IFrontMatter> {
  recommand: IRecommandArticles;
}

interface IParams extends ParsedUrlQuery {
  slug: string;
}

const MDXComponents = { a: Link, Image, ProjectOverview, LiveLinks };

export default function Post({ source, frontMatter, recommand }: IStaticProps) {
  return (
    <PostLayout frontMatter={frontMatter} recommand={recommand}>
      <MDXRemote {...source} components={MDXComponents} />
    </PostLayout>
  );
}

export const getStaticPaths: GetStaticPaths =
  async (): Promise<GetStaticPathsResult> => {
    const articles = await getAllFiles();

    return {
      paths: articles.map((p) => ({
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
  const article = await getFileBySlug<IFrontMatter>(params!.slug);
  const recommand = await getRecommandationBySlug(params!.slug);

  return { props: { ...article, recommand } };
};
