// packages
import gsap from 'gsap';
import { useCallback, useEffect, useRef, useState } from 'react';
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
      <header
        className='h-[5.5rem] sticky top-0 z-30 bg-faded backdrop-blur-md'
        ref={headerRef}>
        <Container className='h-full'>
          <div className='flex h-full justify-between items-center border-b border-gray-900'>
            <Link href='/' className='flex items-center'>
              <Logo className='w-14' />
            </Link>

            <nav>
              <ul className='flex xs:space-x-10 space-x-6 font-medium'>
                <li>
                  <Link
                    href='/about'
                    className='py-4 text-lg hover:text-red-800'>
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    href='/blog'
                    className='py-4 text-lg hover:text-red-800'>
                    Blog
                  </Link>
                </li>

                <li>
                  <Link
                    href='/snippets'
                    className='py-4 text-lg hover:text-red-800'>
                    Snippets
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </Container>
      </header>
    </>
  );
}

export default Header;
