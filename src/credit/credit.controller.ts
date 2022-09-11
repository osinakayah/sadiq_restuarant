import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Credit } from './credit.model';
import { CreditService } from './credit.service';

@Crud({
  model: {
    type: Credit,
  },
})
@Controller('credit')
export class CreditController implements CrudController<Credit> {
  constructor(public service: CreditService) {}
}
