import { Body, Controller, Get, Post, Req, Res, Next } from '@nestjs/common';
import { Request, Response } from 'express';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../entities/employee.entity';
import { EmployeeDTO } from '../dtos/employee.dto';
import { REQUEST_ERROR, SUCCESS } from 'src/shared/constants/httpCodes';
import { notFound, requestInvalid, success } from 'src/helpers/http';
import { ErrorHandlingService } from 'src/shared/error/handleInternalError.providers';

@Controller('employees')
export class EmployeeController {
    constructor(
        private readonly employeeService: EmployeeService) { }

    @Get()
    async findAll(
        @Req() request: Request,
        @Res() response: Response
    ) {
        try {
            const data: any = await this.employeeService.findAll()
            if (data.length === 0) {
                return response
                    .status(404)
                    .json(notFound('Currently there is no employee'));
            }
            return response.status(SUCCESS).json(success(data));
        } catch (error) {
            return response.status(REQUEST_ERROR).json(requestInvalid(error));
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
                return response.status(REQUEST_ERROR).json(requestInvalid(error));
            }
    }
}
