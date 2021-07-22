import create from 'zustand';
import { combine } from 'zustand/middleware';

export type CursorType = 'default' | 'link' | 'none';

export const useStore = create(
  combine(
    {
      cursorType: 'default' as CursorType,
      introComplete: false,
      bodyColorChangePaths: ['/about'],
    },
    (set) => ({
      setCursor: (type: CursorType) => set({ cursorType: type }),
      setIntroComplete: () => set({ introComplete: true }),
    })
  )
);
