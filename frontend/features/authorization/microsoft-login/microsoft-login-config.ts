export const microsoftLoginConfig = {
  clientId: process.env.MICROSOFT_LOGIN_CLIENT_ID as string,
  redirectUri: 'http://localhost:3000/auth',
  scopes: [
    'openid', 'profile', 'User.Read'
  ],
  authority: 'https://login.microsoftonline.com/common'
}