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
exports.PrivateLessonsSchema = exports.PrivateLesson = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let PrivateLesson = class PrivateLesson {
};
__decorate([
    (0, mongoose_1.Prop)({ maxlength: 100 }),
    __metadata("design:type", String)
], PrivateLesson.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ maxlength: 500 }),
    __metadata("design:type", String)
], PrivateLesson.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PrivateLesson.prototype, "category", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PrivateLesson.prototype, "offerType", void 0);
__decorate([
    (0, mongoose_1.Prop)({ min: 0, max: 10000000 }),
    __metadata("design:type", Number)
], PrivateLesson.prototype, "price", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PrivateLesson.prototype, "userId", void 0);
PrivateLesson = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], PrivateLesson);
exports.PrivateLesson = PrivateLesson;
exports.PrivateLessonsSchema = mongoose_1.SchemaFactory.createForClass(PrivateLesson);
//# sourceMappingURL=private-lessons.schema.js.map