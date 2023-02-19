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
exports.PrivateLessonsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const private_lessons_schema_1 = require("./schemas/private-lessons.schema");
let PrivateLessonsService = class PrivateLessonsService {
    constructor(privateLessonModel) {
        this.privateLessonModel = privateLessonModel;
    }
    async create(createPrivateLessonDto) {
        const createdPrivateLesson = new this.privateLessonModel(createPrivateLessonDto);
        return createdPrivateLesson.save();
    }
    async findAll(query) {
        return this.privateLessonModel.find(query).exec();
    }
    async findOne(query) {
        return this.privateLessonModel.findOne(query).exec();
    }
    async update(id, updatePrivateLessonDto) {
        return this.privateLessonModel.findByIdAndUpdate(id, updatePrivateLessonDto, { new: true });
    }
    async remove(id) {
        return this.privateLessonModel.findByIdAndRemove(id);
    }
};
PrivateLessonsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(private_lessons_schema_1.PrivateLesson.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PrivateLessonsService);
exports.PrivateLessonsService = PrivateLessonsService;
//# sourceMappingURL=private-lessons.service.js.map