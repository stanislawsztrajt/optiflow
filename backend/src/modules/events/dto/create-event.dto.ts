import { IsString, IsArray, IsNumber, MaxLength, IsOptional, ArrayMaxSize, Validate, MinLength } from 'class-validator';
import { MaxLengthOfArrayStrings } from 'src/modules/books/dto/create-book.dto';

export class CreateEventDto {
  @IsString()
  @MinLength(5)
  @MaxLength(200)
  title: string;

  @IsString()
  @MinLength(5)
  @MaxLength(1000)
  description: string;

  @IsString()
  @MaxLength(100)
  location: string;

  @IsString()
  date: Date;

  @IsArray({
    message: 'images must be an array',
  })
  @ArrayMaxSize(3)
  @Validate(MaxLengthOfArrayStrings, {
    message: 'Max length of links is 1000 chars'
  })

  @IsOptional()
  @IsNumber()
  price?: number;
}
