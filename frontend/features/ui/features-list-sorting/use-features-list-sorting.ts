import { featureSetElementsType, IsortingOption } from "../types"
import { featureElementsType } from "../types"
import { useState, useEffect } from 'react'

interface Iprops {
  elements: featureElementsType
  setElements: featureSetElementsType
}

const useFeaturesListSorting = (props:Iprops) => {
  const { elements, setElements } = props
  const [selectedOption, setSelectedOption] = useState<IsortingOption>()

  const handleSortingChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption:IsortingOption = JSON.parse(event.target.value) ?? '';
    setSelectedOption(selectedOption)
  }

  useEffect(() => {
    sortElements()
  }, [selectedOption]);

  const sortElements = () => {
    if(elements.length === 0 || !selectedOption) return

    if(selectedOption.variable !== 'date') {
      (elements as any).sort((a:any, b:any) => (
        selectedOption.sort == "+" ?
          a[selectedOption.variable] > b[selectedOption.variable] ? 1 : -1
        :
          a[selectedOption.variable] < b[selectedOption.variable] ? 1 : -1
      ))
    } else {
      (elements as any).sort(function(a:any, b:any){
        return selectedOption.sort == "+" ?
          +new Date(a.date) - +new Date(b.date)
        :
          +new Date(b.date) - +new Date(a.date)
      });
    }

    setElements([...elements] as any)
  }

  return {
    sortElements,
    handleSortingChange
  }
}

export default useFeaturesListSorting