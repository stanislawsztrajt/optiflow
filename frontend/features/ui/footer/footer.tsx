import { APP_NAME } from '@/utils/constans';
import { useUser } from '@/utils/hooks';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { FC } from 'react';

const Footer: FC = () => {
  const { user } = useUser()

  return (
    <footer className="bg-white border-t">
      <div className="container p-6 mx-auto">
        <div className="lg:flex lg:flex-row lg:justify-between">
          <div className="w-full -mx-6 lg:w-2/5">
            <div className="px-6">
              <h1 className='text-3xl font-semibold text-gray-700'>{ APP_NAME }</h1>
            </div>
          </div>
          <div className="flex mt-6 sm:items-end sm:justify-end lg:mt-0 lg:w-3/5">
            <div className="grid grid-cols-1 gap-10 sm:gap-20 sm:grid-cols-3">
              <div>
                <h3 className="font-medium text-gray-700 uppercase">Funkcjonalności</h3>
                <Link href={`books`} className="block mt-2 text-sm text-gray-600 hover:underline">Książki</Link>
                <Link href={`events`} className="block mt-2 text-sm text-gray-600 hover:underline">Wydarzenia</Link>
                <Link href={`lost-items`} className="block mt-2 text-sm text-gray-600 hover:underline">Zgubione przedmioty</Link>
                <Link href={`private-lessons`} className="block mt-2 text-sm text-gray-600 hover:underline">Korepetycje</Link>
              </div>
              <div>
                <h3 className="uppercase font-mediumtext-gray-700">Kwestie prawne</h3>
                <Link href={`rodo`} className="block mt-2 text-sm text-gray-600 hover:underline">RODO</Link>
                <Link href={`privacy-policy`} className="block mt-2 text-sm text-gray-600 hover:underline">Polityka prywatności</Link>
                <Link href={`terms-of-use`} className="block mt-2 text-sm text-gray-600 hover:underline">Regulamin</Link>
              </div>
              <div>
                <h3 className="uppercase font-mediumtext-gray-700">Inne</h3>
                <Link href={`hero`} className="block mt-2 text-sm text-gray-600 hover:underline">O stronie</Link>
                <Link href={user ? 'dashboard' : 'auth/login'} className="block mt-2 text-sm text-gray-600 hover:underline">{user ? 'Panel użytkownika' : "Logowanie"}</Link>
                <Link href={`chat`} className="block mt-2 text-sm text-gray-600 hover:underline">Chat</Link>
              </div>
            </div>
          </div>
        </div>
        <hr className="h-px my-6 bg-gray-200 border-none" />
        <div className='flex flex-col items-start justify-start text-gray-600 md:justify-between md:flex-row'>
          <div className='flex flex-col justify-start sm:items-center sm:flex-row'>
            <span className='flex flex-row'>
              <FontAwesomeIcon icon={faGithub} className='w-4 h-4 mb-1' title='GitHub' />
              <span className='block sm:hidden'>Profile GitHub</span>
            </span>
            <Link
              href={`https://github.com/kordianjanowski/`}
              target="_blank"
              className='sm:mx-5'
              title='Profil GitHub'
              >
                Kordian Janowski
            </Link>
            <Link href={`https://github.com/stanislawsztrajt/`} target="_blank" title='Profil GitHub'>Stanisław Sztrajt</Link>
          </div>
          <p className="mt-5 text-center text-gray-500 md:mt-0">Wszelkie prawa zastrzeżone</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;