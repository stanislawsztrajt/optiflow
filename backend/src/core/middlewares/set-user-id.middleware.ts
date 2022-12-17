import { Injectable, NestMiddleware } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Response, NextFunction } from 'express';
import { User } from 'src/modules/users/schemas/users.schema';
import { parseJwt } from 'src/utils/helpers';
import { IschemaIds } from '../../modules/lost-items/types/mongodb';
import { Irequest } from '../../utils/types';

@Injectable()
export class SetUserIdMiddleware implements NestMiddleware {
  constructor(private jwtService: JwtService) {}
  use(req: Irequest<IschemaIds>, res: Response, next: NextFunction) {
    const token: string = parseJwt(req.headers.authorization);
    const user: User = this.jwtService.verify(token, {
      secret: process.env.JWT_SECRET,
    });

    req.body.userId = user._id
    next();
  }
}
