import { Injectable, Inject } from '@nestjs/common';
import { Employee } from '../entities/employee.entity';

@Injectable()
export class EmployeeService {

    async findAll(): Promise<Employee[]> {
        return [{email: 'email', id:1, name:"employee"}]
    }
}
