import { cn } from "@/lib/utils";
import React from "react";

type ContentType = {} & React.HTMLAttributes<HTMLDivElement>;

export default function Content({ className, children, ...rest }: ContentType) {
  return (
    <div
      className={cn(
        "bg-white relative flex flex-col md:justify-between items-center flex-grow",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
