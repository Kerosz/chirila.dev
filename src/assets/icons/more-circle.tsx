// types
import type { ComponentPropsWithoutRef } from 'react';

export interface IMoreCircle extends ComponentPropsWithoutRef<'svg'> {}

function MoreCircle({ strokeWidth = 2, ...rest }: IMoreCircle): JSX.Element {
  return (
    <svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg' {...rest}>
      <text>
        <textPath xlinkHref='#circle-path' textAnchor='start'>
          more more more more more more
        </textPath>
      </text>
    </svg>
  );
}

export default MoreCircle;
