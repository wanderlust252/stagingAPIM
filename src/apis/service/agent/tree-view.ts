import requestApi from '../../config';
import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import {
  AgentCreatePram,
  BalanceChangePram,
  ChangePasswordPram,
  ListTreeResponse,
  ResponseApi,
  ToDoResponse,
  UserInfoResponse,
} from '@/interfaces';

const useListTree = () => {
  return useQuery<ListTreeResponse[], ResponseApi>({
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

const useUserInfo = () => {
  return useMutation<UserInfoResponse, ResponseApi, string | number, number>(async (id) => {
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

const useChangePassword = () => {
  const url = '/change-password';
  return useMutation<ToDoResponse, ResponseApi, ChangePasswordPram, number>(async (values) => {
    try {
      const { data } = await requestApi.put<ToDoResponse>(url, values);
      return data;
    } catch (err) {
      const error = err as AxiosResponse;
      throw error.data;
    }
  });
};

const useAgentCreate = () => {
  const url = '/agent-create';
  return useMutation<ToDoResponse, ResponseApi, AgentCreatePram, number>(async (values) => {
    try {
      const { data } = await requestApi.post<ToDoResponse>(url, values);
      return data;
    } catch (err) {
      const error = err as AxiosResponse;
      throw error.data;
    }
  });
};

const useBalanceChange = () => {
  const url = '/balance-change';
  return useMutation<ToDoResponse, ResponseApi, BalanceChangePram, number>(async (values) => {
    try {
      const { data } = await requestApi.put<ToDoResponse>(url, values);
      return data;
    } catch (err) {
      const error = err as AxiosResponse;
      throw error.data;
    }
  });
};

export { useListTree, useUserInfo, useChangePassword, useAgentCreate, useBalanceChange };
