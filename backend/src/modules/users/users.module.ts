import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/users.schema';
import { BooksModule } from '../books/books.module';
import { EventsModule } from '../events/events.module';
import { LostItemsModule } from '../lost-items/lost-items.module';
import { PrivateLessonsModule } from '../private-lessons/private-lessons.module';
import { forwardRef } from '@nestjs/common/utils';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    forwardRef(() => BooksModule),
    EventsModule,
    LostItemsModule,
    PrivateLessonsModule,
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
