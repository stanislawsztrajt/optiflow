'use client'

import React, { FC } from 'react'
import { BookCategories, BookLooks, Ibook } from '../types';
import useCreateBookForm from './use-create-book-form'
import { Field, Form, Formik } from 'formik';



const CreateBookForm: FC = () => {
  const { error, loading, initialValues, validationSchema, createBook, setImages, images } = useCreateBookForm();

  const categoryOptions = BookCategories.map(category => {
    return (
      <option key={category} value={category}>{category}</option>
    )
  })

  const lookOptions = BookLooks.map(look => {
    return (
      <option key={look} value={look}>{look}</option>
    )
  })

  return(
    <>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => createBook(values as unknown as Ibook)}
    >
      <Form>
        <label htmlFor="">Tytuł</label>
        <Field type="text" name='title' />
        <label htmlFor="">Opis</label>
        <Field type="text" name='description' />
        <label htmlFor="">Kategoria książki</label>
        <Field as="select" name="category">
          { categoryOptions }
        </Field>
        <label htmlFor="">Cena</label>
        <Field type="number" name='price' />
        <label htmlFor="">look</label>
        <Field as="select" name="look">
          { lookOptions }
        </Field>
        <label htmlFor="">Zdjęcia</label>
        <input type="file" multiple onChange={(e) => setImages(Array.from(e.target.files as unknown as []))} />
        <button type="submit">
          Dodaj książkę
        </button>
      </Form>
    </Formik>
    </>
  )
}

export default CreateBookForm