// components
import ArrowNarrowRight from '~/assets/icons/arrow-narrow-right';
import Link from '~/components/common/link';
import { Typography } from '../ui';

export interface ILiveLinks {
  liveDemoURL?: string;
  sourceCodeURL?: string;
}

export default function LiveLinks({ liveDemoURL, sourceCodeURL }: ILiveLinks) {
  return (
    <div className='flex flex-col pb-3 max-w-max space-y-2'>
      {liveDemoURL && (
        <Link href={liveDemoURL} className='flex group items-center'>
          <Typography
            className='font-medium text-lg'
            resetStyles
            style={{ margin: 0 }}>
            See live version
          </Typography>
          <ArrowNarrowRight className='w-6 ml-2 group-hover:transform-gpu group-hover:translate-x-1.5 transition-all duration-300' />
        </Link>
      )}
      {sourceCodeURL && (
        <Link href={sourceCodeURL} className='flex group items-center'>
          <Typography
            className='font-medium text-lg'
            resetStyles
            style={{ margin: 0 }}>
            See source code
          </Typography>
          <ArrowNarrowRight className='w-6 ml-2 group-hover:transform-gpu group-hover:translate-x-1.5 transition-all duration-300' />
        </Link>
      )}
    </div>
  );
}
