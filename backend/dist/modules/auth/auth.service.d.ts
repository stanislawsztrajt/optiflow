import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { LoginDto } from './dto/login.dto';
import { IloginResponse } from './types';
export declare class AuthService {
    private readonly usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    devLogin(login: string): Promise<IloginResponse>;
    login(loginDto: LoginDto): Promise<IloginResponse>;
}
