import { apiClient } from '@/shared/api';
import type { CreateSection, Sections } from '../model/types';

export const getSections = async (): Promise<Sections> => {
  const response = await apiClient.base.get('/sections');
  return response.data;
};

export const getSection = async (id: string) => {
  const response = await apiClient.base.get(`/sections/${id}`);
  return response.data;
};

export const createSection = async (data: CreateSection) => {
  const response = await apiClient.auth.post('/sections', data);
  return response.data;
};

export const updateSection = async (id: string, data: CreateSection) => {
  const response = await apiClient.auth.put(`/sections/${id}`, data);
  return response.data;
};

export const deleteSection = async (id: string) => {
  const response = await apiClient.auth.delete(`/sections/${id}`);
  return response.data;
};
