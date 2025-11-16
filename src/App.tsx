import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button';
import { Separator } from './components/ui/separator';
import { CustomCheckbox } from './components/custom-components/checkbox';

interface PageItem {
  id: string;
  label: string;
  checked: boolean;
}

function App() {
  const [pages, setPages] = useState<PageItem[]>([
    { id: "page1", label: "Page 1", checked: false },
    { id: "page2", label: "Page 2", checked: false },
    { id: "page3", label: "Page 3", checked: false },
    { id: "page4", label: "Page 4", checked: false },
  ]);

  const handleCheckChange = (id: string) => {
    if (id === "all") {
      const newCheckedState = !pages.every((p) => p.checked);
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
    <div className="min-h-screen flex items-center justify-center">
       <div className="bg-white rounded-[6px] shadow-custom w-auto max-w-2xl min-w-[370px] py-[10px]">

        {/* Header Section */}
        <div className="w-full py-[10px]">
          <div className="px-[22px]">
            <div className="flex items-center justify-between">
              <div className="text-black-modified text-sm">All Pages</div>
              <CustomCheckbox
                id="all"
                checked={pages.every((p) => p.checked)}
                onCheckedChange={() => handleCheckChange("all")}
                className="shrink-0"
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className='px-[15px] py-[10px]'>
          <Separator className='bg-[#CDCDCD]' />
        </div>

        {/* Pages List Section */}
        <div className="w-full">
          <div className="px-[22px] py-2">
            <div className="flex flex-col">
              {pages.map((page) => (
                <div
                  key={page.id}
                  className="flex items-center justify-between py-3 bg-white"
                >
                  <label htmlFor={page.id} className="text-black-modified cursor-pointer text-sm">
                    {page.label}
                  </label>
                  <CustomCheckbox
                    id={page.id}
                    checked={page.checked}
                    onCheckedChange={() => handleCheckChange(page.id)}
                    className="shrink-0"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className='px-[15px] py-[10px]'>
          <Separator className='bg-[#CDCDCD]'/>
        </div>

        {/* Button Section */}
        <div className="px-[22px] py-[10px]">
          <Button
            onClick={handleDone}
            className="w-full button-default button-hover text-black-modified font-semibold py-[10px] px-[20px] rounded transition-colors text-sm cursor-pointer"
          >
            Done
          </Button>
        </div>

      </div>
    </div>
  )
}

export default App