import { ReactNode } from "react";
import { Header } from "@/page-components/Header";
import { Footer } from "@/page-components/Footer";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
