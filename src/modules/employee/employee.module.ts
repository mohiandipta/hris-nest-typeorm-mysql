import { Module } from '@nestjs/common';
// import { EmployeeController } from './controllers/employee.controller';
import { EmployeeService } from './services/employee.service';
import { employeeProviders } from './providers/employee.provider';
import { EmployeeController } from './controllers/employee.controller';

@Module({
  imports: [],
  controllers: [EmployeeController],
  providers: [
    ...employeeProviders,
    EmployeeService
  ],
  exports:[]
})
export class EmployeeModule {}
