import { IsString, IsDate, IsArray, IsNumber, MaxLength, IsOptional } from 'class-validator';

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

  @IsDate()
  date: Date;

  @IsArray()
  images: string[];

  @IsOptional()
  @IsNumber()
  price?: number;

  @IsString()
  userId: string;
}
