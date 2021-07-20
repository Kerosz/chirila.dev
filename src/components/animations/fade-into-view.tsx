// packages
import cn from 'classnames';
import { useRef } from 'react';
import { gsap } from 'gsap';
// internals
import useSafeLayoutEffect from '~/hooks/use-safe-layout-effect';
import { useStore } from '~/store';
// types
import type { JSXElementConstructor, ComponentPropsWithoutRef } from 'react';

export interface IFadeIntoView extends ComponentPropsWithoutRef<'div'> {
  as?: string | JSXElementConstructor<any>;
  component?: string | JSXElementConstructor<any>;
  entry?: gsap.TweenVars;
  duration?: gsap.TweenVars['duration'];
  ease?: gsap.TweenVars['ease'];
}

const FadeIntoView = ({
  as,
  component = 'div',
  entry,
  duration = 1.15,
  ease = 'power4.inOut',
  children,
  className,
}: IFadeIntoView): JSX.Element => {
  const { introComplete } = useStore();
  const refElement = useRef<HTMLDivElement | null>(null);

  useSafeLayoutEffect(() => {
    if (introComplete) {
      gsap.to(refElement.current, {
        y: 0,
        opacity: 1,
        duration,
        ease,
        ...entry,
      });
    }
  }, [introComplete]);

  const Element = as || component;

  const rootClass = cn('opacity-0 transform-gpu translate-y-80', className);

  return (
    <Element className={rootClass} ref={refElement}>
      {children}
    </Element>
  );
};

FadeIntoView.displayName = 'FadeIntoView';

export default FadeIntoView;
