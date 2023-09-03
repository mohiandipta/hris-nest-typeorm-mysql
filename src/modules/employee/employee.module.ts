import { Module } from '@nestjs/common';
import { EmployeeService } from './services/employee.service';
import { EmployeeController } from './controllers/employee.controller';

@Module({
  imports: [],
  controllers: [EmployeeController],
  providers: [EmployeeService],
  exports:[]
})
export class EmployeeModule {}
