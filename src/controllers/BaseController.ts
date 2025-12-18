// src/controllers/BaseController.ts
import { Response } from "express";

export abstract class BaseController {
    protected success(res: Response, data: any = null, message: string = "Success", statusCode: number = 200) {
        return res.status(statusCode).json({
            success: true,
            message,
            data,
        });
    }

    protected error(res: Response, message: string = "Something went wrong", statusCode: number = 500, errors: any = null) {
        return res.status(statusCode).json({
            success: false,
            message,
            errors,
        });
    }
}
