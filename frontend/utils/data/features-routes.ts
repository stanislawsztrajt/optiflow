import UndrawBookLover from "@/assets/undraw/undraw_book_lover.svg";
import UndrawEvent from "@/assets/undraw/undraw_event.svg";
import UndrawLesson from "@/assets/undraw/undraw_lesson.svg";
import UndrawLost from "@/assets/undraw/undraw_lost.svg";

export const featuresRoutes = [
  {
    name: "Książki",
    viewName: "Zobacz książki",
    mainRoute: "/books",
    createName: "Dodaj książkę",
    createRoute: "/books/create-book",
    image: UndrawBookLover,
  },
  {
    name: "Wydarzenia",
    viewName: "Zobacz wydarzenia",
    mainRoute: "/events",
    createName: "Dodaj wydarzenie",
    createRoute: "/events/create-event",
    image: UndrawEvent,
  },
  {
    name: "Zgubione przedmioty",
    viewName: "Zobacz zgubione przedmioty",
    mainRoute: "/lost-items",
    createName: "Dodaj zgubiony przedmiot",
    createRoute: "/lost-items/create-lost-item",
    image: UndrawLost,
  },
  {
    name: "Korepetycje",
    viewName: "Zobacz korepetycje",
    mainRoute: "/private-lessons",
    createName: "Dodaj korepetycje",
    createRoute: "/private-lessons/create-private-lesson",
    image: UndrawLesson,
  },
];
