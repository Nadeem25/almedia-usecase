// src/controllers/UserController.ts
import { Request, Response } from "express";
import { BaseController } from "./base.controller";
import { offer1Payload } from "../payloads/offer1.payload";
import { offer2Payload } from "../payloads/offer2.payload";

export class ProviderController extends BaseController {

    getProviderAOffers = (req: Request, res: Response) => {
        try {
            console.log(`I am here`);
            
            const providerA = offer1Payload
            return this.success(res, providerA, "User fetched successfully");
        } catch (err) {
            return this.error(res, "Failed to fetch user");
        }
    };

    getProviderBOffers = (req: Request, res: Response) => {
        try {
            const providerB = offer2Payload?.data
            return this.success(res, providerB, "User created successfully", 201);
        } catch (err) {
            return this.error(res, "Failed to create user");
        }
    };
}
