import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreditModule } from './credit/credit.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Credit } from './credit/credit.model';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    CreditModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      // host: 'host.docker.internal',
      type: 'mysql',
      port: 3306,

      host: 'mysql',
      username: 'osinakayah',
      password: 'root',

      // host: 'localhost',
      // username: 'root',
      // password: '',

      database: 'credit',
      entities: [Credit],
      synchronize: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'build'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
