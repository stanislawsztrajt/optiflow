import { IsortingConfig } from "@/features/ui/types";

export const sortingConfig:IsortingConfig = {
  events: [
    {
      text: "Data: rosnąco",
      variable: "date",
      sort: "+",
    },
    {
      text: "Data: malejąco",
      variable: "date",
      sort: "-"
    },
    {
      text: "Cena: rosnąco",
      variable: "price",
      sort: "+"
    },
    {
      text: "Cena: malejąco",
      variable: "price",
      sort: "-"
    },
  ],
  books: [
    {
      text: "Cena: rosnąco",
      variable: "price",
      sort: "+"
    },
    {
      text: "Cena: malejąco",
      variable: "price",
      sort: "-"
    },
  ],
  "private-lessons": [
    {
      text: "Cena: rosnąco",
      variable: "price",
      sort: "+"
    },
    {
      text: "Cena: malejąco",
      variable: "price",
      sort: "-"
    },
  ],
  "lost-items": [
    {
      text: "Data: rosnąco",
      variable: "date",
      sort: "+",
    },
    {
      text: "Data: malejąco",
      variable: "date",
      sort: "-"
    }
  ],
}