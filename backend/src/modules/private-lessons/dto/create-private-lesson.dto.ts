import { IsString, IsNumber, IsEnum, MaxLength, Max, Min, MinLength } from 'class-validator';
import { PrivateLessonsCategoryEnum, PrivateLessonsCategoryType, PrivateLessonsOfferTypeEnum, PrivateLessonsOfferTypeType } from '../types/private-lessons.type';

export class CreatePrivateLessonDto {
  @IsString()
  @MaxLength(100)
  @MinLength(5)
  title: string;

  @IsString()
  @MaxLength(500)
  @MinLength(5)
  description: string;

  @IsEnum(PrivateLessonsCategoryEnum)
  category: PrivateLessonsCategoryType;

  @IsEnum(PrivateLessonsOfferTypeEnum)
  offerType: PrivateLessonsOfferTypeType;

  @IsNumber()
  @Min(0)
  @Max(10000000)
  price: number;
}
