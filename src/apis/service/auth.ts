/* eslint-disable react-hooks/rules-of-hooks */
import requestApi, { ResponseApi } from '../config';
import { useMutation } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { removeStorageItem, setStorageItem } from '@/utils/storage';
import * as CONSTANT from '../../contants';
interface Account {
  username: string;
  password: string;
}

interface LoginResponse {
  token: string;
  refreshToken: string;
}

interface LogoutResponse {
  token: string;
  refreshToken: string;
}
const useLogin = () => {
  const url = '/login';
  return useMutation<LoginResponse, ResponseApi, Account, number>(async (value) => {
    try {
      const { data } = await requestApi.post<LoginResponse>(url, value);
      setStorageItem(CONSTANT.ACCESS_TOKEN, data.token);
      setStorageItem(CONSTANT.REFRESH_TOKEN, data.refreshToken);
      return data;
    } catch (err) {
      const error = err as AxiosResponse;
      throw error.data;
    }
  });
};

const useLogout = () => {
  const url = '/logout';
  return useMutation<LogoutResponse, ResponseApi, object, number>(async () => {
    try {
      const { data } = await requestApi.post<LogoutResponse>(url);
      removeStorageItem(CONSTANT.ACCESS_TOKEN);
      removeStorageItem(CONSTANT.REFRESH_TOKEN);
      return data;
    } catch (err) {
      const error = err as AxiosResponse;
      throw error.data;
    }
  });
};

export { useLogin, useLogout };
