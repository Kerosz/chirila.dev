// packages
import { gsap } from 'gsap';
import { useRef } from 'react';
// components
import useSafeLayoutEffect from '../hooks/use-safe-layout-effect';
import { Container, Link, Typography } from './ui';
// data
import heroData from '../../data/hero';

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
    <Container
      as='section'
      className='sm:pt-32 pt-20 pb-20 flex flex-col relative z-10'
      ref={heroRef}>
      <div className='flex flex-col pb-2'>
        {heroData.tags.map((tag) => (
          <Typography
            key={tag}
            className='font-medium text-3xl pb-1 sm:ml-9 fill-color'
            resetStyles>
            /{tag}
          </Typography>
        ))}
      </div>
      <Typography
        as='h1'
        className='sm:text-10xl text-26vw text-gray-900 font-black pb-10'>
        {heroData.title}
      </Typography>

      <div className='flex w-full sm:flex-row flex-col justify-between'>
        <Link
          href={`mailto:${heroData.contact}`}
          external
          className='text-2xl font-medium sm:pl-1 hover:text-red-800 max-w-max sm:pb-0 pb-6'>
          {heroData.contact}
        </Link>

        <div>
          <Typography className='text-xl' resetStyles>
            Based in Romania, BH.
          </Typography>
          <Typography className='pb-2 text-xl' resetStyles>
            Get in touch for availability.
          </Typography>

          <ul className='flex space-x-5 text-gray-500'>
            <li>
              <Link
                href='https://twitter.com/chirila_'
                className='py-2.5 hover:text-red-800'
                external>
                Twitter
              </Link>
            </li>

            <li>
              <Link
                href='https://www.linkedin.com/in/c-andrei'
                className='py-2.5 hover:text-red-800'
                external>
                LinkedIn
              </Link>
            </li>

            <li>
              <Link
                href='https://github.com/Kerosz'
                className='py-2.5 hover:text-red-800'
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
