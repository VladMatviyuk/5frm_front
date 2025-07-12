import { useRoutes } from 'react-router';
import { routes } from './routes';
import { AuthLayout, PublicLayout } from '@/app/layouts';

export const Router = () => {
  const publicRoutes = {
    element: <PublicLayout />,
    children: routes.filter((route) => !route.isProtected),
  };
  const privateRoutes = {
    element: <AuthLayout />,
    children: routes.filter((route) => route.isProtected),
  };

  return useRoutes([publicRoutes, privateRoutes]);
};
