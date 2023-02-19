"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const school_1 = require("../../utils/constants/school");
const mongodb_1 = require("../../utils/helpers/mongodb");
const librus_client_1 = require("../librus-auth/librus-client");
const users_service_1 = require("../users/users.service");
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
let AuthService = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async devLogin(login) {
        const user = await this.usersService.findOne({ login });
        return {
            user,
            jwt: this.jwtService.sign((0, mongodb_1.parseObjectObjectId)(user)),
        };
    }
    async login(loginDto) {
        const client = new librus_client_1.default();
        await client.authorize(loginDto.login, loginDto.password);
        const info = await client.info.getAccountInfo();
        if (JSON.stringify(info) === JSON.stringify(defaultResponseLibrusApi)) {
            throw new common_1.HttpException('Nieprawidłowy login i/lub hasło.', common_1.HttpStatus.UNAUTHORIZED);
        }
        if (info.student.class.split(' ')[2] !== school_1.schoolSymbol) {
            throw new common_1.HttpException('Nie jesteś ze szkoły Technikum im. św. Józefa w Kaliszu', common_1.HttpStatus.UNAUTHORIZED);
        }
        const nameSurname = info.student.nameSurname.split(' ');
        const splitedStudentClass = info.student.class.split(' ');
        let name = nameSurname[0];
        if (!info.account.login.includes('u')) {
            name = `Rodzic ${nameSurname[0]}`;
        }
        if (!info.student) {
            name = `Nauczyciel ${nameSurname[0]}`;
        }
        const surname = nameSurname[1];
        const studentClass = info.student ? splitedStudentClass[0] + splitedStudentClass[1] : '';
        const user = await this.usersService.findOne({ login: info.account.login });
        if (user) {
            if (user.class !== studentClass && info.student) {
                user.class = studentClass;
                await this.usersService.update(user._id, user);
            }
            return {
                user,
                jwt: this.jwtService.sign((0, mongodb_1.parseObjectObjectId)(user)),
            };
        }
        const newUser = {
            name,
            surname,
            class: studentClass,
            login: info.account.login,
        };
        const createdUser = await this.usersService.craete(newUser);
        return {
            user: createdUser,
            jwt: this.jwtService.sign((0, mongodb_1.parseObjectObjectId)(createdUser)),
        };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService, jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map