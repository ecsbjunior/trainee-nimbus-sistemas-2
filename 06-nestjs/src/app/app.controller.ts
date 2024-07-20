import { Controller, Get } from '@nestjs/common';

@Controller('app')
export class AppController {
  constructor() {}

  @Get()
  async hello() {
    return {
      message: 'Hello, World!',
    };
  }

  @Get('evandro')
  async helloEvandro() {
    return {
      message: 'Hello, Evandro!',
    };
  }
}
