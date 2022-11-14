/* eslint-disable react-hooks/rules-of-hooks */
import requestApi from '../config';
import { useMutation } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { removeStorageItem, setStorageItem } from '@/utils/storage';
import * as CONSTANT from '@/interfaces/constants';
import { Account, LoginResponse, LogoutResponse, IResponseApi } from '@/interfaces';

const useLogin = () => {
  const url = '/auth-service/login';
  return useMutation<LoginResponse, IResponseApi, Account, number>(async (value) => {
    try {
      const { data } = await requestApi.post<LoginResponse>(url, value);
      setStorageItem(CONSTANT.ACCESS_TOKEN, data?.data?.token);
      setStorageItem(CONSTANT.EXPIRED_AT, data?.data?.expired_at);
      return data;
    } catch (err) {
      const error = err as AxiosResponse;
      throw error.data;
    }
  });
};

const useLogout = () => {
  const url = '/auth-service/logout';
  return useMutation<LogoutResponse, IResponseApi, object, number>(async () => {
    try {
      const { data } = await requestApi.post<LogoutResponse>(url);
      removeStorageItem(CONSTANT.ACCESS_TOKEN);
      removeStorageItem(CONSTANT.EXPIRED_AT);
      return data;
    } catch (err) {
      const error = err as AxiosResponse;
      throw error.data;
    }
  });
};

export { useLogin, useLogout };
