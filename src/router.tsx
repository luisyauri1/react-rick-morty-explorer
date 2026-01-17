import { createBrowserRouter } from 'react-router';
import Directory from './pages/Characters/Characters';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Directory,
  },
]);
