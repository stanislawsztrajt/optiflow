import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { PrivateLessonsService } from '../private-lessons/private-lessons.service';
import { BooksService } from '../books/books.service';
import { EventsService } from '../events/events.service';
import { LostItemsService } from '../lost-items/lost-items.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly booksService: BooksService,
    private readonly eventsService: EventsService,
    private readonly lostItemsService: LostItemsService,
    private readonly privateLessonsService: PrivateLessonsService
  ) {}

  @Get()
  findAll() {
    return this.usersService.findAll({});
  }

  @Get(':_id')
  findOneById(@Param('_id') _id: string) {
    return this.usersService.findOne({ _id });
  }

  @Get(':_id/all/count')
  async findUserAll(@Param('_id') _id: string) {
    const books = (await this.booksService.findAll({ userId: _id })).length;
    const events = (await this.eventsService.findAll({ userId: _id })).length;
    const lostItems = (await this.lostItemsService.findAll({ userId: _id })).length;
    const privateLessons = (await this.privateLessonsService.findAll({ userId: _id })).length;
    
    return {
      books,
      events,
      lostItems,
      privateLessons
    }
  }

  @Get(':_id/books')
  findUserBooks(@Param('_id') _id: string) {
    return this.booksService.findAll({ userId: _id })
  }

  @Get(':_id/events')
  findUserEvents(@Param('_id') _id: string) {
    return this.eventsService.findAll({ userId: _id })
  }

  @Get(':_id/lost-items')
  findUserLostItems(@Param('_id') _id: string) {
    return this.lostItemsService.findAll({ userId: _id })
  }

  @Get(':_id/private-lessons')
  findUserPrivateLessons(@Param('_id') _id: string) {
    return this.privateLessonsService.findAll({ userId: _id })
  }
}
