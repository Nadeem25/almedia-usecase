// src/controllers/UserController.ts
import { Request, Response } from "express";
import { BaseController } from "./BaseController";
import { offer1Payload } from "../payloads/offer1.payload";
import { offer2Payload } from "../payloads/offer2.payload";

export class ProviderController extends BaseController {

    getProviderAOffers = (req: Request, res: Response) => {
        try {
            const providerA = offer1Payload
            this.success(res, providerA, "User fetched successfully");
        } catch (err) {
            this.error(res, "Failed to fetch user");
        }
    };

    getProviderBOffers = (req: Request, res: Response) => {
        try {
            const providerB = offer2Payload?.data
            this.success(res, providerB, "User created successfully", 201);
        } catch (err) {
            this.error(res, "Failed to create user");
        }
    };
}
