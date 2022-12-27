import {
  CanActivate,
  ExecutionContext,
  Injectable,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
import { IschemaIds } from '../../lost-items/types/mongodb';
import { Irequest } from '../../../utils/types';
import { parseJwt } from '../../../utils/helpers';
import { User } from '../../users/schemas/users.schema';

@Injectable()
export class MessageOwnersGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const { headers, params }: Irequest<IschemaIds> = context.switchToHttp().getRequest();
    const token: string = parseJwt(headers.authorization);
    const user: User = this.jwtService.verify(token, {
      secret: process.env.JWT_SECRET,
    });

    if (user._id !== params?.userId && user._id !== params?.secondUserId) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }

    return true;
  }
}
