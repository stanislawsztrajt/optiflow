import { IsString, IsNumber, IsEnum, IsArray, IsOptional, MaxLength, Max, IsMongoId } from 'class-validator';
import { PrivateLessonsCategoryEnum } from '../schemas/private-lessons.schema';

export class CreatePrivateLessonDto {
  @IsString()
  @MaxLength(100)
  title: string;

  @IsString()
  @MaxLength(500)
  description: string;

  @IsOptional()
  @IsArray()
  @IsEnum(PrivateLessonsCategoryEnum)
  category: PrivateLessonsCategoryEnum[];

  @IsNumber()
  @Max(10000000000)
  price: number;

  @IsString()
  @MaxLength(100)
  date: string;

  @IsMongoId()
  @IsOptional()
  @MaxLength(200)
  userId: string
}
