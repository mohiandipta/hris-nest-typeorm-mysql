import { Response } from 'express'
import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';

export const handleInternalError = (error: any, res: any) => {
    return res.status(500).json({
        error: error.message,
        message: 'Internal Server Error'
    })
}
