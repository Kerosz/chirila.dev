// packages
import cn from 'classnames';
import { memo } from 'react';
// components
import ChevronUp from '~/assets/icons/chevron-up';
import useScrollPosition from '~/hooks/use-scroll-position';
import { isBrowser } from '~/utils';
import { Button } from '~ui/index';

export interface IToTop {
  scrollValue?: number;
}

function ToTop({ scrollValue = 1000 }: IToTop) {
  const { y } = useScrollPosition();

  const handleScrollToTop = () => {
    if (isBrowser) {
      window.scroll({ top: 1, behavior: 'smooth' });
    }
  };

  const rootClass = cn(
    'fixed z-40 right-6 bottom-6 w-12 h-12 rounded-full shadow-lg bg-gray-100 text-gray-900 flex justify-center items-center transition-all duration-300',
    {
      'opacity-100 pointer-events-all': y > scrollValue,
      'opacity-0 pointer-events-none': y < scrollValue,
    }
  );

  return (
    <Button className={rootClass} onClick={handleScrollToTop} reset>
      <ChevronUp className='w-7' />
    </Button>
  );
}

export default memo(ToTop);
