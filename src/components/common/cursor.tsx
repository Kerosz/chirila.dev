// packages
import dynamic from 'next/dynamic';
import { useEffect, useRef } from 'react';
import { isMobile } from 'react-device-detect';
// components
import useDelayMouseMovement from '~hooks/use-delay-mouse-movement';
import { useStore } from '~/store';

const INITIAL_MOUSE_POS = { x: -1000, y: -10 };

function Cursor(): JSX.Element | null {
  const outerCursorRef = useRef<HTMLDivElement | null>(null);
  const innerCursorRef = useRef<HTMLDivElement | null>(null);

  const { cursorType, introComplete } = useStore();

  const position = useDelayMouseMovement<HTMLDivElement>({
    elementRef: outerCursorRef,
    mousePosition: INITIAL_MOUSE_POS,
    delay: 0.18,
    deps: [introComplete],
  });

  const handleMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event;

    const mouseX = clientX;
    const mouseY = clientY;

    if (outerCursorRef.current) {
      position.mouseX = mouseX - outerCursorRef.current!.clientWidth / 2;
      position.mouseY = mouseY - outerCursorRef.current!.clientHeight / 2;
    }

    if (innerCursorRef.current) {
      innerCursorRef.current!.style.transform = `translate3d(${
        mouseX - innerCursorRef.current!.clientWidth / 2
      }px, ${mouseY - innerCursorRef.current!.clientHeight / 2}px, 0)`;
    }
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!isMobile && introComplete) {
    return (
      <div className={`cursor-${cursorType}`}>
        <div
          className='fixed z-50 pointer-events-none mix-blend-difference'
          style={{
            transform: `translate3d(${INITIAL_MOUSE_POS.x + 26}px, ${
              INITIAL_MOUSE_POS.y + 26
            }px, 0)`,
          }}
          ref={innerCursorRef}>
          <span className='block rounded-full w-8 h-8 bg-white inner-cursor' />
        </div>
        <div
          className='fixed z-50 pointer-events-none mix-blend-difference'
          ref={outerCursorRef}>
          <span className='block rounded-full w-20 h-20 border border-white outer-cursor' />
        </div>
      </div>
    );
  }

  return null;
}

export default dynamic(() => Promise.resolve(Cursor), {
  ssr: false,
});
