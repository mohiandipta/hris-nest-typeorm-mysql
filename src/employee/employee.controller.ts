// src/user/user.controller.ts
import { Controller, Get } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Employee } from './employee.entity';

@Controller('employees')
export class EmployeeController {
    constructor(private readonly employeeService: EmployeeService) { }

    @Get()
    async findAll(): Promise<Employee[]> {
        return this.employeeService.findAll()
    }
}
