// packages
import cn from 'classnames';
import { useEffect, useRef, useState } from 'react';
// types
import type { ComponentPropsWithoutRef } from 'react';

export interface IMedia extends ComponentPropsWithoutRef<'img'> {
  title: string;
  src: string;
  active: boolean;
}

export interface IPoint {
  x: number;
  y: number;
}

// Setting `x` to `-1000` to be completely out of the screen
const DEFAULT_STATE: IPoint = { x: -1000, y: 0 };

function Media({ title, src, className, active }: IMedia): JSX.Element {
  const [{ x, y }, setMousePosition] = useState<IPoint>(DEFAULT_STATE);

  const ref = useRef<HTMLImageElement | null>(null);

  const rootClass = cn(
    `transition-opacity ease-in duration-150 object-cover fixed top-0 left-0 z-10`,
    {
      'block visible opacity-80': active,
      'hidden invisible': !active,
    },
    className
  );

  useEffect(() => {
    const updateMousePosition = (event: MouseEvent) => {
      const x = event.clientX;
      const y = event.clientY;

      if (ref.current) {
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    // Cannot use next/image as they don't pass the `style` attr to the img
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={ref}
      src={`/images/${src}`}
      alt={title}
      width={165}
      className={rootClass}
      decoding='async'
      loading='eager'
      style={{
        transform: `translate3d(${x - 120 / 2}px, ${y - 290 / 2}px, 0)`,
      }}
    />
  );
}

export default Media;
