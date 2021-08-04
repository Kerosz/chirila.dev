// packages
import cn from 'classnames';
import { forwardRef } from 'react';
// types
import type { ComponentPropsWithRef, JSXElementConstructor } from 'react';

export interface IBadge extends ComponentPropsWithRef<'span'> {
  as?: string | JSXElementConstructor<any>;
  component?: string | JSXElementConstructor<any>;
  text: string;
}

const Badge = forwardRef<HTMLSpanElement, IBadge>((props, ref): JSX.Element => {
  const { as, component = 'span', text, className, children, ...rest } = props;

  const Element = as || component;

  const rootClass = cn(
    'border border-gray-900 px-3 py-1.5 text-gray-700 font-medium uppercase max-w-max',
    className
  );

  return (
    <Element ref={ref} className={rootClass} {...rest}>
      {children || text}
    </Element>
  );
});

Badge.displayName = 'Badge';

export default Badge;
