// packages
import cn from 'classnames';
import { forwardRef } from 'react';
// types
import type { ComponentPropsWithoutRef } from 'react';

enum Component {
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
}

export interface ITypography
  extends ComponentPropsWithoutRef<'p'>,
    ComponentPropsWithoutRef<'h1'> {
  as?: keyof typeof Component;
  component?: keyof typeof Component;
  reset?: boolean;
}

const Typography = forwardRef<HTMLDivElement, ITypography>(
  (props, ref): JSX.Element => {
    const { as, component = 'p', className, children, reset, ...rest } = props;

    const Element = as || component;

    const rootClass = cn(
      {
        'text-4xl font-bold': Element === 'h1' && !reset,
        'text-3xl font-bold': Element === 'h2' && !reset,
        'text-2xl font-bold': Element === 'h3' && !reset,
        'text-xl font-medium': Element === 'h4' && !reset,
        'text-lg font-medium': Element === 'h5' && !reset,
        'text-lg font-base': Element === 'h6' && !reset,
        'text-base font-base': Element === 'p' && !reset,
      },
      className
    );

    return (
      <Element ref={ref} className={rootClass} {...rest}>
        {children}
      </Element>
    );
  }
);

export default Typography;
