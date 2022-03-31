import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ role: 'item', cmd: 'create' })
  createItem(itemDto) {
    console.log('service a received item', itemDto);
    return this.appService.createItem(itemDto);
  }
  @MessagePattern({ role: 'item', cmd: 'get-by-id' })
  getItemById(id: number) {
    return this.appService.getItemById(id);
  }
}
