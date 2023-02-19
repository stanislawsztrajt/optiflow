import { NestMiddleware } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Response, NextFunction } from 'express';
import { IschemaIds } from '../../modules/lost-items/types/mongodb';
import { Irequest } from '../../utils/types';
export declare class SetUserIdMiddleware implements NestMiddleware {
    private jwtService;
    constructor(jwtService: JwtService);
    use(req: Irequest<IschemaIds>, res: Response, next: NextFunction): void;
}
