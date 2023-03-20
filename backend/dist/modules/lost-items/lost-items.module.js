"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LostItemsModule = void 0;
const common_1 = require("@nestjs/common");
const lost_items_service_1 = require("./lost-items.service");
const lost_items_controller_1 = require("./lost-items.controller");
const mongoose_1 = require("@nestjs/mongoose");
const lost_items_schema_1 = require("./schemas/lost-items.schema");
const auth_module_1 = require("../auth/auth.module");
const utils_1 = require("@nestjs/common/utils");
let LostItemsModule = class LostItemsModule {
};
LostItemsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            (0, utils_1.forwardRef)(() => auth_module_1.AuthModule),
            mongoose_1.MongooseModule.forFeature([{ name: lost_items_schema_1.LostItem.name, schema: lost_items_schema_1.LostItemSchema }]),
        ],
        controllers: [lost_items_controller_1.LostItemsController],
        providers: [lost_items_service_1.LostItemsService],
        exports: [
            lost_items_service_1.LostItemsService
        ]
    })
], LostItemsModule);
exports.LostItemsModule = LostItemsModule;
//# sourceMappingURL=lost-items.module.js.map