import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { BooksModule } from './modules/books/books.module';
import { EventsModule } from './modules/events/events.module';
import { LostItemsModule } from './modules/lost-items/lost-items.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [BooksModule, EventsModule, LostItemsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
