// packages
import Image from 'next/image';
// components
import Link from '../common/link';
import { Container, Typography } from '~ui/index';

export default function AuthorInfo() {
  return (
    <section className='bg-light-gray border-t border-b border-gray-200 py-10'>
      <Container maxW='max-w-[848px]' className='flex sm:flex-row flex-col'>
        <div className='flex flex-col sm:w-4/6 xs:pr-8'>
          <Typography
            resetStyles
            className='font-medium text-gray-800 pb-5 text-3xl'>
            About the author
          </Typography>

          <Typography resetStyles className='text-lg'>
            Hey, I&apos;m{' '}
            <Link
              href='/about'
              className='font-medium underline text-gray-800 hover:text-red-800'>
              Andrei
            </Link>
            , a full-stack developer, technical writer, and open-source lover. I
            write about modern web development, design, business and computer
            science.
          </Typography>

          <div className='flex space-x-3.5 text-gray-800 font-medium'>
            <Link
              href='https://www.twitter.com/chirila_'
              className='py-4 hover:text-red-800'
              external>
              Twitter
            </Link>

            <Link
              href='https://www.linkedin.com/in/c-andrei/'
              external
              className='py-4 hover:text-red-800'>
              LinkedIn
            </Link>

            <Link
              href='https://github.com/Kerosz'
              external
              className='py-4 hover:text-red-800'>
              GitHub
            </Link>
          </div>
        </div>

        <div className='sm:w-2/6 sm:mt-0 mt-6 flex items-center justify-center min-w-max'>
          <Image
            alt='Andrei Chirila'
            height={200}
            width={200}
            src='/images/blog/avatar-full.jpg'
            className='rounded-full border border-gray-300 shadow-md'
            priority
          />
        </div>
      </Container>
    </section>
  );
}
