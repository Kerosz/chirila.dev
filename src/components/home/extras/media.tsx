// packages
import cn from 'classnames';
import { useEffect, useRef } from 'react';
// components
import useDelayMouseMovement from '~hooks/use-delay-mouse-movement';
// types
import type { ComponentPropsWithoutRef } from 'react';

export interface IMedia extends ComponentPropsWithoutRef<'img'> {
  title: string;
  src: string;
  active: boolean;
}

export default function Media({
  title,
  src,
  className,
  active,
}: IMedia): JSX.Element {
  const ref = useRef<HTMLImageElement | null>(null);

  const position = useDelayMouseMovement<HTMLImageElement>({
    elementRef: ref,
  });

  const rootClass = cn(
    `transition-opacity ease-in duration-150 object-cover absolute pointer-events-none`,
    {
      'opacity-195': active,
      'opacity-0': !active,
    },
    className
  );

  const updateMousePosition = (event: MouseEvent) => {
    const { clientX, clientY } = event;

    const mouseX = clientX;
    const mouseY = clientY;

    if (ref.current) {
      position.mouseX = mouseX - ref.current!.clientWidth / 2;
      position.mouseY = mouseY - ref.current!.clientHeight / 2;
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition);

    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    // Cannot use next/image as they don't pass the `ref` attr to the img
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={ref}
      src={`/images/extras/${src}`}
      alt={title}
      width={185}
      className={rootClass}
      loading='lazy'
    />
  );
}
