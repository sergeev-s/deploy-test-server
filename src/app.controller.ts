import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/time')
  async getHello(): Promise<{ time: string; PID: number }> {
    return this.appService.getTime();
  }
}
