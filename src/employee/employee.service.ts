// src/user/user.service.ts
import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './employee.entity';

@Injectable()
export class EmployeeService {
    constructor(
        @Inject('EMPLOYEE_REPOSITORY')
        private photoRepository: Repository<Employee>,
    ) { }

    async findAll(): Promise<Employee[]> {
        return this.photoRepository.find();
    }
}
