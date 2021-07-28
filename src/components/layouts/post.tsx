// packages
import Image from 'next/image';
import { formatDistanceToNowStrict, format, parseISO } from 'date-fns';
// components
import Layout from './base';
import Link from '../common/link';
import BlogRecommand from '../blog/recommand';
import Newsletter from '../common/newsletter';
import { Container, Typography } from '~ui/index';
// types
import type { ReactNode } from 'react';
import type { IFrontMatter, IRecommandPosts } from '~/services/mdx';

export interface IPostLayout {
  children: ReactNode;
  frontMatter: IFrontMatter;
  recommand: IRecommandPosts;
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
    `https://github.com/Kerosz/chirila.dev/tree/main/data/blog/${slug}.mdx`;
  const discussUrl = (slug: string) =>
    `https://mobile.twitter.com/search?q=${encodeURIComponent(
      `https://chirila.dev/blog/${slug}`
    )}`;

  return (
    <Layout
      title={`Blog – ${frontMatter.title} – Andrei Chirila`}
      description={frontMatter.excerpt}>
      <Container
        as='article'
        reset
        className='px-4 max-w-3xl mx-auto w-full py-10'>
        <header className='border-b border-gray-300 pb-14'>
          <Typography
            as='h1'
            className='text-5xl font-bold text-center font-serif pb-14'
            resetStyles>
            {frontMatter.title}
          </Typography>

          <div className='flex justify-between text-gray-600 text-sm'>
            <time dateTime={publishedAt.toISOString()}>
              {`${publishedAtFormat} (${publishedAtToNow})`}
            </time>

            <p>{frontMatter.meta.text}</p>
          </div>

          <div className='flex items-center mt-4'>
            <Image
              alt='Andrei Chirila'
              height={34}
              width={34}
              src='/images/avatar.png'
              className='rounded-full'
            />
            <div className='flex flex-col ml-3'>
              <p className='text-gray-900 font-medium'>{frontMatter.author}</p>
              <Link
                href='https://twitter.com/chirila_'
                className='text-blue-600 text-xs -mt-0.5'
                external>
                @chirila_
              </Link>
            </div>
          </div>
        </header>

        <div className='prose max-w-none w-full mt-10 pb-16 border-b border-gray-200'>
          {children}
        </div>

        <div className='flex justify-between pt-6 space-x-6'>
          {recommand.prev && (
            <BlogRecommand {...recommand.prev} name='Previous' />
          )}
          {recommand.next && <BlogRecommand {...recommand.next} name='Next' />}
        </div>

        <div className='text-sm text-gray-700 py-3 text-right mt-7'>
          <Link href={discussUrl(frontMatter.slug)} external>
            Discuss on Twitter
          </Link>
          {` • `}
          <Link href={editUrl(frontMatter.slug)} external>
            Edit page on GitHub
          </Link>
        </div>
      </Container>
      <Newsletter />
    </Layout>
  );
}
