import React, { FC, ReactNode, Suspense } from "react";
import { FeaturesSearchFilterSort, FeaturesListSorting, LoadingScreen } from "@/features/ui";
import { featureElementsType, featureSetElementsType, IsortingOption, IfilteringOption } from "../types";

interface Props {
  content: ReactNode;
  title: string;
  elements: featureElementsType;
  initialElements: featureElementsType;
  setElements: featureSetElementsType
  sortingConfig: IsortingOption[]
  filteringConfig?: IfilteringOption[]
  loading: boolean
}

const FeaturesListLayout: FC<Props> = ({ content, title, elements, initialElements, setElements, sortingConfig, filteringConfig, loading }) => {

  return (
    <>
      {
        !loading ?
          <main className="mt-24 bg-white">
            <div className="container px-6 py-10 mx-auto">
              <div className="flex flex-col justify-between md:items-center md:flex-row">
                <h1 className="mr-10 text-3xl font-semibold text-gray-800 capitalize lg:text-4xl">
                  {title}
                </h1>
                <div className='flex flex-col text-lg sm:flex-row'>
                  <FeaturesListSorting
                    sortingConfig={sortingConfig}
                    elements={elements}
                    setElements={setElements}
                  />
                  <FeaturesSearchFilterSort
                    filteringConfig={filteringConfig ?? []}
                    initialElements={initialElements}
                    setElements={setElements}
                  />
                </div>
              </div>

              <hr className="my-8 border-gray-200" />

              {content}
            </div>
          </main>
        :
          <LoadingScreen />
      }
    </>
  );
};

export default FeaturesListLayout;
