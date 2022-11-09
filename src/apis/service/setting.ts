/* eslint-disable react-hooks/rules-of-hooks */
import requestApi from '../config';
import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import {
  IAccountInfoParams,
  IAccountInfoResponse,
  IAlertOnBalanceParams,
  IAlertOnBalanceResponse,
  IChangePasswordParams,
  IResponseApi,
  ISettingInfoResponse,
} from '@/interfaces';

export const useAlertOnBalance = () => {
  const url = '/alert-on-balance';
  return useMutation<IAlertOnBalanceResponse, IResponseApi, IAlertOnBalanceParams, number>(async (value) => {
    try {
      const { data } = await requestApi.put(url, value);
      return data;
    } catch (err) {
      const error = err as AxiosResponse;
      throw error.data;
    }
  });
};

export const useAccountInfo = () => {
  const url = '/account-info';
  return useMutation<IAccountInfoResponse, IResponseApi, IAccountInfoParams, number>(async (value) => {
    try {
      const { data } = await requestApi.put(url, value);
      return data;
    } catch (err) {
      const error = err as AxiosResponse;
      throw error.data;
    }
  });
};

export const useChangePassword = () => {
  const url = '/password-change';
  return useMutation<IAccountInfoResponse, IResponseApi, IChangePasswordParams, number>(async (value) => {
    try {
      const { data } = await requestApi.put(url, value);
      return data;
    } catch (err) {
      const error = err as AxiosResponse;
      throw error.data;
    }
  });
};

export const useSettingInfo = () => {
  const url = '/setting-info';
  return useQuery<ISettingInfoResponse, IResponseApi>({
    queryKey: ['settingInfo'],
    queryFn: async () => {
      try {
        const { data } = await requestApi.get(url);
        return data;
      } catch (err) {
        const error = err as AxiosResponse;
        throw error.data;
      }
    },
  });
};
