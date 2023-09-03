import { Body, Controller, Get, Post, Req, Res, Next } from '@nestjs/common';
import { Request, Response } from 'express';
import { EmployeeService } from '../services/employee.service';
import { HTTP_CODES } from '../../../shared/constants/httpCodes';
import { notFound, requestInvalid, success } from '../../..//helpers/http';

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
            return response.status(HTTP_CODES.SUCCESS).json(success(data));
        } catch (error) {
            return response.status(HTTP_CODES.REQUEST_ERROR).json(requestInvalid(error));
        }
    }
}
