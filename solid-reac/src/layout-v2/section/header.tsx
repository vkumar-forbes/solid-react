import { cn } from "@/lib/utils";
import { WhiteLogo } from "@/assets/forbes-advisor";

type HeaderType = {
  className?: string;
};

export default function Header(props: HeaderType) {
  return (
    <div
      className={cn(
        "bg-header-background text-header-color w-full fixed z-50 flex justify-center py-3",
        props.className
      )}
    >
      <WhiteLogo />
    </div>
  );
}
