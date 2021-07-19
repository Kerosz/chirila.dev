// packages
import { useRef, useState } from 'react';
import { gsap } from 'gsap';
// components
import useSafeLayoutEffect from '~hooks/use-safe-layout-effect';
import useScrollPosition from '~hooks/use-scroll-position';
import Logo from '~icons/logo';
import { Container, Link } from '~ui/index';
import { useStore } from '~/store';
// data
import navLinksData from '~data/nav-links';
// types
import type { JSXElementConstructor, ReactNode, ReactElement } from 'react';

export interface IHeader {
  preHeader?: JSXElementConstructor<any> | ReactElement;
  children?: ReactNode;
}

function Header({ preHeader }: IHeader): JSX.Element {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const [localAnimationComplete, setLocalAnimationComplete] =
    useState<boolean>(false);
  const { y, prevY } = useScrollPosition();
  const { introComplete } = useStore();

  const showHeader = y < 110 || prevY > y;

  useSafeLayoutEffect(() => {
    if (introComplete) {
      const tl = gsap.timeline();

      tl.to(headerRef.current, {
        y: 0,
        duration: 0.1,
        ease: 'expo.out',
        delay: 0.1,
      });
      tl.then(() => setLocalAnimationComplete(true));
    }
  }, [introComplete]);

  return (
    <>
      {preHeader && preHeader}
      <header
        className='h-[5.25rem] sticky top-0 z-30 bg-faded backdrop-blur-md transition-transform duration-700 ease-in-out delay-150 transform-gpu -translate-y-36'
        style={{
          transform: `translate3d(0, ${
            showHeader && localAnimationComplete ? '0' : '-144px'
          }, 0)`,
        }}
        ref={headerRef}>
        <Container className='h-full'>
          <div className='flex h-full justify-between items-center border-b border-gray-900'>
            <Link href='/' className='flex items-center'>
              <Logo className='w-14' />
            </Link>

            <nav>
              <ul className='flex xs:space-x-10 space-x-6 font-medium translate'>
                {navLinksData.map(({ label, path, isExternal }) => (
                  <li key={label}>
                    <Link
                      href={path}
                      className='py-4 text-lg hover:text-red-800'
                      external={isExternal}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </Container>
      </header>
    </>
  );
}

export default Header;
