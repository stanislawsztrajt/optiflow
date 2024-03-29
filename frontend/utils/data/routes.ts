import UndrawBookLover from "@/assets/undraw/undraw_book_lover.svg";
import UndrawEvent from "@/assets/undraw/undraw_event.svg";
import UndrawLesson from "@/assets/undraw/undraw_lesson.svg";
import UndrawLost from "@/assets/undraw/undraw_lost.svg";
import { IuserInfoLength } from "@/features/users/types";
import { featuresContent } from "./features-content";

export const featuresRoutes = [
  {
    name: "Książki",
    content: featuresContent.books,
    viewName: "Zobacz książki",
    route: "/books",
    createName: "Dodaj książkę",
    createRoute: "/books/create-book",
    image: UndrawBookLover,
  },
  {
    name: "Wydarzenia",
    content: featuresContent.events,
    viewName: "Zobacz wydarzenia",
    route: "/events",
    createName: "Dodaj wydarzenie",
    createRoute: "/events/create-event",
    image: UndrawEvent,
  },
  {
    name: "Zgubione przedmioty",
    content: featuresContent.lostItems,
    viewName: "Zobacz zgubione przedmioty",
    route: "/lost-items",
    createName: "Dodaj zgubiony przedmiot",
    createRoute: "/lost-items/create-lost-item",
    image: UndrawLost,
  },
  {
    name: "Korepetycje",
    content: featuresContent.privateLessons,
    viewName: "Zobacz korepetycje",
    route: "/private-lessons",
    createName: "Dodaj korepetycje",
    createRoute: "/private-lessons/create-private-lesson",
    image: UndrawLesson,
  },
];

export const userFeaturesRoutes = (
  userInfoLength: IuserInfoLength,
  userId: string,
  isUserPage: boolean = true
) => {
  return [
    {
      name: `Książki (${userInfoLength.books})`,
      image: UndrawBookLover,
      viewName: isUserPage ? "Książki użytkownika" : "Twoje książki",
      content: featuresContent.books,
      route: `/users/${userId}/books`,
    },
    {
      name: `Wydarzenia (${userInfoLength.events})`,
      image: UndrawEvent,
      viewName: isUserPage ? "Wydarzenia użytkownika" : "Twoje wydarzenia",
      content: featuresContent.events,
      route: `/users/${userId}/events`,
    },
    {
      name: `Zgubione przedmioty (${userInfoLength.lostItems})`,
      image: UndrawLost,
      viewName: isUserPage
        ? "Zgubione przedmioty użytkownika"
        : "Twoje zgubione przedmioty",
      content: featuresContent.lostItems,
      route: `/users/${userId}/lost-items`,
    },
    {
      name: `Korepetycje (${userInfoLength.privateLessons})`,
      image: UndrawLesson,
      viewName: isUserPage ? "Korepetycje użytkownika" : "Twoje korepetycje",
      content: featuresContent.privateLessons,
      route: `/users/${userId}/private-lessons`,
    },
  ];
};
