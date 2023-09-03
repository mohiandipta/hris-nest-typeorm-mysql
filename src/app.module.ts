import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { EmployeeController } from './employee/employee.controller';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController, EmployeeController],
  providers: [AppService],
})
export class AppModule {}
