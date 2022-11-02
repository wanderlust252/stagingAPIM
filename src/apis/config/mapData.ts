import { AxiosError, AxiosResponse } from 'axios';
import DataLocal from '../../contants/dataLocal';
import HttpStatus from '../../contants/httpStatus';

type TODO = any;

export function mapData(res: AxiosResponse<TODO>) {
  return res.data;
}

export function mapError(err: AxiosError<TODO>) {
  if (err && err.response && err.response.status === HttpStatus.UN_AUTHOZIZATION) {
    localStorage.removeItem(DataLocal.TOKEN_NAME);
  }
  throw err;
}
