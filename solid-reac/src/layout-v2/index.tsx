import React from "react";
import { cn } from "@/lib/utils";
import Header from "@/layout-v2/section/header";
import LayoutBody from "@/layout-v2/section/layout-body";
import Sidebar from "@/layout-v2/section/layout-body/sidebar";
import SidebarTitle from "@/layout-v2/section/layout-body/sidebar/title";
import SidebarItem from "@/layout-v2/section/layout-body/sidebar/item";
import { SidebarItemType } from "@/layout-v2/section/layout-body/sidebar/item";
import SidebarItemWrapper from "@/layout-v2/section/layout-body/sidebar/item-wrapper";
import Content from "@/layout-v2/section/layout-body/content";
import NavigateBack from "@/layout-v2/section/layout-body/content/navigate-back";
import StepContainer from "@/layout-v2/section/layout-body/content/step-container";
import StepBottomText from "@/layout-v2/section/layout-body/content/step-bottom-text";
import StepIndicator from "@/layout-v2/section/layout-body/content/step-indicator";
import Footer from "@/layout-v2/section/footer";

type LayoutType = {} & React.HTMLAttributes<HTMLElement>;

type ContextStateType = {
  isSidebarOpen: boolean;
};

type LayoutContextType = {
  state: ContextStateType;
  dispatch: React.Dispatch<React.SetStateAction<ContextStateType>>;
};

const layoutContext = {
  state: {
    isSidebarOpen: false,
  },
  dispatch: () => {},
} as LayoutContextType;

export const LayoutContext =
  React.createContext<LayoutContextType>(layoutContext);

function Layout({ className, children, ...rest }: LayoutType) {
  const [state, dispatch] = React.useState<ContextStateType>({
    isSidebarOpen: false,
  });

  return (
    <LayoutContext.Provider value={{ state, dispatch }}>
      <div
        className={cn(
          "relative flex flex-col w-full min-h-screen overflow-y-auto",
          className
        )}
        {...rest}
      >
        {children}
      </div>
    </LayoutContext.Provider>
  );
}

export {
  Header,
  LayoutBody,
  Sidebar,
  SidebarTitle,
  SidebarItemWrapper,
  SidebarItem,
  Content,
  NavigateBack,
  StepContainer,
  StepBottomText,
  StepIndicator,
  Footer,
};

export type { SidebarItemType };

export default Layout;
