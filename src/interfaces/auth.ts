export interface Account {
  agent_id: string;
  password: string;
}

export interface LoginResponse {
  success: string;
  code: string;
  message: string;
  data: {
    token: string;
    expired_at: string;
  };
}

export interface LogoutResponse {
  success: string;
  code: string;
  message: string;
  data: null;
}
