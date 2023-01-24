"use client";

import Link from "next/link";
import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool, faUser } from "@fortawesome/free-solid-svg-icons";
import { APP_NAME } from "@/utils/constans";
import useHeader from "./use-header";
import Hamburger from "hamburger-react";
import { useUser } from "@/utils/hooks";

const links = [
  {
    route: "",
    name: "Strona główna",
  },
  {
    route: "",
    name: "O stronie",
  },
  {
    route: "",
    name: "Polityka prywatności",
  },
  {
    route: "",
    name: "Kontakt",
  },
];

const Header: FC = () => {
  const { user } = useUser();
  const { isMenuOpen, setIsMenuOpen } = useHeader();

  const linksMap = links.map((link) => {
    return (
      <li
        key={link.name}
        className="text-gray-800 duration-100 hover:text-black "
      >
        <Link href={link.route}>{link.name}</Link>
      </li>
    );
  });

  const menuLinksMap = links.map((link) => {
    return (
      <li key={link.name} className="menu-list-link">
        <Link href={link.route}>{link.name}</Link>
      </li>
    );
  });

  const authButton: JSX.Element = (
    <>
      {user ? (
        <Link href={"/dashboard"}>
          <button type="button" className="menu-button lg:text">
            <FontAwesomeIcon icon={faUser} />
            <span className="ml-2">Panel użytkownika</span>
          </button>
        </Link>
      ) : (
        <Link href={"/auth/login"}>
          <button type="button" className="menu-button">
            <FontAwesomeIcon icon={faSchool} />
            <span className="ml-2">Zaloguj się używając Librus</span>
          </button>
        </Link>
      )}
    </>
  );

  return (
    <nav className="px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 -mt-2 lg:mt-0 left-0 bg-white border-b">
      <div className="container flex flex-wrap items-center justify-between h-16 mx-auto">
        <Link href="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap ">
            {APP_NAME}
          </span>
        </Link>
        <div className="order-2 hidden lg:flex">{authButton}</div>
        <div
          className="items-center justify-between lg:flex lg:w-auto"
          id="navbar-sticky"
        >
          <div className="block text-3xl cursor-pointer lg:hidden">
            <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} />
          </div>
          <ul className="flex-col items-center hidden p-4 mt-4 bg-white border rounded-lg lg:flex lg:flex-row lg:space-x-8 lg:mt-0 lg:text-sm lg:font-medium lg:border-0">
            {linksMap}
          </ul>
        </div>
      </div>

      {isMenuOpen ? (
        <div className="fixed left-0 w-screen h-screen bg-white border-t lg:hidden menu-animation">
          <div className="flex flex-col justify-end gap-4 px-4 text-center list-none h-3/4">
            {menuLinksMap}
            {authButton}
          </div>
        </div>
      ) : null}
    </nav>
  );
};

export default Header;
