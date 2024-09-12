import React, { useContext } from "react";
import { cn } from "@/lib/utils";
import { LayoutContext } from "@/layout-v2";
import { ChevronDownIcon } from "@/assets/icons";

type SidebarTitleType = {} & React.HTMLAttributes<HTMLElement>;

export default function SidebarTitle({
  className,
  children,
  ...rest
}: SidebarTitleType) {
  const { state, dispatch } = useContext(LayoutContext);

  return (
    <>
      {/* Hide heading for small devices */}
      <h2
        className={cn(
          "hidden md:flex text-3xl font-bold uppercase mb-7 bg-primary text-white",
          className
        )}
        {...rest}
      >
        {children}
      </h2>

      {/* show a button with heading text to toggle the content */}
      <button
        onClick={() => {
          dispatch({ isSidebarOpen: !state.isSidebarOpen });
        }}
        className={cn(
          "cursor-pointer flex md:hidden justify-center items-center text-xs font-medium uppercase mb-0 bg-primary text-white rounded-b-2xl py-1",
          className
        )}
        {...rest}
      >
        {children}
        <span
          className={cn(
            "ml-2 md:hidden transition-transform",
            !state.isSidebarOpen && "rotate-180"
          )}
        >
          <ChevronDownIcon />
        </span>
      </button>
    </>
  );
}
