import { Module } from '@nestjs/common';
import { PrivateLessonsService } from './private-lessons.service';
import { PrivateLessonsController } from './private-lessons.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PrivateLesson, PrivateLessonsSchema } from './schemas/private-lessons.schema';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule, MongooseModule.forFeature([{ name: PrivateLesson.name, schema: PrivateLessonsSchema }])],
  controllers: [PrivateLessonsController],
  providers: [PrivateLessonsService]
})
export class PrivateLessonsModule {}
