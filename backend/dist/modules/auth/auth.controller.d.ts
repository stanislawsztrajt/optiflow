import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginDto: LoginDto): Promise<import("./types").IloginResponse>;
    devLogin({ login }: {
        login: string;
    }): Promise<import("./types").IloginResponse>;
}
