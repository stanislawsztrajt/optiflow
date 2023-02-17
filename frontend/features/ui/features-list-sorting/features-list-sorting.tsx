import React from 'react'
import { featureElementsType, featureSetElementsType } from '../types'
import useFeaturesListSorting from './use-features-list-sorting'
import { sortingConfig } from '@/utils/data/sorting'
import { usePathname } from 'next/navigation'

interface IProps {
  elements: featureElementsType
  setElements: featureSetElementsType
}

const FeaturesListSorting: React.FC<IProps> = ({ elements, setElements }) => {
  const { handleSortingChange } = useFeaturesListSorting({ elements, setElements })
  const pathname = usePathname()
  const sortingConfigPath = (pathname!.replaceAll('/', '') as 'events' | 'books' | 'private-lessons' | 'lost-items')

  const optionsMap = sortingConfig[sortingConfigPath].map(option => {
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
      className='p-2 mr-4 text-gray-700 bg-white border rounded-lg shadow-inner w-44 focus:border-red-400 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-red-300'
      defaultValue="default"
    >
      <option value="default" hidden>Sortowanie</option>
      {optionsMap}
    </select>
  )
}

export default FeaturesListSorting;