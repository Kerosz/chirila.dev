// packages
import cn from 'classnames';
import { forwardRef } from 'react';
// types
import type {
  ComponentPropsWithRef,
  ComponentType,
  HTMLAttributes,
  JSXElementConstructor,
} from 'react';

export interface IContainer extends ComponentPropsWithRef<'div'> {
  as?: string | JSXElementConstructor<any>;
  component?: string | JSXElementConstructor<any>;
  reset?: boolean;
  maxW?: string;
}

const Container = forwardRef<HTMLDivElement, IContainer>(
  (props, ref): JSX.Element => {
    const {
      as,
      component = 'div',
      className,
      children,
      reset,
      maxW = '',
      ...rest
    } = props;

    const Element = (as || component) as ComponentType<
      HTMLAttributes<HTMLDivElement>
    >;

    const rootClass = cn(
      maxW,
      {
        'lg:px-14 md:px-12 px-4 mx-auto w-full': !reset,
        'max-w-screen-3xl': !maxW,
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

export default Container;
