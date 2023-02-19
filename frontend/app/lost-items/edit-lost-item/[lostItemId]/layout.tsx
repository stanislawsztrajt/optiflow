import "@/assets/styles/globals.css";
import UndrawLost from "assets/undraw/undraw_lost.svg";
import { CreateFormLayout } from "@/features/ui";

export default function EditLostItemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CreateFormLayout imageSrc={UndrawLost}>{children}</CreateFormLayout>;
}
