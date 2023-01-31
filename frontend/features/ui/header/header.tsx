"use client";

import Link from 'next/link'
import React, { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool, faUser, faRightFromBracket, faPlus, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { APP_NAME } from '@/utils/constans';
import useHeader from './use-header';
import { Twirl as Hamburger } from 'hamburger-react'
import { useUser } from '@/utils/hooks';
import { logout } from '@/utils/helpers/user';
import { headerLinksList } from '@/utils/data/header';


const Header: FC = () => {
  const { user } = useUser();
  const { isMenuOpen, setIsMenuOpen } = useHeader();

  const linksMap = headerLinksList.map((links) => {
    return (
      <div>
        <button className="px-5 py-2 text-gray-700 duration-100 hover:text-black peer">
          { links.name }
          <FontAwesomeIcon icon={faCaretDown} className='ml-2' />
        </button>
        <div className="absolute flex-col items-center hidden w-full rounded-lg lg:bg-white lg:w-auto peer-hover:flex hover:flex drop-shadow-lg">
          { links.list.map(link => (
            <div key={link.name} className="flex items-center justify-between w-56 p-4 pt-5 duration-100 bg-white border-b lg:bg-transparent hover:bg-gray-100">
              <Link href={link.route} className='text-gray-700 hover:text-black'>
                {link.name}
              </Link>
              { link.createRoute ? (
                <Link href={link.createRoute}>
                  <FontAwesomeIcon className='w-4 h-4 p-1 text-white border bg-color-primary border-color-primary hover:brightness-110 rounded-xl' icon={faPlus} />
                </Link>
              ) : null }
            </div>
          )) }
        </div>
      </div>
    );
  });

  const authButton: JSX.Element = (
    <>
      {user ? (
        <>
          <Link href={"/dashboard"}>
            <button type="button" className="menu-button">
              <FontAwesomeIcon className='h-4' icon={faUser} />
              <span className='ml-2'>
                Panel użytkownika
              </span>
            </button>
          </Link>
          <button
            type="button"
            onClick={logout}
            className="text-white lg:ml-4 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-0 lg:mr-1"
          >
            <FontAwesomeIcon icon={faRightFromBracket} />
          </button>
        </>
      ) : (
        <Link href={"/auth/login"}>
          <button type="button" className="menu-button">
            <FontAwesomeIcon className='h-4' icon={faSchool} />
            <span className='ml-2'>
              Zaloguj się używając Librus
            </span>
          </button>
        </Link>
      )}
    </>
  );

  return(
    <nav className="px-6 sm:px-4 py-2.5 fixed w-full z-20 top-0 lg:mt-0 left-0 bg-white border-b">
      <div className="container flex flex-wrap items-center justify-between h-16 mx-auto">
        <Link href="/" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap ">{APP_NAME}</span>
        </Link>
        <div className="order-2 hidden lg:flex">
          { authButton }
        </div>

        <div className="items-center justify-between lg:flex lg:w-auto" id="navbar-sticky">
          <div className='block text-2xl cursor-pointer lg:hidden'>
            <Hamburger
              toggled={isMenuOpen}
              toggle={setIsMenuOpen}
              rounded={true}
              size={28}
            />
          </div>
          <ul className="flex-col items-center hidden p-4 mt-4 bg-white border rounded-lg lg:flex lg:flex-row lg:space-x-8 lg:mt-0 lg:text-sm lg:font-medium lg:border-0">
            {linksMap}
          </ul>
        </div>
      </div>

      { isMenuOpen ? (
        <div className='fixed left-0 w-screen h-screen bg-white border-t top-20 lg:hidden menu-animation'>
          <div className='flex flex-col justify-center h-screen gap-4 pl-2 pr-6 text-center list-none'>
            { linksMap }
            { authButton }
          </div>
        </div>
      ) : null}
    </nav>
  );
};

export default Header;
