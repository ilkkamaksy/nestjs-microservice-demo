import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ role: 'bar', cmd: 'create' })
  createBar(barDto) {
    console.log('service b received bar', barDto);
    return this.appService.createBar(barDto);
  }

  @MessagePattern({ role: 'bar', cmd: 'get-by-id' })
  getBarById(id: number) {
    return this.appService.getBarById(id);
  }
}
