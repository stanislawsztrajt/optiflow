import { Field, Form, Formik } from 'formik';
import React, { Dispatch, SetStateAction } from 'react'
import { IlostItem } from '../types';
import useLostItemSearchInput from './use-lost-item-search-input';

interface IProps {
  lostItems: IlostItem[]
  setLostItems: Dispatch<SetStateAction<IlostItem[]>>
}

const LostItemSearchInput: React.FC<IProps> = ({ lostItems, setLostItems }) => {
  const { searchLostItems, initialValues } = useLostItemSearchInput({ lostItems, setLostItems })

  return (
    <>
      <Formik
        onSubmit={searchLostItems}
        initialValues={initialValues}
      >
        <Form className='relative mt-4 md:mt-0'>
          <Field
            type="text"
            name="searchQuery"
            className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-lg shadow-inner focus:border-red-400 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-red-300"
            placeholder="Wyszukaj"
          />
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
              <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </span>
        </Form>
      </Formik>
    </>
  )
}

export default LostItemSearchInput;