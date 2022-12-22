import { IsString, IsOptional, IsArray, IsNumber, MaxLength, IsEnum, ArrayMaxSize, Max, MinLength } from 'class-validator';
import { BookCategoryType, BookLookType, BookLookEnum, BookCategoryEnum } from '../types/books.type';

export class CreateBookDto {
  @IsString({
    message: 'title must be a string',
  })
  @IsOptional({
    message: 'title is required',
  })
  @MaxLength(100)
  @MinLength(5)
  title: string;

  @IsString({
    message: 'description must be a string',
  })
  @IsOptional({
    message: 'description is required',
  })
  @MaxLength(500)
  @MinLength(5)
  description: string;

  @IsOptional({
    message: 'category is required',
  })
  @IsEnum(BookCategoryEnum)
  @MaxLength(500)
  category: BookCategoryType;

  @IsArray({
    message: 'images must be an array',
  })
  @IsOptional({
    message: 'images is required',
  })
  @ArrayMaxSize(3)
  images: string[];

  @IsNumber()
  @IsOptional({
    message: 'price is required',
  })
  @Max(10000000000)
  price: number;

  @IsOptional({
    message: 'look is required',
  })
  @IsEnum(BookLookEnum)
  look: BookLookType;
}