// components
import { Container, Link, Typography } from './ui';

function Hero(): JSX.Element {
  return (
    <Container as='section' className='h-[550px] pt-36 flex flex-col'>
      <Typography as='h1' className='text-10xl text-gray-900 font-black pb-14'>
        A. Chirila
      </Typography>

      <div className='flex w-full justify-between items-end'>
        <div className='flex flex-col'>
          <Typography className='font-medium text-2xl ml-2 text-gray-900' reset>
            /Fullstack Developer
          </Typography>

          <Typography className='font-medium text-2xl ml-2 text-gray-900' reset>
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
