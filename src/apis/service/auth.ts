/* eslint-disable react-hooks/rules-of-hooks */
import requestApi from '../config';
import { useMutation } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { removeStorageItem, setStorageItem } from '@/utils/storage';
import * as CONSTANT from '@/interfaces/constants';
import { Account, LoginResponse, LogoutResponse, IResponseApi } from '@/interfaces';
import { notifySuccess } from '@/utils/notification';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
  const url = 'auth-service/authentication/login';
  const navidation = useNavigate();
  return useMutation<LoginResponse, IResponseApi, Account, number>(
    async (value) => {
      try {
        const { data } = await requestApi.post<LoginResponse>(url, value);
        setStorageItem(CONSTANT.ACCESS_TOKEN, data?.jwtToken);
        setStorageItem(CONSTANT.REFRESH_TOKEN, data?.refreshToken);

        return data;
      } catch (err) {
        const error = err as AxiosResponse;
        throw error.data;
      }
    },
    {
      onSuccess: (data) => {
        data && notifySuccess('Login success!');
        navidation('/dashboard');
      },
    },
  );
};

const useLogout = () => {
  const url = '/auth-service/logout';
  const navidation = useNavigate();
  return useMutation<any, IResponseApi, object, number>(
    async () => {
      // const { data } = await requestApi.post<LogoutResponse>(url);
      removeStorageItem(CONSTANT.ACCESS_TOKEN);
      removeStorageItem(CONSTANT.REFRESH_TOKEN);
      return [];
    },
    { onSuccess: () => navidation('/login') },
  );
};
export { useLogin, useLogout };
