// packages
import { gsap } from 'gsap';
// components
import Logo from '~/assets/icons/logo';
import useSafeLayoutEffect from '~/hooks/use-safe-layout-effect';
import { useStore } from '~/store';

export default function Preloader() {
  const { setIntroComplete } = useStore();

  useSafeLayoutEffect(() => {
    const tl = gsap.timeline();

    tl.to('.loader-logo', {
      opacity: 0,
      scale: 0.7,
      duration: 1.3,
      delay: 1.8,
      ease: 'power4.out',
    });
    tl.to('.loader-container', {
      yPercent: -100,
      duration: 0.55,
      ease: 'circ.out',
    });
    tl.then(() => setIntroComplete());
  }, []);

  return (
    <div className='fixed top-0 h-full w-full z-50 bg-gray-200 flex items-center justify-center loader-container'>
      <Logo className='w-96 loader-logo opacity-1' />
    </div>
  );
}
