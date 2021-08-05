// packages
import Image from 'next/image';
import { formatDistanceToNowStrict, format, parseISO } from 'date-fns';
// components
import Layout from './base';
import Link from '../common/link';
import Tags from '../writing/tags';
import AuthorInfo from '../writing/author-info';
import WritingRecommand from '../writing/recommand';
import FadeIntoView from '../animations/fade-into-view';
import { Container, Typography } from '~ui/index';
// types
import type { ReactNode } from 'react';
import type { IFrontMatter, IRecommandArticles } from '~/services/mdx';

export interface IPostLayout {
  children: ReactNode;
  frontMatter: IFrontMatter;
  recommand: IRecommandArticles;
}

export default function PostLayout({
  children,
  frontMatter,
  recommand,
}: IPostLayout): JSX.Element {
  const publishedAt = parseISO(frontMatter.publishedAt);
  const publishedAtFormat = format(publishedAt, 'EEEE, LLLL do yyyy');
  const publishedAtToNow = formatDistanceToNowStrict(publishedAt, {
    addSuffix: true,
  });
  const editUrl = (slug: string) =>
    `https://github.com/Kerosz/chirila.dev/tree/main/data/writing/${slug}.mdx`;
  const discussUrl = (slug: string) =>
    `https://mobile.twitter.com/search?q=${encodeURIComponent(
      `https://chirila.dev/writing/${slug}`
    )}`;

  return (
    <Layout
      title={`Blog – ${frontMatter.title} – Andrei Chirila`}
      description={frontMatter.excerpt}>
      <FadeIntoView>
        <Container as='article' maxW='max-w-[848px]' className='py-10'>
          <header className='border-b border-gray-300 pb-8'>
            <Typography
              as='h1'
              className='text-5xl font-bold text-center font-serif pb-10'
              resetStyles>
              {frontMatter.title}
            </Typography>

            <div className='flex xs:flex-row flex-col justify-between text-gray-600 text-sm mt-6'>
              <time
                dateTime={publishedAt.toISOString()}
                className='pb-1 xs:pb-0'>
                {`${publishedAtFormat} (${publishedAtToNow})`}
              </time>

              <p>{frontMatter.meta.text}</p>
            </div>

            <div className='flex items-center mt-4'>
              <Image
                alt='Andrei Chirila'
                height={34}
                width={34}
                src='/images/blog/avatar.png'
                className='rounded-full'
                priority
              />
              <div className='flex flex-col ml-3'>
                <p className='text-gray-900 font-medium'>
                  {frontMatter.author}
                </p>
                <Link
                  href='https://twitter.com/chirila_'
                  className='text-blue-600 text-xs -mt-0.5'
                  external>
                  @chirila_
                </Link>
              </div>
            </div>

            <Tags data={frontMatter.tags} path='writing' />
          </header>
          <div className='prose max-w-none w-full mt-10'>{children}</div>
        </Container>
        <AuthorInfo />

        <Container as='section' maxW='max-w-[848px]' className='py-6'>
          {(recommand.prev || recommand.next) && (
            <div className='flex sm:flex-row flex-col sm:justify-between items-center pt-6 sm:space-x-6 sm:space-y-0 space-y-6 mb-7'>
              {recommand.prev && (
                <WritingRecommand {...recommand.prev} name='Previous' />
              )}
              {recommand.next && (
                <WritingRecommand {...recommand.next} name='Next' />
              )}
            </div>
          )}

          <div className='text-sm text-gray-700 py-3 text-right'>
            <Link href={discussUrl(frontMatter.slug)} external>
              Discuss on Twitter
            </Link>
            {` • `}
            <Link href={editUrl(frontMatter.slug)} external>
              Edit page on GitHub
            </Link>
          </div>
        </Container>
      </FadeIntoView>
    </Layout>
  );
}
