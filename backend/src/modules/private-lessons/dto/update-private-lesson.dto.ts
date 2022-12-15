import { PartialType } from '@nestjs/mapped-types';
import { CreatePrivateLessonDto } from './create-private-lesson.dto';

export class UpdatePrivateLessonDto extends PartialType(CreatePrivateLessonDto) {}
