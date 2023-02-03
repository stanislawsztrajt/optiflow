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
    .min(0, "Cena musi być większa lub równa 0")
    .max(10000000, "Cena musi być mniejsza niż 10000000")
    .required("Cena jest wymagana"),
  publishingHouse: Yup.string()
    .min(2, "Wydawnictwo musi mieć conajmniej 2 znaki")
    .max(50, "Wydawnictwo musi być krótsze niż 50 znaków")
    .required("Wydawnictwo jest wymagane"),
  part: Yup.number()
    .max(10, "Część musi być krótsza niż 10 znaków")
    .required("Część jest wymagana"),
});
