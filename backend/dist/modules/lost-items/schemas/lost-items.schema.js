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
exports.LostItemSchema = exports.LostItem = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let LostItem = class LostItem {
};
__decorate([
    (0, mongoose_1.Prop)({ maxlength: 100 }),
    __metadata("design:type", String)
], LostItem.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ maxlength: 500 }),
    __metadata("design:type", String)
], LostItem.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ maxlength: 100 }),
    __metadata("design:type", String)
], LostItem.prototype, "foundLocation", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], LostItem.prototype, "date", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], LostItem.prototype, "images", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], LostItem.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], LostItem.prototype, "userId", void 0);
LostItem = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], LostItem);
exports.LostItem = LostItem;
exports.LostItemSchema = mongoose_1.SchemaFactory.createForClass(LostItem);
//# sourceMappingURL=lost-items.schema.js.map