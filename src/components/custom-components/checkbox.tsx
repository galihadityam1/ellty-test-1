import { Check } from "lucide-react";
import { useState } from "react";

interface CustomCheckboxProps {
  id: string;
  checked: boolean;
  onCheckedChange: () => void;
  className?: string;
}

export function CustomCheckbox({ id, checked, onCheckedChange, className = '' }: CustomCheckboxProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const getCheckboxStyle = () => {
    if (checked) {
      if (isHovered && !isPressed) {
        return 'bg-[#5087F8] border-[#5087F8]';
      }
      return 'bg-[#2469F6] border-[#2469F6]';
    }
    
    if (isPressed) {
      return 'bg-white border-[#878787]';
    }

    if (isHovered) {
      return 'bg-white border-gray-300';
    }

    return 'bg-white border-[#E3E3E3]';
  };

  const getCheckIconColor = () => {
    if (checked) {
      return '#FFFFFF';
    }
    
    if (isPressed) {
      return '#878787';
    }
    
    if (isHovered) {
      return '#E3E3E3';
    }
    
    return 'transparent';
  };

  const getShadowStyle = () => {
    if (isPressed) {
      return 'shadow-[0_0_0_4px_rgba(0,0,0,0.1)]';
    }
    return '';
  };

  const shouldShowCheck = checked || isHovered || isPressed;

  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      id={id}
      onClick={onCheckedChange}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsPressed(false);
      }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      className={`flex items-center justify-center w-[23px] h-[23px] rounded-[6px] border-2 transition-all cursor-pointer ${getCheckboxStyle()} ${getShadowStyle()} ${className}`}
    >
      {shouldShowCheck && (
        <Check 
          size={14} 
          strokeWidth={3}
          style={{ color: getCheckIconColor() }}
        />
      )}
    </button>
  );
}