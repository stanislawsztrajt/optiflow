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
exports.CreateLostItemDto = void 0;
const class_validator_1 = require("class-validator");
const create_book_dto_1 = require("../../books/dto/create-book.dto");
const lost_items_type_1 = require("../types/lost-items.type");
class CreateLostItemDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(5),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], CreateLostItemDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(500),
    (0, class_validator_1.MinLength)(5),
    __metadata("design:type", String)
], CreateLostItemDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], CreateLostItemDto.prototype, "foundLocation", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Date)
], CreateLostItemDto.prototype, "date", void 0);
__decorate([
    (0, class_validator_1.IsArray)({
        message: 'images must be an array',
    }),
    (0, class_validator_1.ArrayMaxSize)(3),
    (0, class_validator_1.Validate)(create_book_dto_1.MaxLengthOfArrayStrings, {
        message: 'Max length of links is 1000 chars'
    }),
    __metadata("design:type", Array)
], CreateLostItemDto.prototype, "images", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(lost_items_type_1.LostItemFoundEnum),
    __metadata("design:type", String)
], CreateLostItemDto.prototype, "type", void 0);
exports.CreateLostItemDto = CreateLostItemDto;
//# sourceMappingURL=create-lost-item.dto.js.map