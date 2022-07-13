export type ISignIn = {
  email: string;
  password: string;
};

export type ISignUp = ISignIn & {
  firstName: string;
  lastName: string;
  tel: string;
};
