import type { ReactElement } from 'react';

import { CardsPage } from '@/pages/cards';
import { LoginPage } from '@/pages/login';
import { MainPage } from '@/pages/main';

type IRoute = {
	element: ReactElement;
	path: string;
	isProtected?: boolean;
};

export const routes: IRoute[] = [
	{ path: '/', element: <MainPage /> },
	{ path: '/:alias', element: <CardsPage /> },
	{ path: '/login', element: <LoginPage /> },
];
