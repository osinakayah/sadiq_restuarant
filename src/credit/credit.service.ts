import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Credit } from './credit.model';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CreditService extends TypeOrmCrudService<Credit> {
  constructor(@InjectRepository(Credit) repo) {
    super(repo);
  }
}
