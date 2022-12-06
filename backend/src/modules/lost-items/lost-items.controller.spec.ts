import { Test, TestingModule } from '@nestjs/testing';
import { LostItemsController } from './lost-items.controller';
import { LostItemsService } from './lost-items.service';

describe('LostItemsController', () => {
  let controller: LostItemsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LostItemsController],
      providers: [LostItemsService],
    }).compile();

    controller = module.get<LostItemsController>(LostItemsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
