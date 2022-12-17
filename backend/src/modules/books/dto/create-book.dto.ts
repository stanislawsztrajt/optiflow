import { IsString, IsOptional, IsArray, IsNumber } from 'class-validator';
import { BookCategoryType, BookLookType } from '../types/books.type';

export class CreateBookDto {
  @IsString({
    message: 'title must be a string',
  })
  @IsOptional({
    message: 'title is required',
  })
  title: string;

  @IsString({
    message: 'description must be a string',
  })
  @IsOptional({
    message: 'description is required',
  })
  description: string;

  @IsOptional({
    message: 'category is required',
  })
  category: BookCategoryType;

  @IsArray({
    message: 'images must be an array of Urls',
  })
  @IsOptional({
    message: 'images is required',
  })
  images: string[];

  @IsNumber()
  @IsOptional({
    message: 'price is required',
  })
  price: number;

  @IsOptional({
    message: 'look is required',
  })
  look: BookLookType;

  @IsString({
    message: 'userId must be a string',
  })
  @IsOptional({
    message: 'userId is required',
  })
  userId: string;
}