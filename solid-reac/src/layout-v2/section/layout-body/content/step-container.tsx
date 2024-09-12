import { cn } from "@/lib/utils";
import React from "react";

type StepContainerType = {} & React.HTMLAttributes<HTMLDivElement>;

export default function StepContainer({
  className,
  children,
  ...rest
}: StepContainerType) {
  return (
    <div
      className={cn("mt-28 md:mt-0 w-full max-w-xl p-4", className)}
      {...rest}
    >
      {children}
    </div>
  );
}
