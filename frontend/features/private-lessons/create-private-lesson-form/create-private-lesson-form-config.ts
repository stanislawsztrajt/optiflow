import { swearWords } from "@/utils/data/swear-words";
import * as Yup from "yup";
import { PrivateLessonsCategoryEnum, PrivateLessonsOfferTypeEnum } from "../types";

export const createLostItemInitialValues = {
  title: "",
  description: "",
  price: "",
  category: PrivateLessonsCategoryEnum.MATH,
  offerType: PrivateLessonsOfferTypeEnum.OFFER
};

export const createLostItemValidationSchema = Yup.object({
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
});
