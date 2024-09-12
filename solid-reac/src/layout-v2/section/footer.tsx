import { cn } from "@/lib/utils";
import { FooterLogo, WhiteLogo } from "@/assets/forbes-advisor";
import { FooterCopyIcon, FooterLockIcon } from "@/assets/icons";

type FooterType = {
  className?: string;
};

export default function Footer(props: FooterType) {
  return (
    <footer
      className={cn(
        "bg-footer-background text-footer-color px-4 md:px-12 py-5 flex w-full justify-between",
        props.className
      )}
    >
      <div className="hidden md:flex items-center space-x-3 text-neutral-100">
        <p>A PRODUCT OF</p>
        <span className="pr-3 border-r border-neutral-100">
          <FooterLogo />
        </span>
        <p className="font-medium">
          Trusted expertise. Every step.{" "}
          <span className="text-health">All free.</span>
        </p>
      </div>
      <div className="md:hidden">
        <WhiteLogo />
      </div>
      <div className="text-sm lg:text-base flex space-x-2 lg:space-x-8 text-neutral-300">
        <a
          href="#"
          className="hidden text-xs lg:text-base md:flex space-x-1 lg:space-x-2 items-center"
        >
          <FooterLockIcon />
          <p>Secured by ForbesAdvisor</p>
        </a>
        <a
          href="#"
          className="text-xs lg:text-base flex space-x-1 lg:space-x-2 items-center"
        >
          <FooterCopyIcon className="hidden md:block" />
          <p>Advertiser Disclosure</p>
        </a>
      </div>
    </footer>
  );
}
