// packages
import gsap from 'gsap';
import { useRef } from 'react';
// components
import useSafeLayoutEffect from '../hooks/use-safe-layout-effect';
import Logo from '../assets/icons/logo';
import { Container, Link } from './ui';
// types
import type { JSXElementConstructor, ReactNode, ReactElement } from 'react';

export interface IHeader {
  preHeader?: JSXElementConstructor<any> | ReactElement;
  children?: ReactNode;
}

function Header({ preHeader }: IHeader): JSX.Element {
  const headerRef = useRef<HTMLDivElement | null>(null);

  useSafeLayoutEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { y: -150 },
      { y: 0, duration: 0.32, ease: 'expo.out', delay: 1.6 }
    );
  }, []);

  return (
    <>
      {preHeader && preHeader}
      <Container
        as='header'
        className='h-20 flex justify-between items-center border-b border-gray-900 z-30'
        ref={headerRef}>
        <Link href='/' className='flex items-center'>
          <Logo className='w-12' />
        </Link>

        <nav>
          <ul className='flex space-x-10 font-medium'>
            <li>
              <Link href='/about' className='py-4 hover:text-red-800'>
                About
              </Link>
            </li>

            <li>
              <Link href='/blog' className='py-4 hover:text-red-800'>
                Blog
              </Link>
            </li>

            <li>
              <Link href='/contact' className='py-4 hover:text-red-800'>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </>
  );
}

export default Header;
