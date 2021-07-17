import React from 'react';

export interface IPosition {
  mouseX: number;
  mouseY: number;
  destinationX: number;
  destinationY: number;
  distanceX: number;
  distanceY: number;
  key: number;
}

export interface IMouseMovementOptions<T> {
  elementRef: React.MutableRefObject<T | null>;
  mousePosition?: {
    x: number;
    y: number;
  };
  delay?: number;
}

function useDelayMouseMovement<T extends HTMLDivElement = HTMLDivElement>({
  elementRef,
  mousePosition,
  delay = 0.15,
}: IMouseMovementOptions<T>) {
  const positionRef = React.useRef<IPosition>({
    mouseX: mousePosition?.x || 0,
    mouseY: mousePosition?.y || 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  });

  React.useEffect(() => {
    function calculateMousePosition() {
      positionRef.current.key = requestAnimationFrame(calculateMousePosition);

      const {
        mouseX,
        mouseY,
        destinationX,
        destinationY,
        distanceX,
        distanceY,
      } = positionRef.current;

      if (elementRef.current) {
        if (!destinationX || !destinationY) {
          positionRef.current.destinationX = mouseX;
          positionRef.current.destinationY = mouseY;
        } else {
          positionRef.current.distanceX = (mouseX - destinationX) * delay;
          positionRef.current.distanceY = (mouseY - destinationY) * delay;
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

        elementRef.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
      }
    }

    if (elementRef.current) {
      calculateMousePosition();
    }
  }, []);

  return positionRef.current;
}

export default useDelayMouseMovement;
