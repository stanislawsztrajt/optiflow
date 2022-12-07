export const microsoftLoginConfig = {
  clientId: process.env.MICROSOFT_LOGIN_CLIENT_ID as string,
  redirectUri: 'http://localhost:3000',
  scopes: [
    'user.read'
  ],
  authority: 'https://login.microsoftonline.com/achrafchad.onmicrosoft.com'
}