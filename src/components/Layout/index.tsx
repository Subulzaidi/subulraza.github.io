import React from "react";
import Navbar from "../Navbar";
import FooterSection from "../Footer";

type LayoutProps = {
  children: React.ReactNode;
  bgColor?: string;
  isNav?: boolean;
  isFooter?: boolean;
};

const Layout: React.FC<LayoutProps> = ({ children, isNav = true }) => {
  return (
    <main className="min-h-screen">
      {isNav && <Navbar />}
      {children}
      <FooterSection />
    </main>
  );
};

export default Layout;
