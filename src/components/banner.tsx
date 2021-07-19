// packages
import gsap from 'gsap';
import { useRef } from 'react';
// components
import useSafeLayoutEffect from '../hooks/use-safe-layout-effect';
import Container from './ui/container';
import ArrowRight from '../assets/icons/arrow-right';
import { Link, Typography } from './ui';
import { useStore } from '~/store';

export interface IBanner {
  link: string;
  text: string;
  cta: string;
}

function Banner({ link = '#', text, cta }: IBanner): JSX.Element {
  const bannerRef = useRef<HTMLDivElement | null>(null);
  const { introComplete } = useStore();

  useSafeLayoutEffect(() => {
    if (introComplete) {
      gsap.to(bannerRef.current, { y: 0, duration: 0.6, ease: 'power4.in' });
    }
  }, [introComplete]);

  return (
    <div
      className='bg-red-800 hover:bg-red-900 z-40 relative transform-gpu -translate-y-full'
      ref={bannerRef}>
      <Link href={link} className='h-full'>
        <Container className='flex flex-col sm:flex-row h-full justify-center items-center text-white font-medium py-2 sm:py-3'>
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
