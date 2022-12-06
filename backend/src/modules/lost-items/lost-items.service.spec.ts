import { Test, TestingModule } from '@nestjs/testing';
import { LostItemsService } from './lost-items.service';

describe('LostItemsService', () => {
  let service: LostItemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LostItemsService],
    }).compile();

    service = module.get<LostItemsService>(LostItemsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
