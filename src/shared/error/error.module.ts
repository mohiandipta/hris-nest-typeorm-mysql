import { Module } from "@nestjs/common";
import { ErrorHandlingService } from "./handleInternalError.providers"; // Adjust the import path

@Module({
    providers: [ErrorHandlingService], // Provide the service here
    exports: [ErrorHandlingService], // Export the service here if needed
})
export class ErrorHandlingModule { }