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
exports.PrivateLessonsController = void 0;
const common_1 = require("@nestjs/common");
const private_lessons_service_1 = require("./private-lessons.service");
const create_private_lesson_dto_1 = require("./dto/create-private-lesson.dto");
const update_private_lesson_dto_1 = require("./dto/update-private-lesson.dto");
const owner_guard_1 = require("../../core/guards/owner.guard");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const throttler_1 = require("@nestjs/throttler");
let PrivateLessonsController = class PrivateLessonsController {
    constructor(privateLessonsService) {
        this.privateLessonsService = privateLessonsService;
    }
    create(createPrivateLessonDto) {
        return this.privateLessonsService.create(createPrivateLessonDto);
    }
    findAll() {
        return this.privateLessonsService.findAll({});
    }
    findOne(_id) {
        return this.privateLessonsService.findOne({ _id });
    }
    update(id, updatePrivateLessonDto) {
        return this.privateLessonsService.update(id, updatePrivateLessonDto);
    }
    remove(id) {
        return this.privateLessonsService.remove(id);
    }
};
__decorate([
    (0, throttler_1.Throttle)(6, 60),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_private_lesson_dto_1.CreatePrivateLessonDto]),
    __metadata("design:returntype", void 0)
], PrivateLessonsController.prototype, "create", null);
__decorate([
    (0, throttler_1.Throttle)(1, 10),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PrivateLessonsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':_id'),
    __param(0, (0, common_1.Param)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PrivateLessonsController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, owner_guard_1.OwnerGuard),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_private_lesson_dto_1.UpdatePrivateLessonDto]),
    __metadata("design:returntype", void 0)
], PrivateLessonsController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, owner_guard_1.OwnerGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PrivateLessonsController.prototype, "remove", null);
PrivateLessonsController = __decorate([
    (0, common_1.Controller)('private-lessons'),
    __metadata("design:paramtypes", [private_lessons_service_1.PrivateLessonsService])
], PrivateLessonsController);
exports.PrivateLessonsController = PrivateLessonsController;
//# sourceMappingURL=private-lessons.controller.js.map