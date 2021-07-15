import { useEffect, useRef } from 'react';

export interface ICursor {}

export interface IPosition {
  mouseX: number;
  mouseY: number;
  destinationX: number;
  destinationY: number;
  distanceX: number;
  distanceY: number;
  key: number;
}

const MOUSE_START_X_POS = 200;
const MOUSE_START_Y_POS = 200;

function Cursor(): JSX.Element {
  const outerCursorRef = useRef<HTMLDivElement | null>(null);
  const innerCursorRef = useRef<HTMLDivElement | null>(null);
  const positionRef = useRef<IPosition>({
    mouseX: MOUSE_START_X_POS,
    mouseY: MOUSE_START_Y_POS,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  });

  const onMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event;

    const mouseX = clientX;
    const mouseY = clientY;

    positionRef.current.mouseX =
      mouseX - outerCursorRef.current!.clientWidth / 2;
    positionRef.current.mouseY =
      mouseY - outerCursorRef.current!.clientHeight / 2;

    innerCursorRef.current!.style.transform = `translate3d(${
      mouseX - innerCursorRef.current!.clientWidth / 2
    }px, ${mouseY - innerCursorRef.current!.clientHeight / 2}px, 0)`;
  };

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove);

    return () => document.removeEventListener('mousemove', onMouseMove);
  }, []);

  useEffect(() => {
    function followInnerCursor() {
      positionRef.current.key = requestAnimationFrame(followInnerCursor);

      const {
        mouseX,
        mouseY,
        destinationX,
        destinationY,
        distanceX,
        distanceY,
      } = positionRef.current;

      if (!destinationX || !destinationY) {
        positionRef.current.destinationX = mouseX;
        positionRef.current.destinationY = mouseY;
      } else {
        positionRef.current.distanceX = (mouseX - destinationX) * 0.18;
        positionRef.current.distanceY = (mouseY - destinationY) * 0.18;
        if (
          Math.abs(positionRef.current.distanceX) +
            Math.abs(positionRef.current.distanceY) <
          0.1
        ) {
          positionRef.current.destinationX = mouseX;
          positionRef.current.destinationY = mouseY;
        } else {
          positionRef.current.destinationX += distanceX;
          positionRef.current.destinationY += distanceY;
        }
      }

      outerCursorRef.current!.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
    }

    followInnerCursor();
  }, []);

  return (
    <>
      <div
        className='fixed z-50 rounded-full w-20 h-20 border border-gray-900 overflow-hidden pointer-events-none'
        ref={outerCursorRef}
      />
      <div
        className='fixed z-50 rounded-full w-7 h-7 bg-white overflow-hidden pointer-events-none mix-blend-difference'
        style={{
          transform: `translate3d(${MOUSE_START_X_POS + 26}px, ${
            MOUSE_START_Y_POS + 26
          }px, 0)`,
        }}
        ref={innerCursorRef}
      />
    </>
  );
}

export default Cursor;
