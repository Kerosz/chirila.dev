// packages
import { parseISO, format } from 'date-fns';
// components
import Link from '~/components/common/link';
import ArrowRight from '~/assets/icons/arrow-right';
import { Typography } from '~/components/ui';
// types
import type { FrontMatterWithoutMeta } from '~/services/mdx';

export interface IBlogCard extends FrontMatterWithoutMeta {}

function BlogCard({ publishedAt, slug, title }: IBlogCard) {
  const parsedDate = parseISO(publishedAt);
  const formatDate = format(parsedDate, 'MMM d, y');

  return (
    <Link
      href={`/blog/${slug}`}
      className='flex items-center justify-between transition-all duration-500 py-14 group hover:bg-gray-200 border-b border-gray-300'>
      <div className='flex items-center transform-gpu duration-300 group-hover:translate-x-8'>
        <time
          dateTime={parsedDate.toString()}
          className='text-gray-500 text-xl uppercase pr-10'>
          {formatDate}
        </time>
        <Typography as='h1' className='text-3xl font-medium' resetStyles>
          {title}
        </Typography>
      </div>

      <ArrowRight className='w-8 group-hover:-translate-x-8 transform-gpu duration-300' />
    </Link>
  );
}

export default BlogCard;
