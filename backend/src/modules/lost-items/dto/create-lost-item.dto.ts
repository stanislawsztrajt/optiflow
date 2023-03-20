import { MaxLength, IsArray, IsEnum, IsOptional, IsString, ArrayMaxSize, Validate, MinLength } from 'class-validator';
import { MaxLengthOfArrayStrings } from '../../books/dto/create-book.dto';
import { LostItemFoundEnum } from '../types/lost-items.type';

export class CreateLostItemDto {
  @IsString()
  @MinLength(5)
  @MaxLength(100)
  name: string;

  @IsString()
  @MaxLength(500)
  @MinLength(5)
  description: string;

  @IsString()
  @IsOptional()
  @MaxLength(100)
  foundLocation?: string;
  // the place where the item was found

  @IsString()
  date: Date;

  @IsArray({
    message: 'images must be an array',
  })
  @ArrayMaxSize(3)
  @Validate(MaxLengthOfArrayStrings, {
    message: 'Max length of links is 1000 chars'
  })
  images: string[];

  @IsEnum(LostItemFoundEnum)
  type: LostItemFoundEnum;
}
