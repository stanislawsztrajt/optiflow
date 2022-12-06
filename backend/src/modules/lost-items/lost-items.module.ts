import { Module } from '@nestjs/common';
import { LostItemsService } from './lost-items.service';
import { LostItemsController } from './lost-items.controller';

@Module({
  controllers: [LostItemsController],
  providers: [LostItemsService]
})
export class LostItemsModule {}
