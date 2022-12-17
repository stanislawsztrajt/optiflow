import { Module } from '@nestjs/common';
import { LostItemsService } from './lost-items.service';
import { LostItemsController } from './lost-items.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { LostItem, LostItemSchema } from './schemas/lost-items.schema';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule, MongooseModule.forFeature([{ name: LostItem.name, schema: LostItemSchema }])],
  controllers: [LostItemsController],
  providers: [LostItemsService]
})
export class LostItemsModule {}
