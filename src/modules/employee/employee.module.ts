import { Module } from '@nestjs/common';
// import { EmployeeController } from './controllers/employee.controller';
import { EmployeeService } from './services/employee.service';
import { employeeProviders } from './providers/employee.provider';
import { DatabaseModule } from 'src/database/database.module';
import { ErrorHandlingModule } from 'src/shared/error/error.module';
import { EmployeeController } from './controllers/employee.controller';

@Module({
  imports: [DatabaseModule, ErrorHandlingModule],
  controllers: [EmployeeController],
  providers: [
    ...employeeProviders,
    EmployeeService
  ],
  exports:[]
})
export class EmployeeModule {}
