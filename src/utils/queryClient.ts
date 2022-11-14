import { notifyError } from './notification';
import { IResponseApi } from '@/interfaces';
import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      onError: (err) => {
        const error = err as IResponseApi;
        notifyError(error.message);
      },
    },
    queries: {
      onError: (err) => {
        const error = err as IResponseApi;
        notifyError(error.message);
      },
    },
  },
});
