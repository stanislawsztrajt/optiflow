import { IsString, IsNumber, IsEnum, IsOptional, MaxLength, Max, IsMongoId, Min } from 'class-validator';
import { PrivateLessonsCategoryEnum, PrivateLessonsCategoryType, PrivateLessonsOfferTypeEnum, PrivateLessonsOfferTypeType } from '../types/private-lessons.type';

export class CreatePrivateLessonDto {
  @IsString()
  @MaxLength(100)
  title: string;

  @IsString()
  @MaxLength(500)
  description: string;

  @IsOptional()
  @IsEnum(PrivateLessonsCategoryEnum)
  category: PrivateLessonsCategoryType;

  @IsOptional()
  @IsEnum(PrivateLessonsOfferTypeEnum)
  offerType: PrivateLessonsOfferTypeType;

  @IsNumber()
  @Min(0)
  @Max(10000000)
  price: number;

  @IsMongoId()
  @IsOptional()
  @MaxLength(200)
  userId: string
}
