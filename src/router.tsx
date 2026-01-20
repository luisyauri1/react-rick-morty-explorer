import Characters from '@pages/Characters/Characters';
import { createBrowserRouter } from 'react-router';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      Component: Characters,
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);
