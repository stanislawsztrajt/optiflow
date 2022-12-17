import { IsString, IsOptional, MinLength } from 'class-validator';

export class LoginDto {
  @IsString({
    message: 'login must be a string',
  })
  @IsOptional({
    message: 'login is required',
  })
  @MinLength(2)
  login: string;

  @IsString({
    message: 'password must be a string',
  })
  @IsOptional({
    message: 'password is required',
  })
  @MinLength(2)
  password: string;
}