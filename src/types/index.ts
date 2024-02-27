export interface AuthInput {
  email: string;
  password: string;
}

export interface SignUpData {
  signUp: {
    access_token: string | null;
    message: string | null;
  };
}

export interface LoggedInData {
  login: {
    access_token: string | null;
    message: string | null;
  };
}
