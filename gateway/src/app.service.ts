import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('SERVICE_A') private readonly clientA: ClientProxy,
    @Inject('SERVICE_B') private readonly clientB: ClientProxy,
  ) {}

  createItem(createItemDto) {
    console.log('gateway received item', createItemDto);
    return this.clientA.send({ role: 'item', cmd: 'create' }, createItemDto);
  }

  getItemById(id: number) {
    return this.clientA.send({ role: 'item', cmd: 'get-by-id' }, id);
  }

  createBar(createBarDto) {
    console.log('gateway received bar', createBarDto);
    return this.clientB.send({ role: 'bar', cmd: 'create' }, createBarDto);
  }

  getBarById(id: number) {
    return this.clientB.send({ role: 'bar', cmd: 'get-by-id' }, id);
  }
}
