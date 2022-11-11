/* eslint-disable @typescript-eslint/no-explicit-any */
export * from './tree-view';
export * from './auth';
export * from './setting';

export type TODO = any;

export interface IResponseApi<T = TODO> {
  code: string;
  message: string;
  data: T;
}

export interface PaginationParams {
  page: number;
  limit: number;
  search?: string;
}

export interface ObjAny {
  [props: string]: any;
}
