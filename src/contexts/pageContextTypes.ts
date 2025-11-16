import { createContext } from 'react';
import type { PageItem } from './PageContext';

export interface PageContextType {
  pages: PageItem[];
  handleCheckChange: (id: string) => void;
  handleDone: () => void;
  allChecked: boolean;
}

export const PageContext = createContext<PageContextType | undefined>(undefined);
