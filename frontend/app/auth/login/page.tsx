'use client';
import React, { useState } from 'react'
import UndrawSecureLogin from 'assets/undraw/undraw_secure_login.svg';
import Image from 'next/image';
import useLogin from '@/features/authorization/login/use-login';

export default function LoginPage() {
  const { error, loading, login } = useLogin();

  return (
    <main className='flex flex-col w-full h-auto lg:h-screen lg:flex-row'>
      { loading ? (<div className='flex flex-col items-center justify-center w-full h-screen lg:h-full lg:w-1/2'>Loading...</div>) : (
        <div className='flex flex-col items-center justify-center w-full h-screen lg:h-full lg:w-1/2 '>
          <div className='flex-col items-center justify-center w-full p-4 md:w-2/3'>
            <h1 className='text-4xl font-medium text-color-primary-text'>
              Witaj!
            </h1>
            <h2 className='mt-4 text-color-subtext'>
              Zaloguj się przy użyciu konta Librus
            </h2>
            <form onSubmit={(e) => {
              e.preventDefault()
              const event = e as unknown as { target: { value: string }[] }
              login({ login: event.target[0].value, password: event.target[1].value })
            }} className='flex flex-col justify-center mt-8'>
              <div>
                <label className='auth-input-label' htmlFor="login">Login</label> <br />
                <input className='w-full mt-1 auth-input-text' type="text" name='login' placeholder='Wpisz swój login do konta librus' />
              </div>
              <div className='mt-4'>
                <label className='auth-input-label' htmlFor="password">Hasło</label> <br />
                <input className='w-full mt-1 auth-input-text' type="password" name='password' placeholder='Wpisz swoje hasło do konta librus' />
              </div>
              <div className='mt-2 text-sm text-red-500'>{ error }&nbsp;</div>
              <button className='mt-6 auth-button-submit' type="submit">Zaloguj się</button>
              <div className='mt-6 text-sm text-color-subtext'>
                Masz problem z logowaniem? <a className='underline duration-100 text-color-primary hover:brightness-125' target='_blank' href="https://portal.librus.pl/rodzina/synergia/loguj">Sprawdź stronę librusa!</a>
              </div>
            </form>
          </div>
        </div>
      ) }

      <div className='flex items-center justify-center w-full h-screen p-8 bg-gray-100 lg:h-auto lg:w-1/2'>
        <Image 
          src={UndrawSecureLogin}
          alt={''}
          className='w-full lg:w-3/4'
          loading='lazy'
        />
      </div>
    </main>
  )
}