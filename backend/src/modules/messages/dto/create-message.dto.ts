import { IsOptional, IsString, MaxLength } from "class-validator";

export class CreateMessageDto {
  @IsString()
  @IsOptional()
  @MaxLength(500)
  content: string;

  @IsString()
  @IsOptional()
  @MaxLength(200)
  secondUserId: string
}
