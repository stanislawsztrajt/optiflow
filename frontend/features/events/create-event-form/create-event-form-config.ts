import { swearWords } from "@/utils/data/swear-words";
import * as Yup from "yup";

export const createEventInitialValues = {
  title: "",
  description: "",
  location: "",
  date: "",
  images: [],
  price: "",
};

export const createEventValidationSchema = Yup.object({
  title: Yup.string()
    .min(5, "Tytuł musi mieć conajmniej 5 znaków")
    .max(200, "Tytuł musi być krótszy niż 200 znaków")
    .required("Tytuł jest wymagany")
    .test('swearWords', 'Tytuł zawiera niedozwolone wyrazy', value => {
      return !swearWords.some(word => value?.includes(word));
    }),
  description: Yup.string()
    .min(5, "Opis musi mieć conajmniej 5 znaków")
    .max(1000, "Opis musi być krótszy niż 1000 znaków")
    .required("Opis jest wymagany")
    .test('swearWords', 'Opis zawiera niedozwolone wyrazy', value => {
      return !swearWords.some(word => value?.includes(word));
    }),
  location: Yup.string()
    .min(2, "Lokalizacja musi mieć conajmniej 5 znaków")
    .max(50, "Lokalizacja musi być krótsza niż 100 znaków")
    .required("Lokalizacja jest wymagana")
    .test('swearWords', 'Lokalizacja zawiera niedozwolone wyrazy', value => {
      return !swearWords.some(word => value?.includes(word));
    }),
  date: Yup.date().required("Data jest wymagana"),
});
