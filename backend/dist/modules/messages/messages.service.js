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
exports.MessagesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const helpers_1 = require("../../utils/helpers");
const users_service_1 = require("../users/users.service");
const messages_schema_1 = require("./schemas/messages.schema");
let MessagesService = class MessagesService {
    constructor(messageModel, usersService) {
        this.messageModel = messageModel;
        this.usersService = usersService;
    }
    async findMessagesChat(userId, secondUserId) {
        const userMessages = await this.messageModel.find({ userId, secondUserId });
        const secondUserMessages = await this.messageModel.find({ userId: secondUserId, secondUserId: userId });
        return [...secondUserMessages, ...userMessages];
    }
    async findChats(userId) {
        const userOwner = await this.messageModel.find({ userId }).exec();
        const otherUserOwner = await this.messageModel.find({ secondUserId: userId }).exec();
        const messages = [...userOwner, ...otherUserOwner];
        const groupedMessages = (0, helpers_1.groupBy)(messages, (message) => message.secondUserId);
        const groupedMessagesEntries = Object.entries(groupedMessages);
        const chats = await Promise.all(groupedMessagesEntries
            .map(async ([secondUserId, messages]) => {
            const latestMessage = (0, helpers_1.findLatestMessage)(messages);
            const user = await this.usersService.findOne({ _id: secondUserId });
            return {
                latestMessage,
                user
            };
        }));
        return chats;
    }
    async create(createMessageDto) {
        const createdBook = new this.messageModel(createMessageDto);
        return createdBook.save();
    }
};
MessagesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(messages_schema_1.Message.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        users_service_1.UsersService])
], MessagesService);
exports.MessagesService = MessagesService;
//# sourceMappingURL=messages.service.js.map