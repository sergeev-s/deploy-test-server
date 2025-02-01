import { Injectable } from '@nestjs/common';
import * as process from 'node:process';

@Injectable()
export class AppService {
  async getTime(): Promise<{ time: string; PID: number }> {
    return { time: new Date().toString(), PID: process?.pid };
  }
}
