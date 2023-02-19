import React from 'react'
import { featureElementsType, featureSetElementsType, IsortingOption } from '../types'
import useFeaturesListSorting from './use-features-list-sorting'

interface IProps {
  elements: featureElementsType
  setElements: featureSetElementsType
  sortingConfig: IsortingOption[]
}

const FeaturesListSorting: React.FC<IProps> = ({ elements, setElements, sortingConfig }) => {
  const { handleSortingChange } = useFeaturesListSorting({ elements, setElements })

  const optionsMap = sortingConfig.map(option => {
    return (
      <option
        key={option.text}
        value={JSON.stringify(option)}
      >
        {option.text}
      </option>
    )
  })

  return (
    <select
      onChange={handleSortingChange}
      className='p-2 mt-4 mr-4 text-gray-700 bg-white border rounded-lg shadow-inner md:mt-0 w-44 focus:border-red-400 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-red-300'
      defaultValue="default"
    >
      <option value="default" hidden>Sortowanie</option>
      {optionsMap}
    </select>
  )
}

export default FeaturesListSorting;