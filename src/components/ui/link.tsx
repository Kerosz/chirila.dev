// packages
import NextLink from 'next/link';
import cn from 'classnames';
// types
import type { LinkProps as NextLinkProps } from 'next/link';
import { AnchorHTMLAttributes, forwardRef } from 'react';

interface ILink
  extends NextLinkProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  external?: boolean;
  fixPosition?: boolean;
}

const Link = forwardRef<HTMLAnchorElement, ILink>((props, ref): JSX.Element => {
  const {
    href,
    replace,
    children,
    className,
    external = false,
    fixPosition = false,
    ...rest
  } = props;

  const rootClass = cn(
    {
      flex: fixPosition,
      inline: !fixPosition,
    },
    className
  );

  if (external) {
    return (
      <a
        className={rootClass}
        ref={ref}
        href={href as string}
        rel='noopener noreferrer'
        target='_blank'
        {...rest}>
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} replace={replace}>
      <a ref={ref} className={rootClass} {...rest}>
        {children}
      </a>
    </NextLink>
  );
});

export default Link;
