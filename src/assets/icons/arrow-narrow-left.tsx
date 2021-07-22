// types
import type { ComponentPropsWithoutRef } from 'react';

export interface IArrowNarrowLeft extends ComponentPropsWithoutRef<'svg'> {}

function ArrowNarrowLeft({
  strokeWidth = 2,
  ...rest
}: IArrowNarrowLeft): JSX.Element {
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
        d='M7 16l-4-4m0 0l4-4m-4 4h18'
      />
    </svg>
  );
}

export default ArrowNarrowLeft;
