import { APP_CONFIG } from '@/utils/env';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, Canceler } from 'axios';
import * as CONSTANT from '../../contants';
import { getStorageItem, setStorageItem } from '@/utils/storage';
import { mapData, mapError } from './mapData';

const { CancelToken } = axios;

interface PromiseWithCancel<R> extends Promise<R> {
  cancel?: () => void;
}

class Request {
  api: AxiosInstance;

  constructor(props: any) {
    console.log('aaa');
    this.api = axios.create({
      // baseURL: process.env.REACT_APP_BASE_URL,
      baseURL: props?.url,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    this.api.interceptors.request.use((config) => {
      if (config && config.headers) {
        const token = getStorageItem(CONSTANT.ACCESS_TOKEN);
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      }
      return config;
    });

    this.api.interceptors.response.use(
      (response) =>
        // Do something with response data
        response,
      async (error) => {
        const { response } = error;
        // Do something with response error
        if (axios.isCancel(error)) {
          console.debug('Request canceled', error.message);
        }
        if (response?.status === 401) {
          if (response.statusText === 'Unauthorized') {
            const refreshToken = getStorageItem(CONSTANT.REFRESH_TOKEN);
            const phoneCode = getStorageItem('phoneCode');
            const token = getStorageItem(CONSTANT.ACCESS_TOKEN);
            const url = `${process.env.REACT_APP_BASE_URL_ACCOUNT}Token/RefreshAdmin`;
            const data = {
              refreshTokenStr: refreshToken,
              oldTokenStr: token,
              country: {
                phoneCode,
              },
            };
            try {
              const res = await axios.post(url, data);
              setStorageItem(CONSTANT.ACCESS_TOKEN, res.data.data.token);
              setStorageItem(CONSTANT.REFRESH_TOKEN, res.data.data.refreshToken);
            } catch (_error) {
              console.log('error', _error);
              window.location.href = '/login';
            }
          }
        }
        return window.Promise.reject(error);
      },
    );
  }

  setToken = (token: string) => {
    this.api.defaults.headers.common.Authorization = `Bearer ${token}`;
  };

  get = <T = any, R = AxiosResponse<T>>(url: string, config: AxiosRequestConfig = {}): PromiseWithCancel<R> => {
    let cancel: Canceler;
    const apiConfig = {
      params: {
        ...config.params,
      },
      ...config,
      cancelToken: new CancelToken((c) => {
        cancel = c;
      }),
    };
    const request: PromiseWithCancel<R> = this.api.get(url, apiConfig).then(mapData).catch(mapError);

    request.cancel = () => cancel();
    return request;
  };

  post = <T = any, R = AxiosResponse<T>>(url: string, body?: any, config: AxiosRequestConfig = {}) => {
    let cancel: Canceler;
    const apiConfig = {
      params: {
        ...config.params,
      },
      ...config,
      cancelToken: new CancelToken((c) => {
        cancel = c;
      }),
    };
    const request: PromiseWithCancel<R> = this.api.post(url, body, apiConfig).then(mapData).catch(mapError);
    request.cancel = () => cancel();
    return request;
  };

  put = <T = any, R = AxiosResponse<T>>(url: string, body?: any, config: AxiosRequestConfig = {}) => {
    let cancel: Canceler;
    const apiConfig = {
      params: {
        ...config.params,
      },
      ...config,
      cancelToken: new CancelToken((c) => {
        cancel = c;
      }),
    };
    const request: PromiseWithCancel<R> = this.api.put(url, body, apiConfig).then(mapData).catch(mapError);
    request.cancel = () => cancel();
    return request;
  };

  patch = <T = any, R = AxiosResponse<T>>(url: string, body?: any, config: AxiosRequestConfig = {}) => {
    let cancel: Canceler;
    const apiConfig = {
      params: {
        ...config.params,
      },
      ...config,
      cancelToken: new CancelToken((c) => {
        cancel = c;
      }),
    };
    const request: PromiseWithCancel<R> = this.api.patch(url, body, apiConfig).then(mapData).catch(mapError);
    request.cancel = () => cancel();
    return request;
  };

  delete = <T = any, R = AxiosResponse<T>>(url: string, config: AxiosRequestConfig = {}): PromiseWithCancel<R> => {
    let cancel: Canceler;
    const apiConfig = {
      params: {
        ...config.params,
      },
      ...config,
      cancelToken: new CancelToken((c) => {
        cancel = c;
      }),
    };
    const request: PromiseWithCancel<R> = this.api.delete(url, apiConfig).then(mapData).catch(mapError);
    request.cancel = () => cancel();
    return request;
  };
}

const requestApi = new Request({ url: APP_CONFIG.apiUrl });

export default requestApi;
