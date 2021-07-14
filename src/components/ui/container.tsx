// packages
import cn from 'classnames';
// types
import type {
  ComponentType,
  HTMLAttributes,
  JSXElementConstructor,
} from 'react';

export interface IContainer extends HTMLAttributes<HTMLDivElement> {
  as?: string | JSXElementConstructor<any>;
  component?: string | JSXElementConstructor<any>;
  reset?: boolean;
  maxW?: string;
}

function Container(props: IContainer): JSX.Element {
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
      'lg:px-14 md:px-12 px-3 mx-auto w-full': !reset,
      'max-w-screen-xl': !maxW,
    },
    className
  );

  return (
    <Element className={rootClass} {...rest}>
      {children}
    </Element>
  );
}

export default Container;
