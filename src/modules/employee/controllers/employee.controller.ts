import { Body, Controller, Get, Post, Req, Res, Next } from '@nestjs/common';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../entities/employee.entity';
import { EmployeeDTO } from '../dtos/employee.dto';
import { handleInternalError } from 'src/shared/error/handleInternalError';
import { REQUEST_ERROR } from 'src/shared/constants/httpCodes';
import { requestInvalid } from 'src/helpers/http';

@Controller('employees')
export class EmployeeController {
    constructor(private readonly employeeService: EmployeeService) { }

    @Get()
    async findAll(
        @Req() request: Request,
        @Res() response: Response
    ): Promise<Employee[]> {
        try {
            return this.employeeService.findAll()
        } catch (error) {
            console.log(error);
            handleInternalError(error, response)
        }
    }

    @Post()
    async createEmployee(
        @Req() request: Request,
        @Res() response: Response, 
        @Body() createEmployeeDTO: EmployeeDTO) {
            try {
                return this.employeeService.createEmployee(createEmployeeDTO)
            } catch (error) {
                console.log(error);
                handleInternalError(error, response)
            }
    }
}
