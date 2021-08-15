// packages
import cn from 'classnames';
import { forwardRef } from 'react';
// utils
import { useStore } from '~/store';
// types
import type { ComponentProps, JSXElementConstructor } from 'react';
import type { SBTrackEvent } from '~/lib/splitbee';

export interface IButton extends ComponentProps<'button'> {
  label?: string;
  as?: string | JSXElementConstructor<any>;
  component?: string | JSXElementConstructor<any>;
  scheme?: 'light' | 'dark';
  disabled?: boolean;
  loading?: boolean;
  external?: boolean;
  reset?: boolean;
  sbTrack?: SBTrackEvent;
}

const Button = forwardRef<HTMLButtonElement, IButton>((props, ref) => {
  const {
    type = 'button',
    label,
    as,
    component = 'button',
    className,
    scheme = 'light',
    disabled,
    children,
    loading,
    reset = false,
    sbTrack,
    ...rest
  } = props;

  const { setCursor } = useStore();

  const handleMouseEnter = () => {
    console.log('enter');

    if (disabled) {
      setCursor('none');
    } else {
      setCursor('link');
    }
  };
  const handleMouseLeave = () => setCursor('default');

  const rootClass = cn(
    {
      'w-24 h-24 rounded-full flex items-center justify-center font-medium':
        !reset,
    },
    {
      'bg-gray-100 text-gray-900': scheme === 'light' && !reset,
      'bg-black-tone text-gray-50': scheme === 'dark' && !reset,
      'hover:bg-green-700': scheme === 'light' && !disabled && !reset,
      'hover:bg-red-800': scheme === 'dark' && !disabled && !reset,
      'hover:-rotate-12 transition-all duration-200 hover:text-black':
        !disabled && !reset,
      'opacity-70': disabled,
    },
    className
  );

  const Element = as || component;

  return (
    <Element
      type={type}
      ref={ref}
      className={rootClass}
      disabled={disabled}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-splitbee-event={sbTrack}
      {...rest}>
      {loading ? 'Loading...' : label || children}
    </Element>
  );
});

export default Button;
