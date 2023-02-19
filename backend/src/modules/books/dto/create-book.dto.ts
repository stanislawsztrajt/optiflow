import {
  IsString,
  IsArray,
  IsNumber,
  MaxLength,
  IsEnum,
  ArrayMaxSize,
  Max,
  MinLength,
  Min,
  ValidatorConstraintInterface,
  ValidatorConstraint,
  Validate,
} from 'class-validator';
import {
  BookCategoryType,
  BookLookType,
  BookLookEnum,
  BookCategoryEnum,
  BookTypeEnum,
  BookTypeType,
} from '../types/books.type';

@ValidatorConstraint()
export class MaxLengthOfArrayStrings implements ValidatorConstraintInterface {
  public async validate(images: string[]) {
    if (!images) return true
    return images.every(image => image.length < 1000)
  }
}

export class CreateBookDto {
  @IsString({
    message: 'title must be a string',
  })
  @MaxLength(100)
  @MinLength(5)
  title: string;

  @IsString({
    message: 'description must be a string',
  })
  @MaxLength(500)
  @MinLength(5)
  description: string;

  @IsEnum(BookCategoryEnum)
  category: BookCategoryType;

  @IsEnum(BookTypeEnum)
  type: BookTypeType;

  @IsString({
    message: 'publishing house must be a string',
  })
  @MaxLength(50)
  publishingHouse: string;

  @IsString()
  @MinLength(0)
  @MaxLength(10)
  part: string;

  @IsArray({
    message: 'images must be an array',
  })
  @ArrayMaxSize(3)
  @Validate(MaxLengthOfArrayStrings, {
    message: 'Max length of links is 1000 chars'
  })
  images: string[];

  @IsNumber()
  @Min(0)
  @Max(10000000000)
  price: number;

  @IsEnum(BookLookEnum)
  look: BookLookType;
}
