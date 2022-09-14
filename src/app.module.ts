import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreditModule } from './credit/credit.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Credit } from './credit/credit.model';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    CreditModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql',
      // host: 'host.docker.internal',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'credit',
      entities: [Credit],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
