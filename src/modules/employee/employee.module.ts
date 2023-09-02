import { Module } from '@nestjs/common';
import { EmployeeController } from './controllers/employee.controller';
import { EmployeeService } from './services/employee.service';
import { employeeProviders } from './providers/employee.provider';
import { DatabaseModule } from 'src/database/database.module';
import { ErrorHandlingModule } from 'src/shared/error/error.module';

@Module({
  imports: [DatabaseModule, ErrorHandlingModule],
  controllers: [EmployeeController],
  providers: [
    ...employeeProviders,
    EmployeeService
  ]
})
export class EmployeeModule {}
