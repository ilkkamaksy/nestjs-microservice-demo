import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BarEntity } from './bar.entity';
import { BarRepository } from './bar.repository';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'dbb',
      port: 5433,
      username: 'postgres_user',
      password: 'postgres_password',
      database: 'bar',
      synchronize: true,
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([BarRepository, BarEntity]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
