import { MaxLength, IsArray, IsEnum, IsMongoId, IsOptional, IsString } from 'class-validator';
import { LostItemFoundEnum } from '../types/lost-items.type';

export class CreateLostItemDto {
  @MaxLength(100)
  name: string;

  @MaxLength(500)
  description: string;

  @IsOptional()
  @MaxLength(100)
  foundLocation?: string;
  // the place where the item was found

  @IsString()
  date: Date;

  @IsArray()
  images: string[];

  @IsEnum(LostItemFoundEnum)
  type: LostItemFoundEnum;

  @IsMongoId()
  @IsOptional()
  @MaxLength(200)
  userId: string
}
