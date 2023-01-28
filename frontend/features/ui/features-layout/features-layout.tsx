import { usePathname } from "next/navigation";
import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  header: string;
  subHeader: string;
}

const FeaturesLayout: FC<Props> = ({ children, header, subHeader }) => {
  const pathname = usePathname()

  return (
    <main className="main-page-layout">
      <section className="section-header">
        <h1 className="section-header-h1">{header}</h1>
        <h2 className="section-header-h2">{subHeader}</h2>
      </section>
      <section className={pathname === '/' ? 'section-elements-layout' : 'container px-6 py-10 mx-auto'}>{children}</section>
    </main>
  );
};

export default FeaturesLayout;
