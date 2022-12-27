import { User } from 'src/modules/users/schemas/users.schema';

export interface IlibrusAccountInfo {
  student: {
    nameSurname: string;
    class: string;
    index: string;
    educator: string;
  };
  account: {
    nameSurname: string;
    login: string;
  };
}

export interface IloginResponse {
  user: User;
  jwt: string;
}
