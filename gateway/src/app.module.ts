import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SERVICE_A',
        transport: Transport.TCP,
        options: {
          host: 'service-a',
          port: 3001,
        },
      },
      {
        name: 'SERVICE_B',
        transport: Transport.TCP,
        options: {
          host: 'service-b',
          port: 3002,
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
