export const headerLinksList = [
  {
    name: 'Funkcjonalności',
    list: [
      {
        name: 'Książki',
        route: '/books',
        createRoute: '/books/create-book'
      },
      {
        name: 'Wydarzenia',
        route: '/events',
        createRoute: '/events/create-event'
      },
      {
        name: 'Zgubione przedmioty',
        route: '/lost-items',
        createRoute: '/lost-items/create-lost-item'
      },
      {
        name: 'Korepetycje',
        route: '/private-lessons',
        createRoute: '/private-lessons/create-private-lesson'
      },
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
        route: '/books',
        createRoute: null
      },
      {
        name: 'Kontakt',
        route: '/events',
        createRoute: null
      },
      {
        name: 'Polityka prywatności',
        route: '/lost-items',
        createRoute: null
      }
    ]
  }
];