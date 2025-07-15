export interface RegisterUser {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
  age: string;
  theme: string;
  notifications: boolean;
  newsletter: boolean;

}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface UserData {
  name: string;
  email: string;
  password: string;
}

export interface LoginData {
  isLoggedIn: boolean;
  name: string;
  email: string;
  loginTime: string;
}
