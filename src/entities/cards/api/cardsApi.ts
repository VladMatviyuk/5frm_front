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
