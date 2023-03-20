import { Ibook } from "@/features/books/types";
import { Ievent } from "@/features/events/types";
import { IlostItem } from "@/features/lost-items/types";
import { IprivateLesson } from "@/features/private-lessons/types";
import { useEffect, useState } from "react";
import { featureSetElementsType, featureElementsType, IsingleFilter } from "../types"

interface Iprops {
  initialElements: featureElementsType;
  setElements: featureSetElementsType
}

interface IsearchInitialValues {
  searchQuery: string;
}

const useFeaturesSearchFilter = (props:Iprops) => {
  const { setElements, initialElements } = props
  const [filters, setFilters] = useState<IsingleFilter[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const searchInitialValues: IsearchInitialValues = {
    searchQuery: "",
  };

  const handleSearchInputSubmit = ({ searchQuery }: IsearchInitialValues) => {
    setSearchQuery(searchQuery)
  }

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newFilter:IsingleFilter = JSON.parse(e.target.value)

    if(newFilter.option === "default") {
      setFilters(filters => filters.filter(filter => filter.variable !== newFilter.variable));
      return
    }

    const filterIndex = filters.findIndex(filter => filter.variable === newFilter.variable)
    if(filterIndex < 0) {
      setFilters(filters => [newFilter, ...filters])
    } else {
      const newFilters = [...filters]
      newFilters[filterIndex].option = newFilter.option
      setFilters(newFilters)
    }
  }

  const searchAndFilterElements = () => {
    let filteredElements = (initialElements as any).filter((object:any) => {
      return filters.every((filter) => {
        return object[filter.variable] === filter.option;
      });
    });

    if(filteredElements[0]) {
      if('name' in filteredElements[0]) {
        filteredElements = (filteredElements as any).filter((element: IlostItem) =>
        element.name.toLowerCase().includes(searchQuery.trim().toLowerCase())
        );
      } else {
        filteredElements = (filteredElements as any).filter((element: Ievent | IprivateLesson | Ibook) =>
        element.title.toLowerCase().includes(searchQuery.trim().toLowerCase())
        );
      }
    }

    setElements([...filteredElements] as any);
  }

  useEffect(() => {
    searchAndFilterElements()
  }, [filters, searchQuery]);

  return {
    handleSelectChange,
    handleSearchInputSubmit,
    searchInitialValues
  }
}

export default useFeaturesSearchFilter;