// packages
import gsap from 'gsap';
import { useRef } from 'react';
// components
import useSafeLayoutEffect from '../hooks/use-safe-layout-effect';
import { Container, Link, Typography } from './ui';

function Hero(): JSX.Element {
  const heroRef = useRef<HTMLDivElement | null>(null);

  useSafeLayoutEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { y: 300, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.15, ease: 'power4.inOut' }
    );
  }, []);

  return (
    <Container as='section' className='pt-36 pb-8 flex flex-col' ref={heroRef}>
      <Typography
        as='h1'
        className='sm:text-10xl text-18vw text-gray-900 font-black pb-14'>
        A. Chirila
      </Typography>

      <div className='flex w-full sm:flex-row flex-col justify-between sm:items-center'>
        <div className='flex flex-col sm:pb-0 pb-8'>
          <Typography
            className='font-medium text-2xl sm:ml-2 text-gray-900'
            reset>
            /Fullstack Developer
          </Typography>

          <Typography
            className='font-medium text-2xl sm:ml-2 text-gray-900'
            reset>
            /Writer
          </Typography>
        </div>

        <div>
          <Typography>Based in Romania, BH.</Typography>
          <Typography className='pb-4'>
            Get in touch for availability.
          </Typography>
          <ul className='flex space-x-5'>
            <li>
              <Link
                href='https://twitter.com/chirila_'
                className='text-gray-500 text-sm hover:text-gray-900 hover:underline'
                external>
                Twitter
              </Link>
            </li>

            <li>
              <Link
                href='https://www.linkedin.com/in/c-andrei'
                className='text-gray-500 text-sm hover:text-gray-900 hover:underline'
                external>
                LinkedIn
              </Link>
            </li>

            <li>
              <Link
                href='https://github.com/Kerosz'
                className='text-gray-500 text-sm hover:text-gray-900 hover:underline'
                external>
                Github
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
}

export default Hero;
