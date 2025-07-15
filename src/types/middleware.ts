export interface Middleware {
  isAuthenticated: boolean;
  user: AuthUser | null;
  loading: boolean;
  logout: () => void;
  checkAuthStatus: () => void;
  clearAuthData: () => void;
}

export interface AuthUser {
    name: string;
    email: string;
    loginTime: string;
}