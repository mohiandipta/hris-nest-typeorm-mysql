import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeService } from './employee.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from '../entities/employee.entity';
import { EmployeeDTO } from '../dtos/employee.dto';

describe('EmployeeService', () => {
  let employeeService: EmployeeService;
  let employeeRepository: Repository<Employee>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EmployeeService,
        {
          provide: getRepositoryToken(Employee),
          useClass: Repository,
        },
      ],
    }).compile();

    employeeService = module.get<EmployeeService>(EmployeeService);
    employeeRepository = module.get<Repository<Employee>>(getRepositoryToken(Employee));
  });

  describe('findAll', () => {
    it('should return an array of employees', async () => {
      const employees: Employee[] = []; // your test data
      jest.spyOn(employeeRepository, 'find').mockResolvedValue(employees);

      const result = await employeeService.findAll();

      expect(result).toBe(employees);
    });
  });

  describe('createEmployee', () => {
    it('should create a new employee', async () => {
      const employeeDTO: EmployeeDTO = {
        name: '',
        email: ''
      }; // your test data
      const newEmployee: Employee = {
        id: 0,
        name: '',
        email: ''
      }; // your test data
      jest.spyOn(employeeRepository, 'create').mockReturnValue(newEmployee);
      jest.spyOn(employeeRepository, 'save').mockResolvedValue(newEmployee);

      const result = await employeeService.createEmployee(employeeDTO);

      expect(result).toBe(newEmployee);
    });
  });
});
