import { ReactNode, useContext } from "react";
import { SidebarLogo } from "@/assets/forbes-advisor";
import { cn } from "@/lib/utils";
import { LayoutContext } from "@/layout-v2";

type SidebarType = {
  className?: string;
  children: ReactNode | ReactNode[];
};

export default function Sidebar({ className, children }: SidebarType) {
  const { state } = useContext(LayoutContext);

  return (
    <div
      data-testid="sidebar"
      className={cn(
        "overflow-hidden md:translate-y-0 transition-transform fixed top-12 z-40 md:static w-full md:flex flex-col bg-white md:bg-primary text-primary md:text-white lg:min-w-[600px] md:w-1/2 lg:w-1/3",
        className,
        !state.isSidebarOpen && "translate-y-[-112px]"
      )}
    >
      <div className="md:mx-20 max-w-full md:max-w-96 flex flex-col-reverse md:flex-col">
        <div className="hidden md:block text-xl mt-14 mb-20">
          <SidebarLogo />
        </div>
        {children}
      </div>
    </div>
  );
}
