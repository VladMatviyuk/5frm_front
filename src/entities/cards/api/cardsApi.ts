import { apiClient } from '@/shared/api';
import type { Card, CardList, CreateCard } from '../model/types';

export const getCard = async (id: string): Promise<Card> => {
	const response = await apiClient.auth.get(`/cards/${id}`);
	return response.data;
};

export const getSectionCards = async (id: string): Promise<CardList> => {
	const response = await apiClient.base.get(`/cards/section/${id}`);
	return response.data;
};

export const createCard = async (data: CreateCard): Promise<Card> => {
	const response = await apiClient.auth.post('/cards', data);
	return response.data;
};

export const editCard = async (id: string, data: CreateCard): Promise<Card> => {
	const response = await apiClient.auth.put(`/cards/${id}`, data);
	return response.data;
};

export const deleteCard = async (id: string): Promise<Card> => {
	const response = await apiClient.auth.delete(`/cards/${id}`);
	return response.data;
};
