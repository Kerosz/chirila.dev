// packages
import cn from 'classnames';
// components
import Link from '~/components/common/link';
import ArrowRight from '~/assets/icons/arrow-right';
import ArrowLeft from '~/assets/icons/arrow-left';
import { Typography } from '~/components/ui';
// types
import type { FrontMatterWithoutMeta } from '~/services/mdx';

export interface IBlogRecommand extends FrontMatterWithoutMeta {
  name: string;
}

function BlogRecommand({ slug, title, name }: IBlogRecommand) {
  const isNext = name.toLowerCase() === 'next';

  const rootClass = cn(
    'max-w-sm w-full flex bg-gray-200 rounded-lg py-4 px-5 text-black-tone shadow-md group hover:shadow-lg transition-all duration-200 hover:scale-105',
    {
      'flex-row': !isNext,
      'flex-row-reverse': isNext,
    }
  );
  const nameClass = cn('text-gray-500 text-sm pb-2', {
    'text-right': isNext,
    'text-left': !isNext,
  });
  const textContainer = cn({
    'ml-5': !isNext,
    'mr-5': isNext,
  });

  return (
    <Link href={`/blog/${slug}`} className={rootClass}>
      {isNext ? (
        <ArrowRight className='text-gray-400 max-w-[1.5rem] w-full' />
      ) : (
        <ArrowLeft className='text-gray-400 max-w-[1.5rem] w-full' />
      )}
      <div className={textContainer}>
        <Typography resetStyles className={nameClass}>
          {name}
        </Typography>
        <Typography
          resetStyles
          className='font-medium group-hover:text-gray-800'>
          {title}
        </Typography>
      </div>
    </Link>
  );
}

export default BlogRecommand;