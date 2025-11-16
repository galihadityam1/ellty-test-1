import { useState, type ReactNode } from 'react';
import { PageContext } from './pageContextTypes';

export interface PageItem {
  id: string;
  label: string;
  checked: boolean;
}

export function PageProvider({ children }: { children: ReactNode }) {
  const [pages, setPages] = useState<PageItem[]>([
    { id: "page1", label: "Page 1", checked: false },
    { id: "page2", label: "Page 2", checked: false },
    { id: "page3", label: "Page 3", checked: false },
    { id: "page4", label: "Page 4", checked: false },
  ]);

  const allChecked = pages.every((p) => p.checked);

  const handleCheckChange = (id: string) => {
    if (id === "all") {
      const newCheckedState = !allChecked;
      setPages(
        pages.map((page) => ({
          ...page,
          checked: newCheckedState,
        }))
      );
    } else {
      const updatedPages = pages.map((page) =>
        page.id === id ? { ...page, checked: !page.checked } : page
      );
      setPages(updatedPages);
    }
  };

  const handleDone = () => {
    const selectedPages = pages
      .filter((p) => p.checked)
      .map((p) => p.label);
    console.log("Selected pages:", selectedPages);
    alert(`Selected pages: ${selectedPages.join(", ") || "None"}`);
  };

  return (
    <PageContext.Provider value={{ pages, handleCheckChange, handleDone, allChecked }}>
      {children}
    </PageContext.Provider>
  );
}

