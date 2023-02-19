import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
export declare class EventsController {
    private readonly eventsService;
    constructor(eventsService: EventsService);
    create(createEventDto: CreateEventDto): Promise<import("./schemas/events.schema").Event>;
    findAll(): Promise<import("./schemas/events.schema").Event[]>;
    findOne(_id: string): Promise<import("./schemas/events.schema").Event>;
    update(id: string, updateEventDto: UpdateEventDto): Promise<import("./schemas/events.schema").Event>;
    remove(id: string): Promise<import("./schemas/events.schema").Event>;
}
