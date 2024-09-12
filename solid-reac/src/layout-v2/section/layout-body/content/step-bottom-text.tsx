import React from "react";
import { cn } from "@/lib/utils";
import { PrimaryLockIcon } from "../../../../assets/icons";

type StepBottomText = {} & React.HTMLAttributes<HTMLDivElement>;

export default function StepBottomText({
  className,
  children,
  ...rest
}: StepBottomText) {
  return (
    <div
      className={cn(
        "w-full flex space-x-1 flex-col items-center text-center mt-4 mb-14",
        className
      )}
    >
      <div className="min-w-max">
        <PrimaryLockIcon />
      </div>
      <div {...rest}>{children}</div>
    </div>
  );
}
