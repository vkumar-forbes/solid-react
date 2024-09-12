import Layout, {
  Sidebar,
  Content,
  Footer,
  Header,
  LayoutBody,
  NavigateBack,
  StepIndicator,
  StepContainer,
  SidebarTitle,
  SidebarItemWrapper,
  SidebarItem,
} from "@/layout-v2";
import sidebarItems from "./sidebar-data";

type StepLayoutType = React.HTMLAttributes<HTMLDivElement>;

export default function StepLayout(props: StepLayoutType) {
  return (
    <Layout>
      <Header className="flex md:hidden" />
      <LayoutBody>
        <Sidebar>
          <SidebarTitle>Why Choose Us?</SidebarTitle>
          <SidebarItemWrapper>
            {sidebarItems.map((item) => {
              return <SidebarItem key={item.heading} {...item} />;
            })}
          </SidebarItemWrapper>
        </Sidebar>
        <Content className="overflow-hidden">
          <NavigateBack />
          <StepContainer {...props} />
          <StepIndicator currentStep={1} totalStep={3} />
        </Content>
      </LayoutBody>
      <Footer className="hidden md:flex" />
    </Layout>
  );
}
