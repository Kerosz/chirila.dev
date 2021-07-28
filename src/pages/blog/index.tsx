// packages
import { parseISO, format } from 'date-fns';
// components
import Link from '~/components/common/link';
import Layout from '~/components/layouts/base';
import ArrowRight from '~/assets/icons/arrow-right';
import Newsletter from '~/components/common/newsletter';
import FadeIntoView from '~/components/animations/fade-into-view';
import { Container, Typography } from '~/components/ui';
import { FrontMatterWithoutMeta, getAllFilesMeta } from '~/services/mdx';
// types
import type { GetStaticProps, GetStaticPropsResult } from 'next';
import BlogCard from '~/components/blog/card';

interface IStaticProps {
  posts: FrontMatterWithoutMeta[];
  total: number;
}

export default function BlogPage({ posts, total }: IStaticProps) {
  console.log(posts);

  return (
    <Layout>
      <FadeIntoView as={Container} className='text-black-tone pt-28 pb-20'>
        <Typography as='h1' className='text-7xl font-bold pb-20' resetStyles>
          Writting
        </Typography>

        {posts.map((p) => (
          <BlogCard key={p.slug} {...p} />
        ))}
      </FadeIntoView>
      <Newsletter />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<IStaticProps> = async (): Promise<
  GetStaticPropsResult<IStaticProps>
> => {
  const posts = await getAllFilesMeta();

  return { props: { posts, total: posts.length } };
};
