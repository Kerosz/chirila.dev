// packages
import NextLink from 'next/link';
import cn from 'classnames';
import { forwardRef } from 'react';
// utils
import { useStore } from '~/store';
// types
import type { LinkProps as NextLinkProps } from 'next/link';
import type { AnchorHTMLAttributes } from 'react';
import type { SBTrackEvent } from '~/lib/splitbee';

interface ILink
  extends NextLinkProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  external?: boolean;
  fixPosition?: boolean;
  sbTrack?: SBTrackEvent;
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
    sbTrack,
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

  const matchInternal =
    String(href).startsWith('/') || String(href).startsWith('#');

  if (external || !matchInternal) {
    return (
      <a
        className={rootClass}
        ref={ref}
        href={href as string}
        rel='noopener noreferrer'
        target='_blank'
        onMouseEnter={onMouseEnter || handleMouseEnter}
        onMouseLeave={onMouseLeave || handleMouseLeave}
        data-splitbee-event={sbTrack}
        {...rest}>
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} replace={replace} passHref>
      <a
        ref={ref}
        className={rootClass}
        onMouseEnter={onMouseEnter || handleMouseEnter}
        onMouseLeave={onMouseLeave || handleMouseLeave}
        data-splitbee-event={sbTrack}
        {...rest}>
        {children}
      </a>
    </NextLink>
  );
});

export default Link;
