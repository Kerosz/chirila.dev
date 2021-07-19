// packages
import cn from 'classnames';
import { useRef } from 'react';
import { gsap } from 'gsap';
// components
import useSafeLayoutEffect from '~hooks/use-safe-layout-effect';
import useScrollPosition from '~hooks/use-scroll-position';
import Logo from '~icons/logo';
import { Container, Link } from '~ui/index';
// types
import type { JSXElementConstructor, ReactNode, ReactElement } from 'react';

export interface IHeader {
  preHeader?: JSXElementConstructor<any> | ReactElement;
  children?: ReactNode;
}

function Header({ preHeader }: IHeader): JSX.Element {
  const headerRef = useRef<HTMLDivElement | null>(null);

  const { y: yOffset, prevY: prevYOffset } = useScrollPosition();
  const showHeader = yOffset < 100 || prevYOffset > yOffset;

  useSafeLayoutEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { y: -150 },
      { y: 0, duration: 0.32, ease: 'expo.out', delay: 0.7 }
    );
  }, []);

  return (
    <>
      {preHeader && preHeader}
      <header
        className='h-[5.25rem] sticky top-0 z-30 bg-faded backdrop-blur-md transition-transform duration-500 ease-in-out delay-150'
        style={{
          transform: `translate3d(0, ${showHeader ? '0' : '-100%'}, 0)`,
        }}
        ref={headerRef}>
        <Container className='h-full'>
          <div className='flex h-full justify-between items-center border-b border-gray-900'>
            <Link href='/' className='flex items-center'>
              <Logo className='w-14' />
            </Link>

            <nav>
              <ul className='flex xs:space-x-10 space-x-6 font-medium translate'>
                <li>
                  <Link
                    href='/about'
                    className='py-4 text-lg hover:text-red-800'>
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    href='https://blog.chiria.dev'
                    className='py-4 text-lg hover:text-red-800'
                    external>
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
