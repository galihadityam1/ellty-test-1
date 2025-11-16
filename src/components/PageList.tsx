import { CustomCheckbox } from './custom-components/checkbox';
import { usePageContext } from '../contexts/usePageContext';

export function PageList() {
  const { pages, handleCheckChange } = usePageContext();

  return (
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
  )
}
