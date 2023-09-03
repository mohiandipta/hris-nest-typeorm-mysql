import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { EmployeeModule } from './modules/employee/employee.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule, EmployeeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
