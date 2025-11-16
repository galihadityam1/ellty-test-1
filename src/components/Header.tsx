import { CustomCheckbox } from './custom-components/checkbox';
import { usePageContext } from '../contexts/usePageContext';

export function Header() {
  const { allChecked, handleCheckChange } = usePageContext();

  return (
    <div className="w-full py-[10px]">
      <div className="px-[22px]">
        <div className="flex items-center justify-between">
          <div className="text-black-modified text-sm">All Pages</div>
          <CustomCheckbox
            id="all"
            checked={allChecked}
            onCheckedChange={() => handleCheckChange("all")}
            className="shrink-0"
          />
        </div>
      </div>
    </div>
  )
}
