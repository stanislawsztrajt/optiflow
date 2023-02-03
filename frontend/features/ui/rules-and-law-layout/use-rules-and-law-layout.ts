import { IrulesAndLawLink } from "../types";
import { usePathname } from "next/navigation";

const useRulesAndLawLayout = () => {
  const pathname = usePathname();

  let links: IrulesAndLawLink[] = [
    {
      title: "Polityka prywatności",
      route: "/privacy-policy",
    },
    {
      title: "Regulamin",
      route: "/terms-of-use",
    },
    {
      title: "RODO",
      route: "/rodo",
    },
  ];

  const currentRoute = links.find(
    (link) => link.route === pathname
  ) as IrulesAndLawLink;

  links = links.filter((link) => link.route !== pathname);

  return {
    links,
    currentRoute,
  };
};

export default useRulesAndLawLayout;
