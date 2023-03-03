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
exports.ChatGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const messages_service_1 = require("../modules/messages/messages.service");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
let ChatGateway = class ChatGateway {
    constructor(messagesService) {
        this.messagesService = messagesService;
        this.usersIds = [];
    }
    onModuleInit() {
        this.server.on('connection', async (socket) => {
            let currentUser = { id: '', userId: '', room: '' };
            socket.on('beOnline', ({ userId }) => {
                currentUser = Object.assign(Object.assign({}, currentUser), { id: socket.id, userId });
                const isUserIdAlreadyExist = this.usersIds.some(userId => userId === currentUser.userId);
                if (isUserIdAlreadyExist)
                    return;
                this.usersIds.push(userId);
                console.log('[SOCKET] user joined: ', currentUser);
            });
            socket.on('joinRoom', ({ room }) => {
                currentUser = Object.assign(Object.assign({}, currentUser), { room });
                socket.join(room);
                console.log('[SOCKET] user joined to room: ', currentUser);
            });
            socket.on('sendMessage', (message) => {
                this.messagesService.create(Object.assign(Object.assign({}, message), { userId: currentUser.userId }));
                const emitedMessage = Object.assign(Object.assign({}, message), { userId: currentUser.userId, createdAt: new Date(), updatedAt: new Date() });
                this.server.to(currentUser.room).emit("message", emitedMessage);
                console.log('[SOCKET] POST message');
            });
            socket.on('displayNotifications', () => {
                socket.emit('displayNotifications');
            });
            socket.on('hideNotifications', () => {
                socket.emit('hideNotifications');
            });
            socket.on('onlineUsersIds', () => {
                this.server.to(currentUser.id).emit('getOnlineUsersIds', this.usersIds);
                console.log('[SOCKET] GET online usersIds');
            });
            socket.on('disconnect', () => {
                this.usersIds = this.usersIds.filter(userId => userId !== currentUser.userId);
                console.log('DISCONNECT ', currentUser);
            });
        });
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], ChatGateway.prototype, "server", void 0);
ChatGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({
        transports: ['websocket', 'polling'],
        cors: {
            origin: process.env.CLIENT_URL,
            allowedHeaders: "*",
            credentials: true,
            methods: ['GET', 'POST']
        },
    }),
    __metadata("design:paramtypes", [messages_service_1.MessagesService])
], ChatGateway);
exports.ChatGateway = ChatGateway;
//# sourceMappingURL=chat.gateway.js.map