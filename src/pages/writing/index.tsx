// packages
import { useState } from 'react';
import { parseISO } from 'date-fns';
// components
import BlogCard from '~/components/blog/card';
import Layout from '~/components/layouts/base';
import SearchBar from '~/components/common/search';
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

export default function WritingPage({ posts }: IStaticProps) {
  const [blogPosts, setBlogPosts] = useState<IStaticProps['posts']>(posts);

  const searchOptions = {
    includeScore: true,
    // Search in `title` and in `tags` array
    keys: ['title', 'tags'],
    threshold: 0.4,
  };

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
            Writing
          </Typography>

          <SearchBar
            initialData={posts}
            setData={setBlogPosts}
            options={searchOptions}
          />
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
  const posts = await getAllFilesMeta<FrontMatterWithoutMeta>();

  const sortedPosts = posts.sort((a, b) => {
    const dateA = parseISO(a.publishedAt);
    const dateb = parseISO(b.publishedAt);

    if (dateA > dateb) return -1;
    if (dateA < dateb) return 1;

    return 0;
  });

  return { props: { posts: sortedPosts, total: posts.length } };
};
