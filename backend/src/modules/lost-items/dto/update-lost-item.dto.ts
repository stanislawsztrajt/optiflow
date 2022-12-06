import { PartialType } from '@nestjs/mapped-types';
import { CreateLostItemDto } from './create-lost-item.dto';

export class UpdateLostItemDto extends PartialType(CreateLostItemDto) {}
