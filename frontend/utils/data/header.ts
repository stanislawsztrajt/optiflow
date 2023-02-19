import { featuresRoutes } from "./routes";

export const headerLinksList = [
  {
    name: 'Funkcjonalności',
    list: [
      ...featuresRoutes,
      {
        name: 'Chat',
        route: '/chat',
        createRoute: null
      },
    ]
  },
  {
    name: 'Ogólne',
    list: [
      {
        name: 'O stronie',
        route: '/hero',
        createRoute: null
      },
      {
        name: 'Polityka prywatności',
        route: '/privacy-policy',
        createRoute: null
      },
      {
        name: 'Regulamin',
        route: '/terms-of-use',
        createRoute: null
      },
      {
        name: 'RODO',
        route: '/rodo',
        createRoute: null
      },
    ]
  }
];