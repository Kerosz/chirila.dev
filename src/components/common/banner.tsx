// packages
import cn from 'classnames';
import { gsap } from 'gsap';
import { useRef } from 'react';
import { useRouter } from 'next/router';
// components
import Link from '~components/common/link';
import ArrowRight from '~icons/arrow-right';
import useSafeLayoutEffect from '~hooks/use-safe-layout-effect';
import { Container, Typography } from '~ui/index';
import { useStore } from '~/store';

export interface IBanner {
  link: string;
  text: string;
  cta: string;
}

function Banner({ link = '#', text, cta }: IBanner): JSX.Element {
  const bannerRef = useRef<HTMLDivElement | null>(null);
  const { introComplete, bodyColorChangePaths } = useStore();
  const { pathname } = useRouter();

  const isDarkBody = bodyColorChangePaths.includes(pathname);

  useSafeLayoutEffect(() => {
    if (introComplete) {
      gsap.to(bannerRef.current, { y: 0, duration: 0.6, ease: 'power4.in' });
    }
  }, [introComplete]);

  const rootClass = cn('z-40 relative transform-gpu -translate-y-full', {
    'bg-red-800 hover:bg-red-900': !isDarkBody,
    'bg-green-800 hover:bg-green-900': isDarkBody,
  });

  return (
    <div className={rootClass} ref={bannerRef}>
      <Link href={link} className='h-full'>
        <Container className='flex flex-col sm:flex-row h-full justify-center items-center text-gray-50 font-medium py-2 sm:py-3'>
          <Typography>{text}.&nbsp;</Typography>
          <div className='flex'>
            <Typography className='underline'>{cta}</Typography>
            &nbsp;
            <ArrowRight className='w-5' />
          </div>
        </Container>
      </Link>
    </div>
  );
}

export default Banner;
