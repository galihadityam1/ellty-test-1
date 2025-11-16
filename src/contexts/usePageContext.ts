import { useContext } from 'react';
import { PageContext } from './pageContextTypes';

export function usePageContext() {
  const context = useContext(PageContext);
  if (context === undefined) {
    throw new Error('usePageContext must be used within a PageProvider');
  }
  return context;
}
