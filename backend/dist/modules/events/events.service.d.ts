import { FilterQuery, Model } from 'mongoose';
import { Event } from './schemas/events.schema';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
export declare class EventsService {
    private eventModel;
    constructor(eventModel: Model<Event>);
    create(createEventDto: CreateEventDto): Promise<Event>;
    findAll(query: FilterQuery<Event>): Promise<Event[]>;
    findOne(query: FilterQuery<Event>): Promise<Event>;
    update(id: string, updateEventDto: UpdateEventDto): Promise<Event>;
    remove(id: string): Promise<Event>;
}
