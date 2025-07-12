import { apiClient } from '@/shared/api';
import type { IUser, LogintResponse } from '../model/types';

export const login = async (userData: IUser): Promise<LogintResponse> => {
  const response = await apiClient.base.post('/auth/login', userData);
  return response.data;
};
