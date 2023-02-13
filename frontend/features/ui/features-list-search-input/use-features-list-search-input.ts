import { Ievent } from "../../events/types";
import { Dispatch, SetStateAction } from "react";
import { IprivateLesson } from "@/features/private-lessons/types";
import { Ibook } from "@/features/books/types";
import { IlostItem } from "@/features/lost-items/types";
import { featureElementsType, featureSetElementsType } from "../types";

interface Iprops {
  elements: featureElementsType;
  setElements: featureSetElementsType;
}

interface IinitialValues {
  searchQuery: string;
}

const useFeaturesListSearchInput = (props: Iprops) => {
  const { elements, setElements } = props;

  const initialValues: IinitialValues = {
    searchQuery: "",
  };

  const searchElements = ({ searchQuery }: IinitialValues) => {
    let filteredElements:featureElementsType

    if(elements.length === 0) return

    if('name' in elements[0]) {
      filteredElements = (elements as any[]).filter((element: IlostItem) =>
        element.name.toLowerCase().includes(searchQuery.trim().toLowerCase())
      );
    } else {
      filteredElements = (elements as any[]).filter((element: Ievent | IprivateLesson | Ibook) =>
        element.title.toLowerCase().includes(searchQuery.trim().toLowerCase())
      );
    }

    if(filteredElements) setElements(filteredElements as any);
  };

  return {
    searchElements,
    initialValues,
  };
};
export default useFeaturesListSearchInput;
