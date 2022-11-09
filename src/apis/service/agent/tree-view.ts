import requestApi from '../../config';
import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import {
  AgentCreatePram,
  BalanceChangePram,
  ChangePasswordPram,
  ListTreeResponse,
  IResponseApi,
  ToDoResponse,
  UserInfoResponse,
} from '@/interfaces';

export const useListTree = () => {
  return useQuery<ListTreeResponse[], IResponseApi>({
    queryKey: ['ListTreeData'],
    queryFn: async () => {
      const url = '/list-tree';
      try {
        const { data } = await requestApi.get<ListTreeResponse[]>(url);
        return data;
      } catch (err) {
        const error = err as AxiosResponse;
        throw error.data;
      }
    },
  });
};

export const useUserInfo = () => {
  return useMutation<UserInfoResponse, IResponseApi, string | number, number>(async (id) => {
    const url = `/user-info/${id}`;

    try {
      const { data } = await requestApi.get<UserInfoResponse>(url);
      return data;
    } catch (err) {
      const error = err as AxiosResponse;
      throw error.data;
    }
  });
};

export const useChangePasswordUser = () => {
  const url = '/change-password';
  return useMutation<ToDoResponse, IResponseApi, ChangePasswordPram, number>(async (values) => {
    try {
      const { data } = await requestApi.put<ToDoResponse>(url, values);
      return data;
    } catch (err) {
      const error = err as AxiosResponse;
      throw error.data;
    }
  });
};

export const useAgentCreate = () => {
  const url = '/agent-create';
  return useMutation<ToDoResponse, IResponseApi, AgentCreatePram, number>(async (values) => {
    try {
      const { data } = await requestApi.post<ToDoResponse>(url, values);
      return data;
    } catch (err) {
      const error = err as AxiosResponse;
      throw error.data;
    }
  });
};

export const useBalanceChange = () => {
  const url = '/balance-change';
  return useMutation<ToDoResponse, IResponseApi, BalanceChangePram, number>(async (values) => {
    try {
      const { data } = await requestApi.put<ToDoResponse>(url, values);
      return data;
    } catch (err) {
      const error = err as AxiosResponse;
      throw error.data;
    }
  });
};
