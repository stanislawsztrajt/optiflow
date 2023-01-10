'use client'

import "@/assets/styles/globals.css";
import { Header } from "@/features/ui";
import ReduxProvider from "providers/redux-provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html>
      <head></head>
      <body>
        <ReduxProvider>
          <Header />
          <div className='mt-20'>
            {children}
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
