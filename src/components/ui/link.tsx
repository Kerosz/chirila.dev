// packages
import NextLink from 'next/link';
import cn from 'classnames';
// types
import type { LinkProps as NextLinkProps } from 'next/link';
import type { AnchorHTMLAttributes } from 'react';

interface ILink
  extends NextLinkProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  external?: boolean;
  fixPosition?: boolean;
}

function Link({
  href,
  replace,
  children,
  className,
  external = false,
  fixPosition = false,
  ...rest
}: ILink): JSX.Element {
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
      <a className={rootClass} {...rest}>
        {children}
      </a>
    </NextLink>
  );
}

export default Link;
