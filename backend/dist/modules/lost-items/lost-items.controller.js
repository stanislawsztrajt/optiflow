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
exports.LostItemsController = void 0;
const common_1 = require("@nestjs/common");
const lost_items_service_1 = require("./lost-items.service");
const create_lost_item_dto_1 = require("./dto/create-lost-item.dto");
const update_lost_item_dto_1 = require("./dto/update-lost-item.dto");
const owner_guard_1 = require("../../core/guards/owner.guard");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const throttler_1 = require("@nestjs/throttler");
let LostItemsController = class LostItemsController {
    constructor(lostItemsService) {
        this.lostItemsService = lostItemsService;
    }
    create(createLostItemDto) {
        return this.lostItemsService.create(createLostItemDto);
    }
    findAll() {
        return this.lostItemsService.findAll({});
    }
    findOne(_id) {
        return this.lostItemsService.findOne({ _id });
    }
    update(id, updateLostItemDto) {
        return this.lostItemsService.update(id, updateLostItemDto);
    }
    remove(id) {
        return this.lostItemsService.remove(id);
    }
};
__decorate([
    (0, throttler_1.Throttle)(6, 60),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_lost_item_dto_1.CreateLostItemDto]),
    __metadata("design:returntype", void 0)
], LostItemsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LostItemsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':_id'),
    __param(0, (0, common_1.Param)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LostItemsController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, owner_guard_1.OwnerGuard),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_lost_item_dto_1.UpdateLostItemDto]),
    __metadata("design:returntype", void 0)
], LostItemsController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, owner_guard_1.OwnerGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LostItemsController.prototype, "remove", null);
LostItemsController = __decorate([
    (0, common_1.Controller)('lost-items'),
    __metadata("design:paramtypes", [lost_items_service_1.LostItemsService])
], LostItemsController);
exports.LostItemsController = LostItemsController;
//# sourceMappingURL=lost-items.controller.js.map