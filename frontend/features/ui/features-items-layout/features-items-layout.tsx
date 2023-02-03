import React, { FC, ReactNode } from "react";

interface Props {
  content: ReactNode;
  searchInput: ReactNode;
  title: string;
}

const FeaturesTabsLayout: FC<Props> = ({ content, title, searchInput }) => {
  return (
    <main className="mt-24 bg-white">
      <div className="container px-6 py-10 mx-auto">
        <div className="flex flex-col justify-between sm:items-center sm:flex-row">
          <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl">
            {title}
          </h1>
          {searchInput}
        </div>

        <hr className="my-8 border-gray-200" />

        {content}
      </div>
    </main>
  );
};

export default FeaturesTabsLayout;
