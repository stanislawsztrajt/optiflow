import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { schoolSymbol } from 'src/utils/constants/school';
import { parseObjectObjectId } from 'src/utils/helpers/mongodb';
import Librus from '../librus-auth/librus-client';
import { User } from '../users/schemas/users.schema';
import { UsersService } from '../users/users.service';
import { LoginDto } from './dto/login.dto';
import { IlibrusAccountInfo, IloginResponse } from './types';

const defaultResponseLibrusApi = {
  "student": {
      "nameSurname": "",
      "class": "",
      "index": "",
      "educator": ""
  },
  "account": {
      "nameSurname": "",
      "login": ""
  }
}

// TODO: Add better validation, if user has not equal info to past, change to present from api

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService, private jwtService: JwtService) {}

  async login (loginDto: LoginDto): Promise<IloginResponse> {
    const client = new Librus()

    await client.authorize(loginDto.login, loginDto.password)
    const info: IlibrusAccountInfo = await client.info.getAccountInfo()

    // if authorize is denied, api returns blank values
    if (JSON.stringify(info) === JSON.stringify(defaultResponseLibrusApi)) {
      throw new HttpException('Nieprawidłowy login i/lub hasło.', HttpStatus.UNAUTHORIZED)
    }

    const user = await this.usersService.findOne({ login: info.account.login })
    if (user) {
      return {
        user,
        jwt: this.jwtService.sign(parseObjectObjectId(user))
      }
    }

    // index 0 is name, index 1 is surname
    const nameSurname: string[] = info.student.nameSurname.split(' ')
    // index 0 is number of class, index 1 is digit, index 2 is school symbol
    const splitedStudentClass: string[] = info.student.class.split(' ')

    if (splitedStudentClass[2] !== schoolSymbol) {
      throw new HttpException('Nie jesteś ze szkoły Technikum im. św. Józefa w Kaliszu', HttpStatus.UNAUTHORIZED)
    }

    const name: string = nameSurname[0];
    const surname: string = nameSurname[1];
    const studentClass: string = splitedStudentClass[0]+splitedStudentClass[1]

    const newUser: User = {
      name,
      surname,
      class: studentClass,
      login: info.account.login
    }

    const createdUser: User = await this.usersService.craeteUser(newUser)

    return {
      user: createdUser,
      jwt: this.jwtService.sign(parseObjectObjectId(createdUser))
    }
  }
}
