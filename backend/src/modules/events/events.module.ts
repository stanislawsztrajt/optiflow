import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Event, EventSchema } from './schemas/events.schema';
import { AuthModule } from '../auth/auth.module';
import { forwardRef } from '@nestjs/common/utils';

@Module({
  imports: [forwardRef(() => AuthModule), MongooseModule.forFeature([{ name: Event.name, schema: EventSchema }])],
  controllers: [EventsController],
  providers: [EventsService],
  exports: [EventsService]
})
export class EventsModule {}
