import { APP_CONFIG } from '@/utils/env';
import axios, { AxiosResponse, AxiosError } from 'axios';
import * as CONSTANT from '@/interfaces/constants';
import { getStorageItem, setStorageItem } from '@/utils/storage';
import { IResponseApi, TODO } from '@/interfaces';

class RequestApi {
  private static instance: RequestApi;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  static getInstance(url?: string) {
    if (RequestApi.instance) {
      return RequestApi.instance;
    }
    axios.defaults.baseURL = url;
    axios.defaults.headers.common = {
      'Content-Type': 'application/json',
    };

    axios.interceptors.request.use((config) => {
      if (config && config.headers) {
        const token = getStorageItem(CONSTANT.ACCESS_TOKEN);
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      }

      return config;
    });

    axios.interceptors.response.use(
      // Do something with response data
      (response: AxiosResponse) => response.data,
      // Do something with response error
      async (error: AxiosError) => {
        const { response } = error;

        if (axios.isCancel(error)) {
          console.debug('Request canceled', error.message);
        }
        if (response?.status === 401) {
          if (response.statusText === 'Unauthorized') {
            const refreshToken = getStorageItem(CONSTANT.REFRESH_TOKEN);
            const phoneCode = getStorageItem('phoneCode');
            const token = getStorageItem(CONSTANT.ACCESS_TOKEN);
            const path = `${process.env.REACT_APP_BASE_URL_ACCOUNT}Token/RefreshAdmin`;
            const data = {
              refreshTokenStr: refreshToken,
              oldTokenStr: token,
              country: {
                phoneCode,
              },
            };
            try {
              const res = await axios.post(path, data);
              setStorageItem(CONSTANT.ACCESS_TOKEN, res.data.data.token);
              setStorageItem(CONSTANT.REFRESH_TOKEN, res.data.data.refreshToken);
              axios.defaults.headers.common.Authorization = `Bearer ${res.data.data.token}`;
            } catch (_error) {
              console.error('error', _error);
              window.location.href = '/login';
            }
          }
        }
        return Promise.reject(error.response);
      },
    );
    return new RequestApi();
  }

  get = <T = TODO>(url: string, params?: object): Promise<IResponseApi<T>> => {
    return axios.get(url, { params });
  };

  post = <T = TODO>(url: string, body?: object): Promise<IResponseApi<T>> => {
    return axios.post(url, body);
  };

  put = <T = TODO>(url: string, body?: object): Promise<IResponseApi<T>> => {
    return axios.put(url, body);
  };

  patch = <T = TODO>(url: string, body?: object): Promise<IResponseApi<T>> => {
    return axios.patch(url, body);
  };

  delete = <T = TODO>(url: string, body?: object): Promise<IResponseApi<T>> => {
    return axios.delete(url, { data: body });
  };
}

export default RequestApi.getInstance(APP_CONFIG.apiUrl);
