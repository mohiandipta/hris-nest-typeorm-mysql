import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../entities/employee.entity';
import { EmployeeDTO } from '../dtos/employee.dto';

describe('EmployeeController', () => {
  let employeeController: EmployeeController;
  let employeeService: EmployeeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployeeController],
      providers: [
        {
          provide: EmployeeService,
          useValue: {
            findAll: jest.fn(),
            createEmployee: jest.fn(),
          },
        },
      ],
    }).compile();

    employeeController = module.get<EmployeeController>(EmployeeController);
    employeeService = module.get<EmployeeService>(EmployeeService);
  });

  describe('findAll', () => {
    it('should return an array of employees', async () => {
      const employees: Employee[] = []; // your test data
      jest.spyOn(employeeService, 'findAll').mockResolvedValue(employees);

      const result = await employeeController.findAll();

      expect(result).toBe(employees);
    });
  });

  describe('createEmployee', () => {
    it('should create a new employee', async () => {
      const createEmployeeDTO: EmployeeDTO = {
        name: '',
        email: ''
      }; // your test data
      const createdEmployee: Employee = {
        id: 0,
        name: '',
        email: ''
      }; // your test data
      jest.spyOn(employeeService, 'createEmployee').mockResolvedValue(createdEmployee);

      const result = await employeeController.createEmployee(createEmployeeDTO);

      expect(result).toBe(createdEmployee);
    });
  });
});
