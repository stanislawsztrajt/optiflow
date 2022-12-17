import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { BooksModule } from './modules/books/books.module';
import { EventsModule } from './modules/events/events.module';
import { LostItemsModule } from './modules/lost-items/lost-items.module';
import { UsersModule } from './modules/users/users.module';
import { PrivateLessonsModule } from './modules/private-lessons/private-lessons.module';
import { SetUserIdMiddleware } from './core/middlewares/set-user-id.middleware';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), MongooseModule.forRoot(process.env.MONGODB_URI), AuthModule,BooksModule, EventsModule, LostItemsModule, UsersModule, PrivateLessonsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(SetUserIdMiddleware)
      .forRoutes(
        { path: 'books', method: RequestMethod.POST },
        { path: 'events', method: RequestMethod.POST },
        { path: 'lost-items', method: RequestMethod.POST },
        { path: 'private-lessons', method: RequestMethod.POST }
      );
  }
}
