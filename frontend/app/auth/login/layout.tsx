import "@/assets/styles/globals.css";
import { FormLayout } from "@/features/ui";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <FormLayout>{children}</FormLayout>;
}
