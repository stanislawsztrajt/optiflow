import "@/assets/styles/globals.css";
import UndrawEvent from "assets/undraw/undraw_event.svg";
import { CreateFormLayout } from "@/features/ui";

export default function CreateEventLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CreateFormLayout imageSrc={UndrawEvent}>{children}</CreateFormLayout>;
}
