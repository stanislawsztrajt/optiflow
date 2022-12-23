import { FCC } from "@/utils/types";
import Image from "next/image";
import React, { FC, ReactNode } from "react";

interface Props {
  imageSrc: any;
  children: ReactNode;
}

const CreateFormLayout: FCC<Props> = ({ imageSrc, children }) => {
  return (
    <main className="flex flex-col w-full lg:flex-row">
      <div className="flex flex-col items-center w-full h-full mt-20 lg:w-1/2 ">
        <div className="flex-col items-center justify-center w-full p-4 md:w-2/3">
          {children}
        </div>
      </div>

      <div className="flex items-center justify-center w-full p-8 bg-gray-100 lg:w-1/2">
        <Image
          src={imageSrc}
          alt={""}
          className="w-full lg:w-3/4"
          loading="lazy"
        />
      </div>
    </main>
  );
};

export default CreateFormLayout;
