import { cn } from "@/lib/utils";
import React from "react";

type LayoutBodyType = {} & React.HTMLAttributes<HTMLDivElement>;

export default function LayoutBody({
  className,
  children,
  ...rest
}: LayoutBodyType) {
  return (
    <div className={cn("flex flex-grow", className)} {...rest}>
      {children}
    </div>
  );
}
