"use client";

import React, { FC } from "react";
import useCreateEventForm from "./use-create-event-form";
import { Field, Form, Formik } from "formik";
import { Ievent } from "../types";
import { Loading } from "@/features/ui";

const CreateEventForm: FC = () => {
  const {
    loading,
    initialValues,
    validationSchema,
    createEvent,
    imagesUrls,
    handleSetImages,
  } = useCreateEventForm();

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
        Dodaj swoje wydarzenie
      </h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => createEvent(values as unknown as Ievent)}
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
                placeholder="Wydarzenie..."
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
                Lokalizacja
              </label>
              <Field
                className="create-input"
                type="text"
                placeholder="Np. zdalnie/hala sportowa"
                name="location"
                disabled={loading}
              />
              <div className="text-red-500">
                {errors.location && touched.location ? (
                  <>{errors.location}</>
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
                Cena (opcjonalnie)
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

export default CreateEventForm;
