// packages
import { useState } from 'react';
// internals
import Link from '~/components/common/link';
import Layout from '~/components/layouts/base';
import Filter from '~/components/common/filter';
import SearchBar from '~/components/common/search';
import ArrowNarrowRight from '~/assets/icons/arrow-narrow-right';
import FadeIntoView from '~/components/animations/fade-into-view';
import { Container, Typography } from '~/components/ui';
import {
  getAllFilesMeta,
  SnippetsFrontMatterWithoutMeta,
} from '~/services/mdx';
import { generateTags } from '~/utils';
// data
import config from '~data/config';
// types
import type { GetStaticProps, GetStaticPropsResult } from 'next';

interface IStaticProps {
  snippets: SnippetsFrontMatterWithoutMeta[];
  total: number;
  tags: string[];
}

export default function SnippetsPage({ snippets, tags }: IStaticProps) {
  const [pageSnippets, setPageSnippets] =
    useState<IStaticProps['snippets']>(snippets);

  const searchOptions = {
    includeScore: true,
    // Search in `title` and in `tags` array
    keys: ['title', 'description'],
    threshold: 0.4,
  };

  return (
    <Layout title='Snippets | Andrei Chirila'>
      <FadeIntoView
        as={Container}
        className='text-black-tone pt-28 pb-20 min-h-screen'>
        <div className='flex md:flex-row flex-col justify-between pb-24'>
          <Typography
            as='h1'
            className='text-7xl font-bold md:mr-14 mb-10 md:mb-0'
            resetStyles>
            {config.snippets.name}
          </Typography>

          <SearchBar
            initialData={snippets}
            setData={setPageSnippets}
            options={searchOptions}
            placeholder='Search snippets'
          />
        </div>

        <Filter
          initialData={snippets}
          setData={setPageSnippets}
          filterByData={tags}
        />

        <div className='grid lg:grid-cols-2 grid-cols-1 xl:gap-20 lg:gap-14 gap-8'>
          {pageSnippets.map(({ slug, title, description }, idx) => (
            <Link
              key={`${title}__${idx}`}
              href={`/${config.snippets.path}/${slug}`}
              className='col-span-1 flex relative transition-all duration-500 items-center border-b border-gray-300 py-6  group hover:bg-light-gray'>
              <div className='ml-8 pr-14'>
                <Typography
                  as='h1'
                  className='text-xl font-medium pb-2'
                  resetStyles>
                  {title}
                </Typography>
                <Typography className='text-lg text-gray-500' resetStyles>
                  {description}
                </Typography>
              </div>

              <ArrowNarrowRight className='w-9 -mt-1.5 group-hover:-translate-x-3.5 transition-all duration-300 absolute right-0 top-2/4' />
            </Link>
          ))}
        </div>
      </FadeIntoView>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<IStaticProps> = async (): Promise<
  GetStaticPropsResult<IStaticProps>
> => {
  const snippets = await getAllFilesMeta<SnippetsFrontMatterWithoutMeta>(
    config.snippets.path
  );
  const tags = generateTags(snippets);

  return { props: { snippets, total: snippets.length, tags } };
};
