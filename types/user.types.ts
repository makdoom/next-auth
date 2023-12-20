export type User = {
  email: string;
  username?: string;
  password: string;
  confirmPassword?: string;
};

export type RegisterErrorType = {
  username?: string;
  email?: string;
  password?: string;
};

export type LoginErrorType = {
  email?: string;
  password?: string;
};
