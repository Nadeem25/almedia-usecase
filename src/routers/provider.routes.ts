import express from 'express'
import { ProviderController } from '../controllers/provider.controller';

export default class RouterBinder {


    static bindRoutes() {
        try {
            const router = express.Router();
            const controller = new ProviderController();
            router.get('/provider_a', controller.getProviderAOffers);
            router.get('/provider_b', controller.getProviderBOffers);
            return router;
        } catch (error) {
            console.log(`[routers] error: ${error}`);
        }
    }
}