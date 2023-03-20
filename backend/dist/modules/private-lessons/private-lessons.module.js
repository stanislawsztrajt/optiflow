"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrivateLessonsModule = void 0;
const common_1 = require("@nestjs/common");
const private_lessons_service_1 = require("./private-lessons.service");
const private_lessons_controller_1 = require("./private-lessons.controller");
const mongoose_1 = require("@nestjs/mongoose");
const private_lessons_schema_1 = require("./schemas/private-lessons.schema");
const auth_module_1 = require("../auth/auth.module");
const utils_1 = require("@nestjs/common/utils");
let PrivateLessonsModule = class PrivateLessonsModule {
};
PrivateLessonsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            (0, utils_1.forwardRef)(() => auth_module_1.AuthModule),
            mongoose_1.MongooseModule.forFeature([{ name: private_lessons_schema_1.PrivateLesson.name, schema: private_lessons_schema_1.PrivateLessonsSchema }]),
        ],
        controllers: [private_lessons_controller_1.PrivateLessonsController],
        providers: [private_lessons_service_1.PrivateLessonsService],
        exports: [private_lessons_service_1.PrivateLessonsService]
    })
], PrivateLessonsModule);
exports.PrivateLessonsModule = PrivateLessonsModule;
//# sourceMappingURL=private-lessons.module.js.map