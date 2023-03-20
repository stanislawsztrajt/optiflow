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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesController = void 0;
const common_1 = require("@nestjs/common");
const messages_service_1 = require("./messages.service");
const decorators_1 = require("@nestjs/common/decorators");
const message_owners_guard_1 = require("./guards/message-owners.guard");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
let MessagesController = class MessagesController {
    constructor(messagesService) {
        this.messagesService = messagesService;
    }
    async findChats(userId) {
        return await this.messagesService.findChats(userId);
    }
    async findMessagesChat(userId, secondUserId) {
        return await this.messagesService.findMessagesChat(userId, secondUserId);
    }
};
__decorate([
    (0, decorators_1.UseGuards)(message_owners_guard_1.MessageOwnersGuard, jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(':userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MessagesController.prototype, "findChats", null);
__decorate([
    (0, decorators_1.UseGuards)(message_owners_guard_1.MessageOwnersGuard, jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(':userId/:secondUserId'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Param)('secondUserId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], MessagesController.prototype, "findMessagesChat", null);
MessagesController = __decorate([
    (0, common_1.Controller)('messages'),
    __metadata("design:paramtypes", [messages_service_1.MessagesService])
], MessagesController);
exports.MessagesController = MessagesController;
//# sourceMappingURL=messages.controller.js.map