import { Resolver, Query, Args } from '@nestjs/graphql';
import { CustomerService } from './customer.service';
import { Customer } from './customer.dto';

@Resolver(() => Customer)
export class CustomerResolver {
  constructor(private readonly customerService: CustomerService) {}

  // Consulta para obtener todos los clientes
  @Query(() => [Customer])
  getAllCustomers(): Customer[] {
    return this.customerService.getAllCustomers();
  }

  // Consulta para obtener un cliente por ID
  @Query(() => Customer, { nullable: true })
  getCustomerById(@Args('id') id: string): Customer | null {
    return this.customerService.getCustomerById(id) || null;
  }
}