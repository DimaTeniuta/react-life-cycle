/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Outlet } from '../components/outlet';

const HomePage = lazy(() => import('../pages/home/Home'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <HomePage />
      }
    ]
  }
]);
