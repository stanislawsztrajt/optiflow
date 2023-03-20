"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsModule = void 0;
const common_1 = require("@nestjs/common");
const events_service_1 = require("./events.service");
const events_controller_1 = require("./events.controller");
const mongoose_1 = require("@nestjs/mongoose");
const events_schema_1 = require("./schemas/events.schema");
const auth_module_1 = require("../auth/auth.module");
const utils_1 = require("@nestjs/common/utils");
let EventsModule = class EventsModule {
};
EventsModule = __decorate([
    (0, common_1.Module)({
        imports: [(0, utils_1.forwardRef)(() => auth_module_1.AuthModule), mongoose_1.MongooseModule.forFeature([{ name: events_schema_1.Event.name, schema: events_schema_1.EventSchema }])],
        controllers: [events_controller_1.EventsController],
        providers: [events_service_1.EventsService],
        exports: [events_service_1.EventsService]
    })
], EventsModule);
exports.EventsModule = EventsModule;
//# sourceMappingURL=events.module.js.map