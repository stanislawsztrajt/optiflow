import "@/assets/styles/globals.css";
import UndrawLesson from "assets/undraw/undraw_lesson.svg";
import { CreateFormLayout } from "@/features/ui";

export default function EditPrivateLessonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CreateFormLayout imageSrc={UndrawLesson}>{children}</CreateFormLayout>
  );
}
