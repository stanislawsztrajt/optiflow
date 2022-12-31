import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool } from '@fortawesome/free-solid-svg-icons';
import { APP_NAME } from '@/utils/constans';

const links = [
  {
    route: '',
    name: 'Strona główna'
  },
  {
    route: '',
    name: 'O stronie'
  },
  {
    route: '',
    name: 'Polityka prywatności'
  },
  {
    route: '',
    name: 'Kontakt'
  }
]

const Header: FC = () => {
  const linksMap = links.map(link => {
    return (
      <li key={link.name} className='text-gray-800 duration-100 hover:text-black'>
        <Link href={link.route}>{link.name}</Link>
      </li>
    )
  })

  return(
    <nav className="px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 bg-white">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
      <Link href="/" className="flex items-center">
        <span className="self-center text-xl font-semibold whitespace-nowrap ">{APP_NAME}</span>
      </Link>
      <div className="flex md:order-2">
        <Link href={'/auth/login'}>
          <button type="button" className="text-white bg-color-primary hover:brightness-125 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0">
            <FontAwesomeIcon icon={faSchool} />
            <span className='ml-2'>
              Zaloguj się używając Librus
            </span>
          </button>
        </Link>
      </div>
      <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        <ul className="flex flex-col p-4 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
          {linksMap}
        </ul>
      </div>
      </div>
    </nav>
  )
}

export default Header
  