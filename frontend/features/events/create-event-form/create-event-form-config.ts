import * as Yup from "yup";

export const createEventInitialValues = {
  title: "",
  description: "",
  location: "",
  date: "",
  images: [],
  price: ""
};

export const createEventValidationSchema = Yup.object({
  title: Yup.string()
    .min(5, "Tytuł musi mieć conajmniej 5 znaków")
    .max(200, "Tytuł musi być krótszy niż 200 znaków")
    .required("Tytuł jest wymagany"),
  description: Yup.string()
    .min(5, "Opis musi mieć conajmniej 5 znaków")
    .max(1000, "Opis musi być krótszy niż 1000 znaków")
    .required("Opis jest wymagany"),
  location: Yup.string()
    .min(2, "Lokalizacja musi mieć conajmniej 5 znaków")
    .max(50, "Lokalizacja musi być krótsza niż 100 znaków")
    .required("Lokalizacja jest wymagana"),
  date: Yup.date()
    .required("Data jest wymagana"),
});
