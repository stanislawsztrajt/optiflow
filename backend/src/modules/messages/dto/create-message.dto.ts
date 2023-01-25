import { IsMongoId, IsOptional, IsString, MaxLength } from "class-validator";

export class CreateMessageDto {
  @IsString()
  @IsOptional()
  @MaxLength(500)
  content: string;

  @IsOptional()
  @IsMongoId()
  @MaxLength(200)
  secondUserId: string

  @IsMongoId()
  @IsOptional()
  @MaxLength(200)
  userId: string
}