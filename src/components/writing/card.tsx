// packages
import { parseISO, format } from 'date-fns';
// components
import Link from '~/components/common/link';
import ArrowRight from '~/assets/icons/arrow-right';
import { Typography } from '~/components/ui';
// types
import type { FrontMatterWithoutMeta } from '~/services/mdx';
import config from '~data/config';

export interface IWritingCard extends FrontMatterWithoutMeta {}

export default function WritingCard({
  publishedAt,
  slug,
  title,
}: IWritingCard) {
  const parsedDate = parseISO(publishedAt);
  const formatDate = format(parsedDate, 'MMM d, y');

  return (
    <Link
      href={`/${config.blog.path}/${slug}`}
      className='flex items-center justify-between transition-all duration-500 py-12 group hover:bg-light-gray border-b border-gray-300'>
      <div className='flex items-center transform-gpu duration-300 sm:group-hover:translate-x-8 group-hover:translate-x-4'>
        <time
          dateTime={parsedDate.toString()}
          className='text-gray-500 text-xl uppercase md:pr-10 sm:pr-6 pr-4'>
          {formatDate}
        </time>
        <Typography
          as='h1'
          className='sm:text-3xl text-2xl font-medium'
          resetStyles>
          {title}
        </Typography>
      </div>

      <ArrowRight className='w-8 sm:group-hover:-translate-x-8 group-hover:-translate-x-4 transform-gpu duration-300 sm:block hidden' />
    </Link>
  );
}
