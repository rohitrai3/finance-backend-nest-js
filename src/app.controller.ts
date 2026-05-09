import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import type { PingResponse } from './transaction/transaction.types';

@Controller('ping')
export class AppController {
  private logger = new Logger(AppController.name);

  constructor(private readonly appService: AppService) {}

  @Get()
  ping(): PingResponse {
    this.logger.log('Ping API called');

    return this.appService.ping();
  }
}
