"use client";

import React, { FC } from "react";
import { Field, Form, Formik } from "formik";
import { IprivateLesson, PrivateLessonsCategories, PrivateLessonsOfferTypes } from "../types";
import { Loading } from "@/features/ui";
import useCreatePrivateLessonForm from "./use-create-private-lesson-form";

const CreatePrivateLessonForm: FC = () => {
  const {
    loading,
    initialValues,
    validationSchema,
    createPrivateLesson,
  } = useCreatePrivateLessonForm();

  const categoryOptions = PrivateLessonsCategories.map((categoryOption) => {
    return (
      <option key={categoryOption} value={categoryOption}>
        {categoryOption}
      </option>
    );
  });

  const offerTypeOptions = PrivateLessonsOfferTypes.map((offerTypeOption) => {
    return (
      <option key={offerTypeOption} value={offerTypeOption}>
        {offerTypeOption}
      </option>
    );
  });

  return (
    <>
      <h1 className="mb-4 text-4xl font-medium text-color-primary-text">
        Dodaj ogłoszenie o korepetycje
      </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => createPrivateLesson(values as unknown as IprivateLesson)}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col justify-center">
            <div className="create-form-element">
              <label className="create-input-label" htmlFor="">
                Tytuł
              </label>
              <Field
                className="create-input"
                type="text"
                placeholder="Udzielę/potrzebuję korepetycji z..."
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
                placeholder="Umiem/mogę pomóc z..."
                name="description"
              />
              <div className="text-red-500">
                {errors.description && touched.description ? (
                  <>{errors.description}</>
                ) : null}
                &nbsp;
              </div>
            </div>

            <div className="mb-6 create-form-element">
              <label className="create-input-label" htmlFor="">
                Kategoria (przedmiot)
              </label>
              <Field
                disabled={loading}
                className="create-input"
                as="select"
                name="category"
              >
                {categoryOptions}
              </Field>
            </div>

            <div className="mb-6 create-form-element">
              <label className="create-input-label" htmlFor="">
                Rodzaj ogłoszenia
              </label>
              <Field
                disabled={loading}
                className="create-input"
                as="select"
                name="offerType"
              >
                {offerTypeOptions}
              </Field>
            </div>

            <div className="create-form-element">
              <label className="create-input-label" htmlFor="">
                Cena (za godzinę)
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

export default CreatePrivateLessonForm;
