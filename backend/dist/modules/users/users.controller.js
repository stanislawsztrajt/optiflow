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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const private_lessons_service_1 = require("../private-lessons/private-lessons.service");
const books_service_1 = require("../books/books.service");
const events_service_1 = require("../events/events.service");
const lost_items_service_1 = require("../lost-items/lost-items.service");
const mongoose_1 = require("mongoose");
let UsersController = class UsersController {
    constructor(usersService, booksService, eventsService, lostItemsService, privateLessonsService) {
        this.usersService = usersService;
        this.booksService = booksService;
        this.eventsService = eventsService;
        this.lostItemsService = lostItemsService;
        this.privateLessonsService = privateLessonsService;
    }
    findAll() {
        return this.usersService.findAll({});
    }
    findOneById(_id) {
        return this.usersService.findOne({ _id: new mongoose_1.Types.ObjectId(_id) });
    }
    async findUserAll(_id) {
        const books = await this.booksService.findAll({ userId: _id });
        const events = await this.eventsService.findAll({ userId: _id });
        const lostItems = await this.lostItemsService.findAll({ userId: _id });
        const privateLessons = await this.privateLessonsService.findAll({ userId: _id });
        return {
            books,
            events,
            lostItems,
            privateLessons
        };
    }
    async findUserAllCount(_id) {
        const books = (await this.booksService.findAll({ userId: _id })).length;
        const events = (await this.eventsService.findAll({ userId: _id })).length;
        const lostItems = (await this.lostItemsService.findAll({ userId: _id })).length;
        const privateLessons = (await this.privateLessonsService.findAll({ userId: _id })).length;
        return {
            books,
            events,
            lostItems,
            privateLessons
        };
    }
    findUserBooks(_id) {
        return this.booksService.findAll({ userId: _id });
    }
    findUserEvents(_id) {
        return this.eventsService.findAll({ userId: _id });
    }
    findUserLostItems(_id) {
        return this.lostItemsService.findAll({ userId: _id });
    }
    findUserPrivateLessons(_id) {
        return this.privateLessonsService.findAll({ userId: _id });
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':_id'),
    __param(0, (0, common_1.Param)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findOneById", null);
__decorate([
    (0, common_1.Get)(':_id/all'),
    __param(0, (0, common_1.Param)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findUserAll", null);
__decorate([
    (0, common_1.Get)(':_id/all/count'),
    __param(0, (0, common_1.Param)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findUserAllCount", null);
__decorate([
    (0, common_1.Get)(':_id/books'),
    __param(0, (0, common_1.Param)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findUserBooks", null);
__decorate([
    (0, common_1.Get)(':_id/events'),
    __param(0, (0, common_1.Param)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findUserEvents", null);
__decorate([
    (0, common_1.Get)(':_id/lost-items'),
    __param(0, (0, common_1.Param)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findUserLostItems", null);
__decorate([
    (0, common_1.Get)(':_id/private-lessons'),
    __param(0, (0, common_1.Param)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findUserPrivateLessons", null);
UsersController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        books_service_1.BooksService,
        events_service_1.EventsService,
        lost_items_service_1.LostItemsService,
        private_lessons_service_1.PrivateLessonsService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map