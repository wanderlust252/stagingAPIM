export interface Account {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  refreshToken: string;
}

export interface LogoutResponse {
  token: string;
  refreshToken: string;
}
