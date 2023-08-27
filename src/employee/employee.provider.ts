import { DataSource } from 'typeorm';
import { Employee } from './employee.entity';

export const employeeProviders = [
    {
        provide: 'EMPLOYEE_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Employee),
        inject: ['DATA_SOURCE'],
    },
];
