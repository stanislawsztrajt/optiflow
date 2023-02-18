import { Controller, Get } from '@nestjs/common';
import { Throttle } from '@nestjs/throttler';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Throttle(1, 70)
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
