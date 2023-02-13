import React, { FC, ReactNode, Suspense } from "react";
import { Loading } from "@/features/ui";
import FeaturesListSearchInput from "../features-list-search-input/features-list-search-input";
import { featureElementsType, featureSetElementsType } from "../types";

interface Props {
  content: ReactNode;
  title: string;
  elements: featureElementsType;
  setElements: featureSetElementsType
}

const FeaturesListLayout: FC<Props> = ({ content, title, elements, setElements }) => {
  return (
    <main className="mt-24 bg-white">
      <div className="container px-6 py-10 mx-auto">
        <div className="flex flex-col justify-between sm:items-center sm:flex-row">
          <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl">
            {title}
          </h1>
          <FeaturesListSearchInput elements={elements} setElements={setElements} />
        </div>

        <hr className="my-8 border-gray-200" />

        <Suspense fallback={<Loading />}>
          {content}
        </Suspense>
      </div>
    </main>
  );
};

export default FeaturesListLayout;
