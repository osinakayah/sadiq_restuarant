import { Module } from '@nestjs/common';
import { CreditController } from './credit.controller';
import { CreditService } from './credit.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Credit } from './credit.model';

@Module({
  controllers: [CreditController],
  providers: [CreditService],
  imports: [TypeOrmModule.forFeature([Credit])],
})
export class CreditModule {}
