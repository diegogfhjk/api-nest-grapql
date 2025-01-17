import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerResolver } from './customer.resolver';

@Module({
  providers: [CustomerService, CustomerResolver],
})
export class CustomerModule {}