// packages
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
// components
import { Link, Typography } from './ui';
import Container from './ui/container';
import ArrowRight from '../assets/icons/arrow-right';

export interface IBanner {
  link: string;
  text: string;
  cta: string;
}

function Banner({ link = '#', text, cta }: IBanner): JSX.Element {
  const bannerRef = useRef(null);

  useLayoutEffect(() => {
    gsap.fromTo(
      bannerRef.current,
      { y: -70 },
      { y: 0, duration: 1, ease: 'power4.in', delay: 0.5 }
    );
  }, []);

  return (
    <div className='bg-red-800 hover:bg-red-900 z-40' ref={bannerRef}>
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
