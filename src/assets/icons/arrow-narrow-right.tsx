// types
import type { ComponentPropsWithoutRef } from 'react';

export interface IArrowNarrowRight extends ComponentPropsWithoutRef<'svg'> {}

function ArrowNarrowRight({
  strokeWidth = 2,
  ...rest
}: IArrowNarrowRight): JSX.Element {
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
        d='M17 8l4 4m0 0l-4 4m4-4H3'
      />
    </svg>
  );
}

export default ArrowNarrowRight;
