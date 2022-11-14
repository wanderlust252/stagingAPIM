import encode from '@/utils/encode';
import { LANGUAGE } from '@/interfaces/enum';
export const REFRESH_TOKEN = encode('refreshToken', 4);
export const ACCESS_TOKEN = encode('accessToken', 4);
export const EXPIRED_AT = 'expired_at'

export const backgroundImg = [
  'linear-gradient(180deg, #ff9634, #e76f00)',
  'linear-gradient(180deg,#ffe133,#e6c300)',
  'linear-gradient(180deg,#05f353,#03a839)',
  'linear-gradient(180deg,#01fdfd,#01b1b1)',
  'linear-gradient(180deg,#d497fe,#b54cfd)',
  'linear-gradient(180deg,#9c9c9c,#757575)',
  ' linear-gradient(180deg,#4b92f2,#1168e0)',
  'linear-gradient(180deg,#ff339a,#e60074)',
];

export const validateMessage = {
  [LANGUAGE.KR]: {
    required: '아직 입력되지 않음',
  },
  [LANGUAGE.EN]: {
    required: 'is required',
  },
};
