import * as Yup from "yup";
import { LostItemFoundEnum } from "../types";

export const createLostItemInitialValues = {
  name: "",
  description: "",
  foundLocation: "",
  date: "",
  images: [],
  type: LostItemFoundEnum.LOST,
};

export const createLostItemValidationSchema = Yup.object({
  name: Yup.string()
    .min(5, "Nazwa przedmiotu musi mieć conajmniej 5 znaków")
    .max(100, "Nazwa przedmiotu musi być krótsza niż 100 znaków")
    .required("Nazwa przedmiotu jest wymagana"),
  description: Yup.string()
    .min(5, "Opis musi mieć conajmniej 5 znaków")
    .max(500, "Opis musi być krótszy niż 500 znaków")
    .required("Opis jest wymagany"),
  foundLocation: Yup.string()
    .min(5, "Lokalizacja musi mieć conajmniej 5 znaków")
    .max(100, "Lokalizacja musi być krótsza niż 100 znaków"),
  date: Yup.date().required("Data jest wymagana"),
});
