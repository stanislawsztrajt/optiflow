import { IsString, IsArray, IsNumber, MaxLength, IsOptional, IsMongoId } from 'class-validator';

export class CreateEventDto {
  @IsString()
  @MaxLength(200)
  title: string;

  @IsString()
  @MaxLength(1000)
  description: string;

  @IsString()
  @MaxLength(100)
  location: string;

  @IsString()
  date: Date;

  @IsArray()
  images: string[];

  @IsOptional()
  @IsNumber()
  price?: number;

  @IsMongoId()
  @IsOptional()
  @MaxLength(200)
  userId: string
}
