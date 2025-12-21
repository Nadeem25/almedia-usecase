import axios from "axios";
import { offer1Payload } from "../payloads/offer1.payload";
import { IProvider } from "../entities/interfaces/IProvider";
import { inject, injectable } from "inversify";
import { IHttpService } from "./interfaces/IHttpService";

@injectable()
export class HttpService implements IHttpService {
    constructor() { }

    async fetchProviderOffers(offerProvider: IProvider): Promise<any> {
        try {
            const response = await axios.get(offerProvider?.config?.apiUrl)
            console.log(`[HttpService][fetchProviderData][${offerProvider?.code}] data fetched successfully: ${JSON.stringify(response.data)}`);
            return response?.data;
        } catch (error) {
            console.error(`[HttpService][fetchProviderData][${offerProvider?.code}] error fetching data from ${offerProvider?.config?.apiUrl}: ${error}`);
            throw new Error(`Error fetching data: ${error}`);
        }
    }
}