import "@/assets/styles/globals.css";
import UndrawBook from "assets/undraw/undraw_book.svg";
import CreateFormLayout from "@/features/ui/create-form-layout";

export default function CreateBookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CreateFormLayout imageSrc={UndrawBook}>{children}</CreateFormLayout>;
}
