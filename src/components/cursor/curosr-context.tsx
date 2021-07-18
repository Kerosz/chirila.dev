import { createContext, useContext } from 'react';

export type CursorType = 'default' | 'link' | 'none';

export interface ICursorContext {
  type: CursorType;
  setCursor: (type: CursorType) => void;
}

export const CursorContext = createContext<ICursorContext>({
  type: 'default',
  setCursor: () => {},
});

export const useCursor = () => useContext(CursorContext);
