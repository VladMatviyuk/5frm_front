export type IUser = {
  readonly username: string;
  readonly password: string;
};

export type LogintResponse = {
  readonly accessToken: string;
};
