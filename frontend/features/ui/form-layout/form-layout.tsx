import { FCC } from "@/utils/types";
import Image from "next/image";
import React, { ReactNode } from "react";
import UndrawSecureLogin from "assets/undraw/undraw_login.svg";

interface Props {
  children: ReactNode;
}

const FormLayout: FCC<Props> = ({ children }) => {
  return (
    <main className="flex flex-col w-full h-auto lg:h-screen lg:flex-row">
      <div className="flex flex-col items-center justify-center w-full h-screen lg:h-full lg:w-1/2 ">
        <div className="flex-col items-center justify-center w-full p-4 md:w-2/3">
          {children}
        </div>
      </div>

      <div className="flex items-center justify-center w-full h-screen p-8 bg-gray-100 lg:h-auto lg:w-1/2">
        <Image
          src={UndrawSecureLogin}
          alt={""}
          className="w-full lg:w-3/4"
          loading="lazy"
        />
      </div>
    </main>
  );
};

export default FormLayout;
