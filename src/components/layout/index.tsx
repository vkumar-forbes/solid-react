import { FooterLogo, SidebarLogo, WhiteLogo } from "@/assets/forbes-advisor";
import {
  ChevronDownIcon,
  FooterCopyIcon,
  FooterLockIcon,
} from "@/assets/icons";

import layoutData from "@/components/layout/layout-data";
import { cn } from "@/lib/utils";

type LayoutType = React.HTMLAttributes<HTMLDivElement> & {
  currentStep: number;
  totalStep: number;
  isFooterHidden?: boolean;
  isHeaderHidden?: boolean;
  isFooterHiddenInMobile?: boolean;
  isHeaderHiddenInMobile?: boolean;
  isFooterHiddenInDesktop?: boolean;
  isHeaderHIddenInDesktop?: boolean;
  isEmptyLayout?: boolean;
  isSidebarRight?: boolean;
  navigateBack: () => void;
  backButtonClasses?: string;
  wrapperClasses?: string;
  sideBarClasses?: string;
  contentClasses?: string;
  footerClasses?: string;
  headerClasses?: string;
  sidebarTitle: string;
};

export default function Layout({
  currentStep,
  totalStep,
  isEmptyLayout,
  isSidebarRight,
  isFooterHidden,
  isHeaderHidden,
  isFooterHiddenInMobile,
  isHeaderHiddenInMobile,
  backButtonClasses,
  wrapperClasses,
  sideBarClasses,
  contentClasses,
  footerClasses,
  headerClasses,
  sidebarTitle,
  navigateBack,
  ...props
}: LayoutType) {
  return (
    <div className="relative flex flex-col w-full min-h-screen overflow-y-auto">
      {!isHeaderHidden && (
        <div
          className={cn(
            "bg-header-background text-header-color w-full fixed z-50 justify-center py-3 flex",
            isHeaderHiddenInMobile && "hidden md:flex"
          )}
        >
          <WhiteLogo />
        </div>
      )}

      {isEmptyLayout && <div className="flex-grow" {...props} />}

      {!isEmptyLayout && (
        <div className="flex flex-grow">
          {!isSidebarRight && <Sidebar sidebarTitle={sidebarTitle} />}
          <div className="bg-white relative flex flex-col md:justify-between items-center flex-grow overflow-hidden">
            <div className="w-full flex justify-center min-h-14 fixed top-10 md:static bg-white/80 mt-8 md:mt-1">
              <button
                className="text-sm text-neutral-500"
                onClick={() => navigateBack()}
              >
                Go to previous question
              </button>
            </div>
            <div className="mt-28 md:mt-0 w-full max-w-xl p-4">
              {/* children will be rendered here  */}
              <div {...props} />
            </div>
            <div className="w-full text-center">
              <div className="w-full fixed bottom-0 bg-white/80 md:static z-40">
                <p className="text-neutral-400 p-2">
                  {currentStep} of {totalStep} questions answered
                </p>
                <div className="w-full bg-secondary-foreground">
                  <div
                    className="bg-secondary h-2.5 transition-all"
                    style={{ width: `${(currentStep / totalStep) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          {isSidebarRight && <Sidebar sidebarTitle={sidebarTitle} />}
        </div>
      )}

      {!isFooterHidden && (
        <footer className="bg-footer-background text-footer-color px-4 md:px-12 py-5 w-full justify-between hidden md:flex">
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
              <FooterCopyIcon />
              <p>Advertiser Disclosure</p>
            </a>
          </div>
        </footer>
      )}
    </div>
  );
}

function Sidebar({ sidebarTitle }: { sidebarTitle: string }) {
  return (
    <div
      data-testid="sidebar"
      className="overflow-hidden md:translate-y-0 transition-transform fixed top-12 z-40 md:static w-full md:flex flex-col bg-white md:bg-primary text-primary md:text-white lg:min-w-[600px] md:w-1/2 lg:w-1/3 translate-y-[-112px]"
    >
      <div className="md:mx-20 max-w-full md:max-w-96 flex flex-col-reverse md:flex-col">
        <div className="hidden md:block text-xl mt-14 mb-20">
          <SidebarLogo />
        </div>
        <h2 className="hidden md:flex text-3xl font-bold uppercase mb-7 bg-primary text-white">
          {sidebarTitle}
        </h2>
        <button className="cursor-pointer flex md:hidden justify-center items-center text-xs font-medium uppercase mb-0 bg-primary text-white rounded-b-2xl py-1">
          {sidebarTitle}
          <span className="ml-2 md:hidden transition-transform rotate-180">
            <ChevronDownIcon />
          </span>
        </button>
        <div className="bg-primary-300 h-28 md:h-auto md:bg-inherit p-4 md:p-0 md:pb-14 flex-row justify-between md:flex-col space-x-4 md:space-x-0 flex md:space-y-12">
          {layoutData.map((data) => {
            const Icon = data.Icon;
            return (
              <div className="flex flex-col md:flex-row items-center md:items-start">
                <div className="min-w-max mb-2 md:mb-0">
                  <Icon />
                </div>
                <div className="ml-0 md:ml-4">
                  <h3 className="text-xs text-center md:text-start md:text-xl font-semibold">
                    {data.heading}
                  </h3>
                  <p className="hidden md:block text-sm">{data.caption}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
