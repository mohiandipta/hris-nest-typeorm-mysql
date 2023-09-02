import { Injectable } from "@nestjs/common";

@Injectable()
export class ErrorHandlingService {
    handleInternalError(error: any, res: any) {
        return res.status(500).json({
            error: error.message,
            message: 'Internal Server Error'
        });
    }
}
