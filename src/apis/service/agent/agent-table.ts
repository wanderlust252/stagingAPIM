/* eslint-disable react-hooks/rules-of-hooks */
import requestApi from '../../config';
import { useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { PaginationParams } from '@/interfaces';

export const useGetAgentManagement = (queryKey: string, params: PaginationParams) => {
  const url = '/get-allAgents';
  return useQuery([queryKey, params], async () => {
    try {
      const response = await requestApi.get(url, params);
      return response.data;
    } catch (err) {
      const error = err as AxiosResponse;
      throw error.data;
    }
  });
};
