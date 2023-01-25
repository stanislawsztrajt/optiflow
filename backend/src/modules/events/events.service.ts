import { Injectable } from '@nestjs/common';
import { FilterQuery, Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Event } from './schemas/events.schema';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

@Injectable()
export class EventsService {
  constructor(@InjectModel(Event.name) private eventModel: Model<Event>) {}

  async create(createEventDto: CreateEventDto): Promise<Event> {
    const createdEvent = new this.eventModel(createEventDto);
    return createdEvent.save();
  }

  async findAll(query: FilterQuery<Event>): Promise<Event[]> {
    return this.eventModel.find(query).exec();
  }

  async findOne(query: FilterQuery<Event>): Promise<Event> {
    return this.eventModel.findOne(query).exec();
  }

  async update(id: string, updateEventDto: UpdateEventDto): Promise<Event> {
    return this.eventModel.findByIdAndUpdate(id, updateEventDto, { new: true });
  }

  async remove(id: string): Promise<Event> {
    return this.eventModel.findByIdAndDelete(id);
  }
}
