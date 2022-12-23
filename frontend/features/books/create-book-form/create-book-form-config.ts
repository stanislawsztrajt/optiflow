import { BookCategoryEnum, BookLookEnum, BookTypeEnum } from "../types";

export const createBookInitialValues = {
  title: "",
  description: "",
  price: "",
  category: BookCategoryEnum.MATH,
  type: BookTypeEnum.BUY,
  publishingHouse: "",
  look: BookLookEnum.GOOD,
  part: "",
};
import * as Yup from "yup";


export const createBookValidationSchema = Yup.object({
  title: Yup.string()
    .min(5, "Tytuł musi mieć conajmniej 5 znaków")
    .max(100, "Tytuł musi być krótszy niż 100 znaków")
    .required("Tytuł jest wymagany"),
  description: Yup.string()
    .min(5, "Opis musi mieć conajmniej 5 znaków")
    .max(500, "Opis musi być krótszy niż 500 znaków")
    .required("Opis jest wymagany"),
  price: Yup.number()
    .max(10000000, "Cena musi być mniejsza niż 10000000")
    .required("Cena jest wymagana"),
  publishingHouse: Yup.string()
    .min(2, "Wydawnictwo musi mieć conajmniej 2 znaków")
    .max(50, "Wydawnictwo musi być krótszy niż 50 znaków")
    .required("Wydawnictwo jest wymagany"),
  part: Yup.number()
    .max(10, "Cena musi być mniejsza niż 10")
    .required("Cena jest wymagana"),
});