import { Module } from '@nestjs/common';
import { EmployeeModule } from './modules/employee/employee.module';

@Module({
  imports: [EmployeeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
