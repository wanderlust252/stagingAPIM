import { TODO } from '@/interfaces';

export interface IAlertOnBalanceParams {
  [key: string]: TODO;
}

export interface IAccountInfoParams {
  [key: string]: TODO;
}

export interface IAlertOnBalanceResponse {
  [key: string]: TODO;
}

export interface IAccountInfoResponse {
  [key: string]: TODO;
}

export interface ISettingInfoResponse {
  [key: string]: TODO;
}

export interface IChangePasswordParams {
  password: string;
  uuid: string;
  passwordConfirmation: string;
}
