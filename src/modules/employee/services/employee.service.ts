import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Employee } from '../entities/employee.entity';
import { EmployeeDTO } from '../dtos/employee.dto';

@Injectable()
export class EmployeeService {

    async findAll(): Promise<Employee[]> {
        return [{email: 'email', id:1, name:"employee"}]
    }

    // async createEmployee(employeeDTO: EmployeeDTO){
    //     const newEmployee = this.employeeRepository.create(employeeDTO);
    //     return await this.employeeRepository.save(employeeDTO)
    // }
}
