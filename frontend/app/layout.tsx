"use client";

import "@/assets/styles/globals.css";
import "animate.css";
import { Header } from "@/features/ui";
import ReduxProvider from "providers/redux-provider";
import { useRoutesGuards } from "@/utils/hooks/use-routes-guards";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useRoutesGuards();

  return (
    <html>
      <head>
        <title>Nethings | Uporządkowane funkcje, których dotychczas brakowało - teraz dostępne w jednym miejscu.</title>
      </head>
      <body>
        <ReduxProvider>
          <Header />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
