import { cn } from "@/lib/utils";

type NavigateBackType = React.HTMLAttributes<HTMLDivElement>;

export default function NavigateBack({
  className,
  ...props
}: NavigateBackType) {
  return (
    <div
      className={cn(
        "w-full flex justify-center min-h-14 fixed top-10 md:static bg-white/80 mt-8 md:mt-1",
        className
      )}
      {...props}
    >
      <button className="text-sm text-neutral-500">
        Go to previous question
      </button>
    </div>
  );
}
