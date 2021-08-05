// packages
import { useEffect } from 'react';
import { useRouter } from 'next/router';
// internals
import { useStore } from '~/store';
import { isBrowser } from '~/utils/dom';

export default function useRouterControl(): void {
  const router = useRouter();
  const { setCursor, bodyColorChangePaths } = useStore();

  useEffect(() => {
    const handleRouteChange = () => {
      if (isBrowser) {
        window.scroll({ top: 1, behavior: 'smooth' });
      }

      setCursor('default');
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('routeChangeError', handleRouteChange);

    return () => {
      router.events.off('routeChangeError', handleRouteChange);
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  useEffect(() => {
    if (isBrowser) {
      // If it's one of the paths in the array, change the color to black
      if (bodyColorChangePaths.includes(router.pathname)) {
        document.body.style.backgroundColor = '#00030A';
      } else {
        document.body.style.backgroundColor = '#F3F4F6';
      }
    }
  }, [router.pathname]);
}
