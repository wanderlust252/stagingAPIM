/* eslint-disable react-hooks/rules-of-hooks */
import requestApi from '../config';
import { useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
interface IParams {
  page: number;
  limit: number;
  search?: string;
}
export const useGetAgentManagement = (queryKey: string, params: IParams) => {
  const url = '/getAllAgents';
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
