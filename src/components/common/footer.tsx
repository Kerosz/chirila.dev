// components
import Logo from '~icons/logo';
import Link from '~components/common/link';
import { Container, Typography } from '../ui';
import { SBTrack } from '~/lib/splitbee';
// data
import config from '~data/config';

function Footer(): JSX.Element {
  return (
    <footer className='bg-black-tone pb-32 pt-6 text-gray-50 relative z-10'>
      <Container>
        <span className='block border-t border-gray-800 pb-8' />
        <div className='flex md:flex-row flex-col-reverse'>
          <div className='md:w-2/5 w-full flex items-center'>
            <Link href='/' className='max-w-max flex'>
              <Logo className='w-12' color='white' />
            </Link>

            <div className='ml-3'>
              <Typography
                className='font-medium uppercase text-sm pb-1'
                resetStyles>
                Andrei Chirila
              </Typography>

              <Typography className='text-gray-400 text-sm' resetStyles>
                © Copyright is a fallacy.
              </Typography>
            </div>
          </div>

          <div className='md:w-3/5 w-full flex xs:flex-row flex-col lg:justify-around justify-between md:pb-0 pb-12'>
            <ul className='xs:pb-0 pb-12'>
              <li className='font-serif uppercase font-medium tracking-wider text-sm pb-3.5'>
                In this space
              </li>
              <li className='mb-0.5'>
                <Link
                  href='/about'
                  className='py-4 text-gray-400 hover:text-red-800'>
                  Get to know me
                </Link>
              </li>

              <li className='mb-0.5'>
                <Link
                  href={`/${config.blog.path}`}
                  className='py-4 text-gray-400 hover:text-red-800'>
                  Read my articles
                </Link>
              </li>

              <li>
                <Link
                  href={`/${config.snippets.path}`}
                  className='py-4 text-gray-400 hover:text-red-800'>
                  Find useful snippets
                </Link>
              </li>
            </ul>

            <ul>
              <li className='font-serif uppercase font-medium tracking-wider text-sm pb-3.5'>
                Stay in touch
              </li>

              <li className='mb-0.5'>
                <Link
                  href={config.linkedIn}
                  external
                  className='py-4 text-gray-400 hover:text-red-800'
                  sbTrack={SBTrack.LinkedIn}>
                  Business related on{' '}
                  <span className='font-medium'>LinkedIn</span>
                </Link>
              </li>

              <li className='mb-0.5'>
                <Link
                  href={config.gitHub}
                  external
                  className='py-4 text-gray-400 hover:text-red-800'
                  sbTrack={SBTrack.GitHub}>
                  Open source & WIPs on{' '}
                  <span className='font-medium'>GitHub</span>
                </Link>
              </li>

              <li>
                <Link
                  href={config.twitter.url}
                  external
                  className='py-4 text-gray-400 hover:text-red-800'
                  sbTrack={SBTrack.Twitter}>
                  Thoughts on <span className='font-medium'>Twitter</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
