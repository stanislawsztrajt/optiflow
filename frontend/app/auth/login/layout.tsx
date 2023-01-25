import "@/assets/styles/globals.css";
import FormLayout from "@/features/ui/form-layout/form-layout";
import UndrawSecureLogin from "assets/undraw/undraw_secure_login.svg";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <FormLayout imageSrc={UndrawSecureLogin}>{children}</FormLayout>;
}
