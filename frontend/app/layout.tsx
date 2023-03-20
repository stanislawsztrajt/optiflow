"use client";

import "@/assets/styles/globals.css";
import "animate.css";
import { Footer, Header } from "@/features/ui";
import ReduxProvider from "providers/redux-provider";
// import { useRoutesGuards } from "@/utils/hooks/use-routes-guards";
import { useEffect } from 'react'
import { usePathname } from "next/navigation";
import { Open_Sans } from "@next/font/google"

interface Iprops {
  children: React.ReactNode;
}

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }:Iprops) {
  const pathname = usePathname()

  // useRoutesGuards();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname]);

  return (
    <html lang="pl" className={openSans.className}>
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Optiflow | Uporządkowane funkcje, których dotychczas brakowało - teraz dostępne w jednym miejscu.</title>
      </head>
      <body>
        <ReduxProvider>
          <div className='min-h-screen pb-20'>
            <Header />
            {children}
          </div>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
