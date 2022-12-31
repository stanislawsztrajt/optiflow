import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { schoolSymbol } from 'src/utils/constants/school';
import { parseObjectObjectId } from 'src/utils/helpers/mongodb';
import Librus from '../librus-auth/librus-client';
import { User } from '../users/schemas/users.schema';
import { UsersService } from '../users/users.service';
import { LoginDto } from './dto/login.dto';
import { IlibrusAccountInfo, IloginResponse } from './types';

const defaultResponseLibrusApi = {
  student: {
    nameSurname: '',
    class: '',
    index: '',
    educator: '',
  },
  account: {
    nameSurname: '',
    login: '',
  },
};

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService, private jwtService: JwtService) {}

  async devLogin(login: string): Promise<IloginResponse> {
    const user = await this.usersService.findOne({ login });
    return {
      user,
      jwt: this.jwtService.sign(parseObjectObjectId(user)),
    };
  }

  async login(loginDto: LoginDto): Promise<IloginResponse> {
    const client = new Librus();

    await client.authorize(loginDto.login, loginDto.password);
    const info: IlibrusAccountInfo = await client.info.getAccountInfo();

    // if authorize is denied, api returns blank values
    if (JSON.stringify(info) === JSON.stringify(defaultResponseLibrusApi)) {
      throw new HttpException('Nieprawidłowy login i/lub hasło.', HttpStatus.UNAUTHORIZED);
    }

    if (info.student.class.split(' ')[2] !== schoolSymbol) {
      throw new HttpException(
        'Nie jesteś ze szkoły Technikum im. św. Józefa w Kaliszu',
        HttpStatus.UNAUTHORIZED,
      );
    }

    const user = await this.usersService.findOne({ login: info.account.login });
    if (user) {
      // updates user's class, if user changed class
      if (user.class !== info.student.class) {
        user.class = info.student.class;
        await this.usersService.update(user._id, user);
      }

      return {
        user,
        jwt: this.jwtService.sign(parseObjectObjectId(user)),
      };
    }

    // index 0 is name, index 1 is surname
    const nameSurname: string[] = info.student.nameSurname.split(' ');
    // index 0 is number of class, index 1 is digit, index 2 is school symbol
    const splitedStudentClass: string[] = info.student.class.split(' ');

    const name: string = nameSurname[0];
    const surname: string = nameSurname[1];
    const studentClass: string = splitedStudentClass[0] + splitedStudentClass[1];

    const newUser: User = {
      name,
      surname,
      class: studentClass,
      login: info.account.login,
    };

    const createdUser: User = await this.usersService.craete(newUser);

    return {
      user: createdUser,
      jwt: this.jwtService.sign(parseObjectObjectId(createdUser)),
    };
  }
}
