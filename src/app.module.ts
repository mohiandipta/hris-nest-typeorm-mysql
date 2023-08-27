import { Module } from '@nestjs/common';
import { EmployeeModule } from './modules/employee/employee.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [EmployeeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
