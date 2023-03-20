import React, { useState } from 'react'
import { featureElementsType, featureSetElementsType, IfilteringOption } from '../types';
import { Field, Form, Formik } from "formik";
import useFeaturesSearchFilter from './use-features-search-filter';

interface Iprops {
  initialElements: featureElementsType;
  setElements: featureSetElementsType
  filteringConfig: IfilteringOption[]
}

const FeaturesSearchFilter: React.FC<Iprops> = ({ initialElements, setElements, filteringConfig }) => {
  const [isFilteringModalOpen, setIsFilteringModalOpen] = useState(false);
  const { handleSelectChange, searchInitialValues, handleSearchInputSubmit } = useFeaturesSearchFilter({ initialElements, setElements })

  const filterSelectsMap = filteringConfig.map(filter => {
    return (
      <div key={filter.label} className='flex flex-col items-start'>
        <label className='mb-1 ml-1 text-sm'>{ filter.label }</label>
        <select
          className='p-2 mr-4 text-gray-700 bg-white border rounded-lg shadow-inner w-44 focus:border-red-400 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-red-300'
          defaultValue="default"
          onChange={handleSelectChange}
        >
          <option value={JSON.stringify({ variable: filter.variable, option: 'default' })}>Wybierz</option>
          {
            filter.options.map(option => {
              return <option key={option} value={JSON.stringify({ variable: filter.variable, option: option })}>{option}</option>
            })
          }
        </select>
      </div>
    )
  })

  return (
    <>
      <div className='relative flex flex-row'>
        {
          filteringConfig.length > 0 ?
            <button onClick={() => setIsFilteringModalOpen(true)} className='px-3 py-2 mt-4 mr-4 text-gray-700 bg-white border rounded-lg shadow-inner md:mt-0 focus:border-red-400 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-red-300'>
              Filtrowanie
            </button>
          : null
        }
        <Formik onSubmit={handleSearchInputSubmit} initialValues={searchInitialValues}>
          <Form className="relative mt-4 md:mt-0">
            <Field
              type="text"
              name="searchQuery"
              className="py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-lg shadow-inner w-60 focus:border-red-400 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-red-300"
              placeholder="Wyszukaj"
            />
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </span>
          </Form>
        </Formik>
      </div>
      {/* filtering modal */}
      <div className={`${isFilteringModalOpen && filteringConfig ? 'flex' : 'hidden'} fixed top-0 left-0 z-50  items-center justify-center w-screen h-screen p-2 text-gray-700 bg-black opacity-animation backdrop-blur-sm bg-opacity-10`}>
        <div className='w-10/12 py-5 pb-10 bg-white rounded-md sm:w-4/5 xl:w-3/4 2xl:w-3/5 px-7 max-h-[60vh] overflow-y-scroll overscroll-none'>
          <div className='flex items-center justify-between w-full text-2xl'>
            Filtrowanie
            <button onClick={() => setIsFilteringModalOpen(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <hr className='mt-2 mb-4' />
          <div className='grid h-full grid-cols-1 md:gap-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {
              filterSelectsMap
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default FeaturesSearchFilter;