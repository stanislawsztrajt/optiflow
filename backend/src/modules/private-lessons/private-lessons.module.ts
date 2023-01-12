import { Module } from '@nestjs/common';
import { PrivateLessonsService } from './private-lessons.service';
import { PrivateLessonsController } from './private-lessons.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PrivateLesson, PrivateLessonsSchema } from './schemas/private-lessons.schema';
import { AuthModule } from '../auth/auth.module';
import { forwardRef } from '@nestjs/common/utils';

@Module({
  imports: [
    forwardRef(() => AuthModule),
    MongooseModule.forFeature([{ name: PrivateLesson.name, schema: PrivateLessonsSchema }]),
  ],
  controllers: [PrivateLessonsController],
  providers: [PrivateLessonsService],
  exports: [PrivateLessonsService]
})
export class PrivateLessonsModule {}
