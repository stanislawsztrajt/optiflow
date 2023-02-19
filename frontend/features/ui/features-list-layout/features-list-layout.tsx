import React, { FC, ReactNode, Suspense } from "react";
import { Loading, FeaturesListSearchInput } from "@/features/ui";
import { featureElementsType, featureSetElementsType, IsortingOption } from "../types";
import FeaturesListSorting from "../features-list-sorting/features-list-sorting";

interface Props {
  content: ReactNode;
  title: string;
  elements: featureElementsType;
  initialElements: featureElementsType;
  setElements: featureSetElementsType
  sortingConfig: IsortingOption[]
}

const FeaturesListLayout: FC<Props> = ({ content, title, elements, initialElements, setElements, sortingConfig }) => {
  return (
    <main className="mt-24 bg-white">
      <div className="container px-6 py-10 mx-auto">
        <div className="flex flex-col justify-between md:items-center md:flex-row">
          <h1 className="mr-10 text-3xl font-semibold text-gray-800 capitalize lg:text-4xl">
            {title}
          </h1>
          <div className='flex flex-col text-lg sm:flex-row'>
            <FeaturesListSorting elements={elements} setElements={setElements} sortingConfig={sortingConfig} />
            <FeaturesListSearchInput elements={initialElements} setElements={setElements} />
          </div>
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
