"use client";

import React, { FC } from "react";
import { BookCategories, BookLooks, BookTypes, Ibook } from "../types";
import useCreateBookForm from "./use-create-book-form";
import { Field, Form, Formik } from "formik";
import Loading from "@/features/ui/loading";

const CreateBookForm: FC = () => {
  const {
    loading,
    initialValues,
    validationSchema,
    createBook,
    imagesUrls,
    handleSetImages,
  } = useCreateBookForm();

  const categoryOptions = BookCategories.map((category) => {
    return (
      <option key={category} value={category}>
        {category}
      </option>
    );
  });

  const lookOptions = BookLooks.map((look) => {
    return (
      <option key={look} value={look}>
        {look}
      </option>
    );
  });

  const typeOptions = BookTypes.map((type) => {
    return (
      <option key={type} value={type}>
        {type}
      </option>
    );
  });

  const selectedImages = imagesUrls.map((imageUrl) => {
    return (
      <img
        className="object-cover w-1/3 h-48 rounded-input"
        key={imageUrl}
        src={imageUrl}
        alt=""
      />
    );
  });

  return (
    <>
      <h1 className="text-4xl font-medium text-color-primary-text">
        Dodaj swoją oferte
      </h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => createBook(values as unknown as Ibook)}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col justify-center mt-2">
            <div className="create-form-element">
              <label className="create-input-label" htmlFor="">
                Tytuł
              </label>
              <Field
                className="create-input"
                type="text"
                placeholder="Sprzedam książkę..."
                name="title"
                disabled={loading}
              />
              <div className="text-red-500">
                {errors.title && touched.title ? <>{errors.title}</> : null}
                &nbsp;
              </div>
            </div>

            <div className="create-form-element">
              <label className="create-input-label" htmlFor="">
                Wydawnictwo
              </label>
              <Field
                className="create-input"
                type="text"
                placeholder="Nowa Era..."
                name="publishingHouse"
                disabled={loading}
              />
              <div className="text-red-500">
                {errors.publishingHouse && touched.publishingHouse ? (
                  <>{errors.publishingHouse}</>
                ) : null}
                &nbsp;
              </div>
            </div>

            <div className="create-form-element">
              <label className="create-input-label" htmlFor="">
                Kategoria
              </label>
              <Field
                disabled={loading}
                className="create-input"
                as="select"
                name="category"
              >
                {categoryOptions}
              </Field>
              <div className="text-red-500">
                {errors.category && touched.category ? (
                  <>{errors.category}</>
                ) : null}
                &nbsp;
              </div>
            </div>

            <div className="create-form-element">
              <label className="create-input-label" htmlFor="">
                Część
              </label>
              <Field
                disabled={loading}
                className="create-input"
                type="number"
                placeholder="2"
                name="part"
              />
              <div className="text-red-500">
                {errors.part && touched.part ? <>{errors.part}</> : null}
                &nbsp;
              </div>
            </div>

            <div className="create-form-element">
              <label className="create-input-label" htmlFor="">
                Opis
              </label>
              <Field
                disabled={loading}
                className="create-input"
                rows="5"
                as="textarea"
                placeholder="Książka posiada..."
                name="description"
              />
              <div className="text-red-500">
                {errors.description && touched.description ? (
                  <>{errors.description}</>
                ) : null}
                &nbsp;
              </div>
            </div>

            <div className="create-form-element">
              <label className="create-input-label" htmlFor="">
                Typ
              </label>
              <Field
                disabled={loading}
                className="create-input"
                as="select"
                name="type"
              >
                {typeOptions}
              </Field>
              &nbsp;
            </div>

            <div className="create-form-element">
              <label className="create-input-label" htmlFor="">
                Cena
              </label>
              <Field
                disabled={loading}
                className="create-input"
                type="number"
                name="price"
                placeholder="20"
              />
              <div className="text-red-500">
                {errors.price && touched.price ? <>{errors.price}</> : null}
                &nbsp;
              </div>
            </div>

            <div className="create-form-element">
              <label className="create-input-label" htmlFor="">
                Stan
              </label>
              <Field
                disabled={loading}
                className="create-input"
                as="select"
                name="look"
              >
                {lookOptions}
              </Field>
            </div>
            <div className='mt-6'></div>
            <div className="create-form-element">
              <label className="create-input-label" htmlFor="">
                Zdjęcia{"(maksymalnie 3)"}
              </label>
              <input
                disabled={loading}
                className="create-input"
                type="file"
                multiple
                onChange={(e) => handleSetImages(e)}
              />
              <div className="flex gap-2 mt-2">{selectedImages}</div>
            </div>

            <button
              disabled={loading}
              className="mt-4 create-button-submit"
              type="submit"
            >
              {loading ? <Loading /> : "Dodaj książkę"}
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default CreateBookForm;
