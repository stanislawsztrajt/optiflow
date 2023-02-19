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
exports.EventsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const events_schema_1 = require("./schemas/events.schema");
let EventsService = class EventsService {
    constructor(eventModel) {
        this.eventModel = eventModel;
    }
    async create(createEventDto) {
        const createdEvent = new this.eventModel(createEventDto);
        return createdEvent.save();
    }
    async findAll(query) {
        return this.eventModel.find(query).exec();
    }
    async findOne(query) {
        return this.eventModel.findOne(query).exec();
    }
    async update(id, updateEventDto) {
        return this.eventModel.findByIdAndUpdate(id, updateEventDto, { new: true });
    }
    async remove(id) {
        return this.eventModel.findByIdAndDelete(id);
    }
};
EventsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(events_schema_1.Event.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], EventsService);
exports.EventsService = EventsService;
//# sourceMappingURL=events.service.js.map