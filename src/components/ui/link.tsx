// packages
import NextLink from 'next/link';
import cn from 'classnames';
import { forwardRef } from 'react';
// utils
import { useStore } from '~/store';
// types
import type { LinkProps as NextLinkProps } from 'next/link';
import type { AnchorHTMLAttributes } from 'react';

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
    onMouseEnter,
    onMouseLeave,
    ...rest
  } = props;

  const { setCursor } = useStore();

  const handleMouseEnter = () => setCursor('link');
  const handleMouseLeave = () => setCursor('default');

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
        onMouseEnter={onMouseEnter || handleMouseEnter}
        onMouseLeave={onMouseLeave || handleMouseLeave}
        {...rest}>
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} replace={replace}>
      <a
        ref={ref}
        className={rootClass}
        onMouseEnter={onMouseEnter || handleMouseEnter}
        onMouseLeave={onMouseLeave || handleMouseLeave}
        {...rest}>
        {children}
      </a>
    </NextLink>
  );
});

export default Link;
