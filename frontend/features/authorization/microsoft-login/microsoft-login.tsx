import React, { FC, useState } from 'react'
import { microsoftLoginConfig } from './microsoft-login-config'
// import { PublicClientApplication } from '@azure/msal-browser'

const MicrosoftLogin: FC = () => {
  // const [error, setError] = useState<string | null>(null);
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const [user, setUser] = useState({});
  // const publicClientApplication = new PublicClientApplication({
  //   auth: {
  //     clientId: microsoftLoginConfig.clientId,
  //     redirectUri: microsoftLoginConfig.redirectUri,
  //     authority: microsoftLoginConfig.authority
  //   },
  //   cache: {
  //     cacheLocation: 'sessionStorage',
  //     storeAuthStateInCookie: true
  //   }
  // })

  // const login = async () => {
  //   try {
  //     // await publicClientApplication.loginPopup(
  //     //   {
  //     //     scopes: microsoftLoginConfig.scopes,
  //     //     prompt: 'select_account'
  //     //   }
  //     // )

  //     setIsAuthenticated(true)
  //   } catch (err) {
  //     setError('error');
  //     setIsAuthenticated(false)
  //     setUser({})
  //   }
  // }


  return(
    <>
    </>
  )
}

export default MicrosoftLogin