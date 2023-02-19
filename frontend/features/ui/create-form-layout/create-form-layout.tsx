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
      <div className="flex flex-col items-center w-full h-full mt-36 lg:w-1/2 ">
        <div className="flex-col items-center justify-center w-full p-4 mb-20 md:w-2/3">
          {children}
        </div>
      </div>

      <div className="flex items-center justify-center p-8 mt-10 bg-gray-100 lg:w-1/2 lg:mt-0">
        <Image
          src={imageSrc}
          alt={""}
          className="w-1/2 lg:-translate-y-1/2 lg:fixed lg:top-1/2 lg:w-1/3"
        />
      </div>
    </main>
  );
};

export default CreateFormLayout;
