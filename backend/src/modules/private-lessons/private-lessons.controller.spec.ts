import { Test, TestingModule } from '@nestjs/testing';
import { PrivateLessonsController } from './private-lessons.controller';
import { PrivateLessonsService } from './private-lessons.service';

describe('PrivateLessonsController', () => {
  let controller: PrivateLessonsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrivateLessonsController],
      providers: [PrivateLessonsService],
    }).compile();

    controller = module.get<PrivateLessonsController>(PrivateLessonsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
