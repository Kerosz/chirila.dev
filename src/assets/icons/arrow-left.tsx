// types
import type { ComponentPropsWithoutRef } from 'react';

export interface IArrowLeft extends ComponentPropsWithoutRef<'svg'> {}

function ArrowLeft({ strokeWidth = 2, ...rest }: IArrowLeft): JSX.Element {
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
        d='M10 19l-7-7m0 0l7-7m-7 7h18'
      />
    </svg>
  );
}

export default ArrowLeft;
