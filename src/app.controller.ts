import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('ping')
export class AppController {
  private logger = new Logger(AppController.name);

  constructor(private readonly appService: AppService) {}

  @Get()
  ping() {
    this.logger.log('Ping API called');

    return {
      status: this.appService.ping(),
    };
  }
}
