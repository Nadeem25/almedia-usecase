import axios from "axios";
import { offer1Payload } from "../payloads/offer1.payload";
import { IProvider } from "../entities/interfaces/IProvider";

export async function fetchOfferProviderData(offerProvider: IProvider): Promise<any> {
    try {
        const response = await axios.get(offerProvider?.config?.apiUrl)
        console.log(`[HttpService][fetchProviderData][${offerProvider?.code}] data fetched successfully: ${JSON.stringify(response.data)}`);
        return response?.data;
    } catch (error) {
        console.error(`[HttpService][fetchProviderData][${offerProvider?.code}] error fetching data from ${offerProvider?.config?.apiUrl}: ${error}`);
        throw new Error(`Error fetching data: ${error}`);
    }
}