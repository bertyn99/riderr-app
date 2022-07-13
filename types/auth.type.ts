export type signIn = {
  email: string;
  password: string;
};

export type signUp = signIn & {
  firstName: string;
  lastName: string;
  tel: string;
};
