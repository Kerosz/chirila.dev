// packages
import { useState } from 'react';
import { parseISO } from 'date-fns';
// components
import Layout from '~/components/layouts/base';
import Filter from '~/components/common/filter';
import WritingCard from '~/components/writing/card';
import SearchBar from '~/components/common/search';
import FadeIntoView from '~/components/animations/fade-into-view';
import { Container, Typography } from '~/components/ui';
import { FrontMatterWithoutMeta, getAllFilesMeta } from '~/services/mdx';
import { generateTags, pluralWord } from '~/utils';
// types
import type { GetStaticProps, GetStaticPropsResult } from 'next';

interface IStaticProps {
  articles: FrontMatterWithoutMeta[];
  total: number;
  tags: string[];
}

export default function WritingPage({ articles, tags, total }: IStaticProps) {
  const [blogArticles, setBlogArticles] =
    useState<IStaticProps['articles']>(articles);

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
        <div className='flex md:flex-row flex-col justify-between pb-14'>
          <Typography
            as='h1'
            className='text-7xl font-bold md:mr-14 mb-10 md:mb-0'
            resetStyles>
            Writing
          </Typography>

          <SearchBar
            initialData={articles}
            setData={setBlogArticles}
            options={searchOptions}
            placeholder='Search articles'
          />
        </div>

        <Typography className='text-lg pb-20 max-w-2xl' resetStyles>
          I write about web development, design, business and computer science.
          In total, I&apos;ve written {pluralWord(total, 'article')}, use the
          the below filter to optimize your surfing.
        </Typography>

        <Filter
          initialData={articles}
          setData={setBlogArticles}
          filterByData={tags}
        />

        {blogArticles.map((p) => (
          <WritingCard key={p.slug} {...p} />
        ))}
      </FadeIntoView>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<IStaticProps> = async (): Promise<
  GetStaticPropsResult<IStaticProps>
> => {
  const articles = await getAllFilesMeta<FrontMatterWithoutMeta>();
  const tags = generateTags(articles);

  const sortedArticles = articles.sort((a, b) => {
    const dateA = parseISO(a.publishedAt);
    const dateb = parseISO(b.publishedAt);

    if (dateA > dateb) return -1;
    if (dateA < dateb) return 1;

    return 0;
  });

  return { props: { articles: sortedArticles, total: articles.length, tags } };
};
