// packages
import { useEffect } from 'react';
import { useRouter } from 'next/router';
// internals
import { useStore } from '~/store';
import { isBrowser } from '~/utils/dom';

export default function useScrollToTop(): void {
  const router = useRouter();
  const { setCursor } = useStore();

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
}
