import { Test, TestingModule } from '@nestjs/testing';
import { PrivateLessonsService } from './private-lessons.service';

describe('PrivateLessonsService', () => {
  let service: PrivateLessonsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrivateLessonsService],
    }).compile();

    service = module.get<PrivateLessonsService>(PrivateLessonsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
