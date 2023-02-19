import "@/assets/styles/globals.css";
import { CreateFormLayout } from "@/features/ui";
import UndrawBook from 'assets/undraw/undraw_book_lover.svg'

export default function CreateBookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CreateFormLayout imageSrc={UndrawBook}>{children}</CreateFormLayout>;
}