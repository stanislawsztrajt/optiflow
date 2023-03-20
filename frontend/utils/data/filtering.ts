import { BookCategories, BookLooks, BookTypes } from "@/features/books/types";
import { PrivateLessonsCategories, PrivateLessonsOfferTypes } from "@/features/private-lessons/types";
import { LostItemTypes } from "@/features/lost-items/types";
import { IfilteringOption } from "@/features/ui/types";

export const booksFilters:IfilteringOption[] = [
  {
    label: "Przedmiot",
    variable: "category",
    options: BookCategories,
  },
  {
    label: "Stan",
    variable: "look",
    options: BookLooks,
  },
  {
    label: "Rodzaj oferty",
    variable: "type",
    options: BookTypes,
  }
]

export const privateLessonsFilters:IfilteringOption[] = [
  {
    label: "Przedmiot",
    variable: "category",
    options: PrivateLessonsCategories,
  },
  {
    label: "Rodzaj oferty",
    variable: "type",
    options: PrivateLessonsOfferTypes,
  }
]

export const lostItemsFilters:IfilteringOption[] = [
  {
    label: "Rodzaj zgłoszenia",
    variable: "type",
    options: LostItemTypes,
  }
]