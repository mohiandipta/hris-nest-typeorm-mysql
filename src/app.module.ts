import { Module } from '@nestjs/common';
import { EmployeeModule } from './modules/employee/employee.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { ErrorHandlingModule } from './shared/error/error.module';

@Module({
  imports: [EmployeeModule, ErrorHandlingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
