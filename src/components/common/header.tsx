// packages
import cn from 'classnames';
import { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useRouter } from 'next/router';
// components
import Logo from '~icons/logo';
import Link from '~components/common/link';
import useScrollPosition from '~hooks/use-scroll-position';
import ArrowNarrowLeft from '~/assets/icons/arrow-narrow-left';
import useSafeLayoutEffect from '~hooks/use-safe-layout-effect';
import { Button, Container, Typography } from '~ui/index';
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
  const [localAnimationComplete, setLocalAnimationComplete] =
    useState<boolean>(false);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const { introComplete, bodyColorChangePaths } = useStore();
  const { y, prevY } = useScrollPosition();
  const router = useRouter();

  const showHeader: boolean = y < 110 || prevY > y;
  const isDarkBody: boolean = bodyColorChangePaths.includes(router.pathname);
  const isHome = router.pathname === '/';

  useSafeLayoutEffect(() => {
    if (introComplete) {
      const tl = gsap.timeline();

      tl.to(headerRef.current, {
        y: 0,
        duration: 0.1,
        ease: 'expo.out',
        delay: 0.11,
      });
      tl.then(() => setLocalAnimationComplete(true));
    }
  }, [introComplete]);

  const rootClass = cn(
    'h-[5.25rem] sticky top-0 z-30 text-gray-100 transition-transform duration-700 ease-in-out delay-150 transform-gpu -translate-y-40',
    {
      'bg-faded-black text-gray-50': isDarkBody,
      'bg-faded-white text-black': !isDarkBody,
    }
  );
  const borderClass = cn('flex h-full justify-between items-center border-b', {
    'border-gray-900': !isDarkBody,
    'border-gray-100': isDarkBody,
  });
  const backLinkClass = cn('py-4 flex group', {
    'hover:text-red-800': !isDarkBody,
    'hover:text-green-500': isDarkBody,
  });

  return (
    <>
      {preHeader && isHome && preHeader}
      <header
        className={rootClass}
        style={{
          transform: `translate3d(0, ${
            showHeader && localAnimationComplete ? '0' : '-160px'
          }, 0)`,
        }}
        ref={headerRef}>
        <Container className='h-full'>
          <div className={borderClass}>
            <Link href='/' className='flex items-center'>
              <Logo className='w-14' color={isDarkBody ? 'white' : 'black'} />
            </Link>

            <nav>
              {isHome ? (
                <ul className='flex xs:space-x-10 space-x-6 font-medium'>
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
              ) : (
                <Button
                  className={backLinkClass}
                  onClick={() => router.back()}
                  reset>
                  <ArrowNarrowLeft className='w-6 mr-1 group-hover:transform-gpu group-hover:-translate-x-1.5 transition-all duration-300' />
                  <Typography className='font-medium text-lg' resetStyles>
                    Back
                  </Typography>
                </Button>
              )}
            </nav>
          </div>
        </Container>
      </header>
    </>
  );
}

export default Header;
