import { MaxLength, IsNumber, IsEnum, IsMongoId, IsOptional } from 'class-validator';
import { LostItemFoundEnum } from '../types/lost-items.type';

export class CreateLostItemDto {
  @MaxLength(100)
  name: string;

  @MaxLength(100)
  foundLocation: string;
  // the place where the item was found

  @MaxLength(500)
  description: string;

  images: string[];

  @IsNumber()
  @MaxLength(10000000000)
  price: number;

  @IsEnum(LostItemFoundEnum)
  type: LostItemFoundEnum;

  @IsMongoId()
  @IsOptional()
  @MaxLength(200)
  userId: string
}
