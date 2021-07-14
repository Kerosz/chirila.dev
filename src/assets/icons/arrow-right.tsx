// types
import type { ComponentPropsWithoutRef } from 'react';

export interface IArrowRight extends ComponentPropsWithoutRef<'svg'> {
  strokeWidth?: number;
}

function ArrowRight({ strokeWidth = 2, ...rest }: IArrowRight): JSX.Element {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      {...rest}>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={strokeWidth}
        d='M14 5l7 7m0 0l-7 7m7-7H3'
      />
    </svg>
  );
}

export default ArrowRight;
