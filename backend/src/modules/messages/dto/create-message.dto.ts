import { IsMongoId, IsOptional, IsString, MaxLength } from "class-validator";

export class CreateMessageDto {
  @IsString()
  @IsOptional()
  @MaxLength(500)
  content: string;

  @IsString()
  @IsOptional()
  @IsMongoId()
  @MaxLength(200)
  secondUserId: string

  @IsString()
  @IsMongoId()
  @IsOptional()
  @MaxLength(200)
  userId: string
}