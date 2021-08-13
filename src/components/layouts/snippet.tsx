// components
import Layout from './base';
import Link from '../common/link';
import Tags from '../writing/tags';
import FadeIntoView from '../animations/fade-into-view';
import { Container, Typography } from '~ui/index';
// data
import config from '~data/config';
// types
import type { ReactNode } from 'react';
import type { ISnippetsFrontMatter } from '~/services/mdx';

export interface ISnippetLayout {
  children: ReactNode;
  frontMatter: ISnippetsFrontMatter;
}

export default function SnippetLayout({
  children,
  frontMatter,
}: ISnippetLayout): JSX.Element {
  const { snippets, title } = config;

  const editUrl = (slug: string) => `${snippets.githubEditUrl}/${slug}.mdx`;

  return (
    <Layout
      title={`${snippets.name} – ${frontMatter.title} – ${title}`}
      description={frontMatter.description}>
      <FadeIntoView>
        <Container as='article' maxW='max-w-[848px]' className='py-10'>
          <header className='border-b border-gray-300 pb-8'>
            <Typography
              as='h1'
              className='text-5xl font-bold font-serif pb-6'
              resetStyles>
              {frontMatter.title}
            </Typography>
            <Typography className='text-xl font-medium font-serif' resetStyles>
              {frontMatter.description}
            </Typography>

            <Tags data={frontMatter.tags} path='snippets' />
          </header>

          <div className='prose max-w-none w-full mt-16 pb-16 border-b border-gray-200'>
            {children}
          </div>

          <div className='text-sm text-gray-700 py-3 text-right'>
            <Link href={editUrl(frontMatter.slug)} external>
              Edit page on GitHub
            </Link>
          </div>
        </Container>
      </FadeIntoView>
    </Layout>
  );
}
