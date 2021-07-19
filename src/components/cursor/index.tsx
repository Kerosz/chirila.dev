// packages
import { useEffect, useRef } from 'react';
import { isMobile } from 'react-device-detect';
// components
import useDelayMouseMovement from '~/hooks/use-delay-mouse-movement';
import { useCursor } from './curosr-context';

const INITIAL_MOUSE_POS = { x: 400, y: 145 };

function Cursor(): JSX.Element | null {
  const outerCursorRef = useRef<HTMLDivElement | null>(null);
  const innerCursorRef = useRef<HTMLDivElement | null>(null);

  const position = useDelayMouseMovement<HTMLDivElement>({
    elementRef: outerCursorRef,
    mousePosition: INITIAL_MOUSE_POS,
    delay: 0.18,
  });

  const { type } = useCursor();

  const onMouseMove = (event: MouseEvent) => {
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
    document.addEventListener('mousemove', onMouseMove);

    return () => document.removeEventListener('mousemove', onMouseMove);
  }, []);

  return !isMobile ? (
    <div className={`cursor-${type}`}>
      <div
        className='fixed z-50 pointer-events-none mix-blend-difference'
        style={{
          transform: `translate3d(${INITIAL_MOUSE_POS.x + 26}px, ${
            INITIAL_MOUSE_POS.y + 26
          }px, 0)`,
        }}
        ref={innerCursorRef}>
        <span className='block rounded-full w-7 h-7 bg-white inner-cursor' />
      </div>
      <div
        className='fixed z-50 pointer-events-none mix-blend-difference'
        ref={outerCursorRef}>
        <span className='block rounded-full w-20 h-20 border border-white outer-cursor' />
      </div>
    </div>
  ) : null;
}

export default Cursor;
