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
exports.CreatePrivateLessonDto = void 0;
const class_validator_1 = require("class-validator");
const private_lessons_type_1 = require("../types/private-lessons.type");
class CreatePrivateLessonDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    (0, class_validator_1.MinLength)(5),
    __metadata("design:type", String)
], CreatePrivateLessonDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(500),
    (0, class_validator_1.MinLength)(5),
    __metadata("design:type", String)
], CreatePrivateLessonDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(private_lessons_type_1.PrivateLessonsCategoryEnum),
    __metadata("design:type", String)
], CreatePrivateLessonDto.prototype, "category", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(private_lessons_type_1.PrivateLessonsOfferTypeEnum),
    __metadata("design:type", String)
], CreatePrivateLessonDto.prototype, "offerType", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(10000000),
    __metadata("design:type", Number)
], CreatePrivateLessonDto.prototype, "price", void 0);
exports.CreatePrivateLessonDto = CreatePrivateLessonDto;
//# sourceMappingURL=create-private-lesson.dto.js.map