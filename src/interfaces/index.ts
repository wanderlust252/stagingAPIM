/* eslint-disable @typescript-eslint/no-explicit-any */
export * from './treeview';
export * from './auth';

export type TODO = any;

export interface ResponseApi<T = TODO> {
  code: string;
  message: string;
  data: T;
}

export interface PaginationParams {
  page: number;
  limit: number;
  search?: string;
}
