import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  header: string;
  subHeader: string;
}

const FeaturesLayout: FC<Props> = ({ children, header, subHeader }) => {
  return (
    <main className="main-page-layout">
      <section className="section-header">
        <h1 className="section-header-h1">{header}</h1>
        <h2 className="section-header-h2">{subHeader}</h2>
      </section>
      <section className="section-elements-layout">{children}</section>
    </main>
  );
};

export default FeaturesLayout;
