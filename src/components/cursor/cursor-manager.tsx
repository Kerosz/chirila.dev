// packages
import { useState } from 'react';
// utils
import { CursorContext } from './curosr-context';
// types
import type { ReactNode } from 'react';
import type { CursorType } from './curosr-context';

export interface ICursorManager {
  children?: ReactNode;
}

function CursorManager(props: ICursorManager): JSX.Element {
  const [type, setCursor] = useState<CursorType>('default');

  return <CursorContext.Provider value={{ type, setCursor }} {...props} />;
}

export default CursorManager;
