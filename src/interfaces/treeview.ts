import { TODO } from '@/interfaces';
export interface ListTreeResponse {
  title: string;
  key: string;
  children?: Array<ListTreeResponse>;
}

export interface UserInfoResponse {
  token: string;
  refreshToken: string;
}

export interface ToDoResponse {
  [key: string]: TODO;
}

export interface ChangePasswordPram {
  newPassword: string;
  newPasswordRetype: string;
  apiToken: string;
}

export interface AgentCreatePram {
  parent_agent: string;
  agent_name: string;
  created_agent: string;
  password: string;
  password_confirmation: string;
  commission_rate: number;
  role: number;
}

export interface BalanceChangePram {
  description: string;
  balance: number;
  uuid: string;
}
