import { BookCategoryEnum, BookLookEnum, BookTypeEnum } from "../types";
import { swearWords } from "@/utils/data/swear-words";

export const createBookInitialValues = {
  title: "",
  description: "",
  price: "",
  category: BookCategoryEnum.MATH,
  type: BookTypeEnum.SELL,
  publishingHouse: "",
  look: BookLookEnum.GOOD,
  part: "",
};
import * as Yup from "yup";


export const createBookValidationSchema = Yup.object({
  title: Yup.string()
    .min(5, "Tytuł musi mieć conajmniej 5 znaków")
    .max(100, "Tytuł musi być krótszy niż 100 znaków")
    .required("Tytuł jest wymagany")
    .test('swearWords', 'Tytuł zawiera niedozwolone wyrazy', value => {
      return !swearWords.some(word => value?.includes(word));
    }),
  description: Yup.string()
    .min(5, "Opis musi mieć conajmniej 5 znaków")
    .max(500, "Opis musi być krótszy niż 500 znaków")
    .required("Opis jest wymagany")
    .test('swearWords', 'Opis zawiera niedozwolone wyrazy', value => {
      return !swearWords.some(word => value?.includes(word));
    }),
  price: Yup.number()
    .min(0, "Cena musi być większa lub równa 0")
    .max(10000000, "Cena musi być mniejsza niż 10000000")
    .required("Cena jest wymagana"),
  publishingHouse: Yup.string()
    .min(2, "Wydawnictwo musi mieć conajmniej 2 znaki")
    .max(50, "Wydawnictwo musi być krótsze niż 50 znaków")
    .required("Wydawnictwo jest wymagane")
    .test('swearWords', 'Wydawnictwo zawiera niedozwolone wyrazy', value => {
      return !swearWords.some(word => value?.includes(word));
    }),
  part: Yup.string()
    .max(10, "Część musi być krótsza niż 10 znaków")
    .required("Część jest wymagana")
    .test('swearWords', 'Część zawiera niedozwolone wyrazy', value => {
      return !swearWords.some(word => value?.includes(word));
    }),
});
