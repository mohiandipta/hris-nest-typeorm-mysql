// src/user/user.controller.ts
import { Body, Controller, Get, Post } from '@nestjs/common';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../entities/employee.entity';
import { EmployeeDTO } from '../dtos/employee.dto';

@Controller('employees')
export class EmployeeController {
    constructor(private readonly employeeService: EmployeeService) { }

    @Get()
    async findAll(): Promise<Employee[]> {
        return this.employeeService.findAll()
    }

    @Post()
    async createEmployee(@Body() createEmployeeDTO: EmployeeDTO) {
        return this.employeeService.createEmployee(createEmployeeDTO)
    }
}
