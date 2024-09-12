import { cn } from "@/lib/utils";

type SidebarItemWrapperType = {} & React.HTMLAttributes<HTMLElement>;

export default function SidebarItemWrapper({
  children,
  className,
  ...rest
}: SidebarItemWrapperType) {
  return (
    <div
      className={cn(
        "bg-primary-300 h-28 md:h-auto md:bg-inherit p-4 md:p-0 md:pb-14 flex-row justify-between md:flex-col space-x-4 md:space-x-0 flex md:space-y-12",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
