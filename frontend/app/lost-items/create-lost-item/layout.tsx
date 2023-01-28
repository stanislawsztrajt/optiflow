import "@/assets/styles/globals.css";
import UndrawLost from "assets/undraw/undraw_lost.svg";
import { CreateFormLayout } from "@/features/ui";

export default function CreateLostItemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CreateFormLayout imageSrc={UndrawLost}>{children}</CreateFormLayout>;
}
