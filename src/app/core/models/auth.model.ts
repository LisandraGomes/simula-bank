export interface LoginRequest {
  login: string;
  password: string;
  tokenRefreshOrAccess: string;
}

export interface LoginResponse {
  token: string;
  usuario: string;
  dataExpiracao: string;
  roles: string[];
}