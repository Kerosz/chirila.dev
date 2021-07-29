// packages
import { useState } from 'react';
import { parseISO } from 'date-fns';
// components
import BlogCard from '~/components/blog/card';
import Layout from '~/components/layouts/base';
import BlogSearchBar from '~/components/blog/search';
import Newsletter from '~/components/common/newsletter';
import FadeIntoView from '~/components/animations/fade-into-view';
import { Container, Typography } from '~/components/ui';
import { FrontMatterWithoutMeta, getAllFilesMeta } from '~/services/mdx';
// types
import type { GetStaticProps, GetStaticPropsResult } from 'next';

interface IStaticProps {
  posts: FrontMatterWithoutMeta[];
  total: number;
}

export default function WrittingPage({ posts, total }: IStaticProps) {
  const [blogPosts, setBlogPosts] = useState<IStaticProps['posts']>(posts);

  return (
    <Layout title='Writting | Andrei Chirila'>
      <FadeIntoView
        as={Container}
        className='text-black-tone pt-28 pb-20 min-h-screen'>
        <div className='flex md:flex-row flex-col justify-between pb-20'>
          <Typography
            as='h1'
            className='text-7xl font-bold md:mr-14 mb-10 md:mb-0'
            resetStyles>
            Writting
          </Typography>

          <BlogSearchBar initialPosts={posts} setPosts={setBlogPosts} />
        </div>

        {blogPosts.map((p) => (
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
