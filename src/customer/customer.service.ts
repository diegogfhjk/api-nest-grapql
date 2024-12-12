import { Injectable } from '@nestjs/common';
import { Customer } from './customer.dto';

@Injectable()
export class CustomerService {
  private customers: Customer[] = [
    {
      id: '1',
      name: 'Juan Pérez',
      email: 'juan.perez@example.com',
      phone: '123456789',
      address: 'Calle Falsa 123',
    },
    {
      id: '2',
      name: 'María López',
      email: 'maria.lopez@example.com',
      phone: '987654321',
      address: 'Avenida Siempreviva 742',
    },
    {
      id: '3',
      name: 'Carlos Gómez',
      email: 'carlos.gomez@example.com',
      phone: '1122334455',
      address: 'Calle Luna 456',
    },
    {
      id: '4',
      name: 'Ana Ramírez',
      email: 'ana.ramirez@example.com',
      phone: '9988776655',
      address: 'Avenida Sol 789',
    },
    {
      id: '5',
      name: 'Luis Martínez',
      email: 'luis.martinez@example.com',
      phone: '4455667788',
      address: 'Calle Estrella 101',
    },
    {
      id: '6',
      name: 'Sofía Torres',
      email: 'sofia.torres@example.com',
      phone: '5566778899',
      address: 'Avenida Mar 202',
    },
    {
      id: '7',
      name: 'Jorge Rojas',
      email: 'jorge.rojas@example.com',
      phone: '6677889900',
      address: 'Calle Montaña 303',
    },
    {
      id: '8',
      name: 'Laura Castillo',
      email: 'laura.castillo@example.com',
      phone: '7788990011',
      address: 'Avenida Río 404',
    },
    {
      id: '9',
      name: 'Pedro Fernández',
      email: 'pedro.fernandez@example.com',
      phone: '8899001122',
      address: 'Calle Bosque 505',
    },
    {
      id: '10',
      name: 'Camila Reyes',
      email: 'camila.reyes@example.com',
      phone: '9900112233',
      address: 'Avenida Nieve 606',
    },
  ];

  getAllCustomers(): Customer[] {
    return this.customers;
  }

  getCustomerById(id: string): Customer {
    const customer = this.customers.find((customer) => customer.id === id);
    if (!customer) {
      throw new Error(`Customer with ID ${id} not found`);
    }
    return customer;
  }
}