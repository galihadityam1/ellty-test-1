import { cn } from "../../lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn(
      "bg-white rounded-[6px] shadow-custom w-auto max-w-2xl min-w-[370px] py-[10px]",
      className
    )}>
      {children}
    </div>
  );
}
