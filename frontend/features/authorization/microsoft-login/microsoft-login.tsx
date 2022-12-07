'use client';

import React, { FC, useState } from 'react'
import { microsoftLoginConfig } from './microsoft-login-config'
import { PublicClientApplication } from '@azure/msal-browser'

const MicrosoftLogin: FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  const publicClientApplication = new PublicClientApplication({
    auth: {
      clientId: microsoftLoginConfig.clientId,
      redirectUri: microsoftLoginConfig.redirectUri,
      authority: microsoftLoginConfig.authority
    },
    cache: {
      cacheLocation: 'sessionStorage',
      storeAuthStateInCookie: true
    }
  })

  const login = async () => {
    console.log('login')
    try {
      console.log('trying')
      await publicClientApplication.loginPopup(
        {
          scopes: microsoftLoginConfig.scopes,
          prompt: 'select_account'
        }
      )
      console.log('successed')

      setIsAuthenticated(true)
    } catch (err) {
      console.log(err)
      console.log('err')
      setError('error');
      setIsAuthenticated(false)
      setUser({})
    }
  }


  return(
    <>
      <button onClick={login}>login with teams</button>
    </>
  )
}

export default MicrosoftLogin