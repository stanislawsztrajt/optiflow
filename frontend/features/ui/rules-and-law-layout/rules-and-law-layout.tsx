import { FCC } from "@/utils/types";
import Link from "next/link";
import React, { ReactNode } from "react";
import useRulesAndLawLayout from "./use-rules-and-law-layout";

interface IProps {
  children: ReactNode;
}

const RulesAndLawLayout: FCC<IProps> = ({ children }) => {
  const { links, currentRoute } = useRulesAndLawLayout();

  const linksMap = links.map((link, _index) => {
    return (
      <Link
        key={link.route}
        href={link.route}
        className={_index === 0 ? "mx-10" : ""}
      >
        {link.title}
      </Link>
    );
  });

  return (
    <div className="mt-20">
      <div className="w-11/12 px-4 py-6 mx-auto bg-white md:py-10 md:px-10 md:w-2/3 xl:px-20 xl:py-16">
        <div className="flex flex-row items-end justify-between font-semibold">
          <h2 className="text-2xl xl:text-3xl">{currentRoute?.title}</h2>
          <div className="flex flex-row">
            <p className="font-normal">Sprawdź również:</p>
            {linksMap}
          </div>
        </div>
        <div className="pt-5 mt-5 border-t">{children}</div>
      </div>
    </div>
  );
};

export default RulesAndLawLayout;
