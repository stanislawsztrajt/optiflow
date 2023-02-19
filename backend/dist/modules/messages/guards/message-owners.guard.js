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
exports.MessageOwnersGuard = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const helpers_1 = require("../../../utils/helpers");
let MessageOwnersGuard = class MessageOwnersGuard {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    canActivate(context) {
        const { headers, params } = context.switchToHttp().getRequest();
        const token = (0, helpers_1.parseJwt)(headers.authorization);
        const user = this.jwtService.verify(token, {
            secret: process.env.JWT_SECRET,
        });
        if (user._id !== (params === null || params === void 0 ? void 0 : params.userId) && user._id !== (params === null || params === void 0 ? void 0 : params.secondUserId)) {
            throw new common_1.HttpException('Unauthorized', common_1.HttpStatus.UNAUTHORIZED);
        }
        return true;
    }
};
MessageOwnersGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], MessageOwnersGuard);
exports.MessageOwnersGuard = MessageOwnersGuard;
//# sourceMappingURL=message-owners.guard.js.map