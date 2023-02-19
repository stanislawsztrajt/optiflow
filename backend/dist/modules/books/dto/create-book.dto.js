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
exports.CreateBookDto = exports.MaxLengthOfArrayStrings = void 0;
const class_validator_1 = require("class-validator");
const books_type_1 = require("../types/books.type");
let MaxLengthOfArrayStrings = class MaxLengthOfArrayStrings {
    async validate(images) {
        if (!images)
            return true;
        return images.every(image => image.length < 1000);
    }
};
MaxLengthOfArrayStrings = __decorate([
    (0, class_validator_1.ValidatorConstraint)()
], MaxLengthOfArrayStrings);
exports.MaxLengthOfArrayStrings = MaxLengthOfArrayStrings;
class CreateBookDto {
}
__decorate([
    (0, class_validator_1.IsString)({
        message: 'title must be a string',
    }),
    (0, class_validator_1.MaxLength)(100),
    (0, class_validator_1.MinLength)(5),
    __metadata("design:type", String)
], CreateBookDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)({
        message: 'description must be a string',
    }),
    (0, class_validator_1.MaxLength)(500),
    (0, class_validator_1.MinLength)(5),
    __metadata("design:type", String)
], CreateBookDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(books_type_1.BookCategoryEnum),
    __metadata("design:type", String)
], CreateBookDto.prototype, "category", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(books_type_1.BookTypeEnum),
    __metadata("design:type", String)
], CreateBookDto.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsString)({
        message: 'publishing house must be a string',
    }),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], CreateBookDto.prototype, "publishingHouse", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(0),
    (0, class_validator_1.MaxLength)(10),
    __metadata("design:type", String)
], CreateBookDto.prototype, "part", void 0);
__decorate([
    (0, class_validator_1.IsArray)({
        message: 'images must be an array',
    }),
    (0, class_validator_1.ArrayMaxSize)(3),
    (0, class_validator_1.Validate)(MaxLengthOfArrayStrings, {
        message: 'Max length of links is 1000 chars'
    }),
    __metadata("design:type", Array)
], CreateBookDto.prototype, "images", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(10000000000),
    __metadata("design:type", Number)
], CreateBookDto.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(books_type_1.BookLookEnum),
    __metadata("design:type", String)
], CreateBookDto.prototype, "look", void 0);
exports.CreateBookDto = CreateBookDto;
//# sourceMappingURL=create-book.dto.js.map