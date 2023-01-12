import { Module } from '@nestjs/common';
import { LostItemsService } from './lost-items.service';
import { LostItemsController } from './lost-items.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { LostItem, LostItemSchema } from './schemas/lost-items.schema';
import { AuthModule } from '../auth/auth.module';
import { forwardRef } from '@nestjs/common/utils';

@Module({
  imports: [
    forwardRef(() => AuthModule),
    MongooseModule.forFeature([{ name: LostItem.name, schema: LostItemSchema }]),
  ],
  controllers: [LostItemsController],
  providers: [LostItemsService],
  exports: [
    LostItemsService
  ]
})
export class LostItemsModule {}
