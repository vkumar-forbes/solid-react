import { cn } from "@/lib/utils";
import Layout, { Footer, Header, LayoutBody } from "@/layout-v2";

type StepLayoutType = React.HTMLAttributes<HTMLDivElement>;

export default function ResultLayout({
  className,
  children,
  ...rest
}: StepLayoutType) {
  return (
    <Layout>
      <Header />
      <LayoutBody
        className={cn("w-full items-start justify-center", className)}
        {...rest}
      >
        {children}
      </LayoutBody>
      <Footer />
    </Layout>
  );
}
