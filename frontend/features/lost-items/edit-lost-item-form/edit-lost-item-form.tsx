"use client";

import React, { FC } from "react";
import { Field, Form, Formik } from "formik";
import { IlostItem, LostItemTypes } from "../types";
import { Loading } from "@/features/ui";
import useEditEventForm from "./use-edit-lost-item-form";
import { createLostItemValidationSchema } from "../create-lost-item-form/create-lost-item-form-config";

interface Iprops {
  currentLostItem: IlostItem
}

const EditEventForm:FC<Iprops> = ({ currentLostItem }) => {
  const {
    loading,
    editLostItem,
    imagesUrls,
    handleSetImages,
    editLostItemInitialValues
  } = useEditEventForm({ currentLostItem });

  const selectedImages = (imagesUrls.length > 0 ? imagesUrls : editLostItemInitialValues.images).map((imageUrl) => {
    return (
      <img
        className="object-cover w-1/3 h-48 rounded-input"
        key={imageUrl}
        src={imageUrl}
        alt=""
      />
    );
  });

  const typeOptions = LostItemTypes.map((itemType) => {
    return (
      <option key={itemType} value={itemType}>
        {itemType}
      </option>
    );
  });

  return (
    <>
      <h1 className="mb-5 text-4xl font-medium text-color-primary-text">
        Edytuj zgubiony/znaleziony przedmiot
      </h1>

      <Formik
        initialValues={editLostItemInitialValues}
        validationSchema={createLostItemValidationSchema}
        onSubmit={(values) => editLostItem(values as unknown as IlostItem)}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col justify-center">
            <div className="mb-6 create-form-element">
              <label className="create-input-label" htmlFor="">
                Rodzaj zgłoszenia
              </label>
              <Field
                disabled={loading}
                className="create-input"
                as="select"
                name="type"
              >
                {typeOptions}
              </Field>
            </div>

            <div className="create-form-element">
              <label className="create-input-label" htmlFor="">
                Nazwa przedmiotu
              </label>
              <Field
                className="create-input"
                type="text"
                placeholder="Nazwa przedmiotu..."
                name="name"
                disabled={loading}
              />
              <div className="text-red-500">
                {errors.name && touched.name ? <>{errors.name}</> : null}
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
                placeholder="Podczas wydarzenia..."
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
                Miejsce znalezienia/zgubienia (opcjonalne)
              </label>
              <Field
                className="create-input"
                type="text"
                placeholder="Np. świetlica/hala sportowa"
                name="foundLocation"
                disabled={loading}
              />
              <div className="text-red-500">
                {errors.foundLocation && touched.foundLocation ? (
                  <>{errors.foundLocation}</>
                ) : null}
                &nbsp;
              </div>
            </div>

            <div className="create-form-element">
              <label className="create-input-label" htmlFor="">
                Data
              </label>
              <Field
                className="create-input"
                type="date"
                name="date"
                disabled={loading}
              />
              <div className="text-red-500">
                {errors.date && touched.date ? <>{errors.date}</> : null}
                &nbsp;
              </div>
            </div>

            <div className="create-form-element">
              <label className="create-input-label" htmlFor="">
                Zdjęcia (maksymalnie 3)
              </label>
              <input
                disabled={loading}
                className="create-input"
                type="file"
                accept="image/*"
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
              {loading ? <Loading /> : "Dodaj wydarzenie"}
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default EditEventForm;
