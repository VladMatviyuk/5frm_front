import { createContext, useContext, type FC, type ReactNode } from 'react';

const UserContext = createContext({ auth: false });

interface Props {
	readonly children: ReactNode;
}

export function useUser() {
	return useContext(UserContext);
}

export const UserProvider: FC<Props> = ({ children }) => {
	const checkAuth = (): boolean => {
		const token = localStorage.getItem('authToken');
		return !!token;
	};

	const auth = checkAuth();

	const value = { auth };
	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
