import { swearWords } from "@/utils/data/swear-words";
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
    .required("Nazwa przedmiotu jest wymagana")
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
  foundLocation: Yup.string()
    .min(5, "Lokalizacja musi mieć conajmniej 5 znaków")
    .max(100, "Lokalizacja musi być krótsza niż 100 znaków")
    .test('swearWords', 'Lokalizacja zawiera niedozwolone wyrazy', value => {
      return !swearWords.some(word => value?.includes(word));
    }),
  date: Yup.date().required("Data jest wymagana"),
});
