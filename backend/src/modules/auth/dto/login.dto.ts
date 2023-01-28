import { IsString, IsOptional } from 'class-validator';

export class LoginDto {
  @IsString({
    message: 'login must be a string',
  })
  @IsOptional({
    message: 'login is required',
  })
  login: string;

  @IsString({
    message: 'password must be a string',
  })
  @IsOptional({
    message: 'password is required',
  })
  password: string;
}
