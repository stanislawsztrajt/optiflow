import { IlostItem } from "../types";
import { Dispatch, SetStateAction } from "react";

interface Iprops {
  lostItems: IlostItem[];
  setLostItems: Dispatch<SetStateAction<IlostItem[]>>;
}

interface IinitialValues {
  searchQuery: string;
}

const useLostItemSearchInput = (props: Iprops) => {
  const { lostItems, setLostItems } = props;

  const initialValues: IinitialValues = {
    searchQuery: "",
  };

  const searchLostItems = ({ searchQuery }: IinitialValues) => {
    console.log(searchQuery);
    const filteredLostItems: IlostItem[] = lostItems.filter((lostItem) =>
      lostItem.name.toLowerCase().includes(searchQuery.trim().toLowerCase())
    );
    setLostItems(filteredLostItems);
  };

  return {
    searchLostItems,
    initialValues,
  };
};
export default useLostItemSearchInput;
