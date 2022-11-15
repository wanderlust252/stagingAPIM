export interface Account {
  username: string;
  password: string;
}

export interface LoginResponse {
  jwtToken: string;
  refreshToken: string;
}

export interface LogoutResponse {
  success: string;
  code: string;
  message: string;
  data: null;
}
