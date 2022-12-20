'use client'

import React, { FC } from 'react'
import { Ibook } from '../types';
import useCreateBookForm from './use-create-book-form'

const CreateBookForm: FC = () => {
  const { error, loading, createBook } = useCreateBookForm();
  
  return(
    <form action="" onSubmit={(e) => {
      e.preventDefault()
      createBook({} as Ibook)
    }}>
      <label htmlFor="">Tytuł</label>
      <input type="text" />
      <label htmlFor="">Opis</label>
      <input type="text" />
      <label htmlFor="">Kategoria książki</label>
      <select name="" id="">
        <option value="">book category type</option>
      </select>
      <label htmlFor="">Cena</label>
      <input type="number" />
      <label htmlFor="">look</label>
      <input type="look" />

      <label htmlFor="">Zdjęcia</label>
      <input type="image" />

      <button type="submit">
        Dodaj książkę
      </button>
    </form>
  )
}

export default CreateBookForm