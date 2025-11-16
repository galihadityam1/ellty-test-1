import { Button } from './ui/button';
import { usePageContext } from '../contexts/usePageContext';

export function DoneButton() {
  const { handleDone } = usePageContext();

  return (
    <div className="px-[22px] py-[10px]">
      <Button
        onClick={handleDone}
        className="w-full button-default button-hover text-black-modified font-semibold py-[10px] px-[20px] rounded transition-colors text-sm cursor-pointer"
      >
        Done
      </Button>
    </div>
  )
}
