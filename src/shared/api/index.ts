// src/shared/api/api.ts

import axios, { type AxiosInstance } from 'axios';

const getBaseURL = () => {
	return 'http://localhost:3000';
};

const createClient = (withAuth = false): AxiosInstance => {
	const client = axios.create({
		baseURL: getBaseURL(),
	});

	if (withAuth) {
		const token = localStorage.getItem('authToken');
		client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
	}

	return client;
};

export const apiClient = {
	base: createClient(),
	auth: createClient(true),
};
