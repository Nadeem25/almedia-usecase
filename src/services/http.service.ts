import axios from "axios";
import { offer1Payload } from "../payloads/offer1.payload";

export async function fetchOfferProviderData(config: any): Promise<any> {
    try {
        const response = await axios.get(config.apiUrl)
        console.log(`[HttpService][fetchProviderData] data fetched successfully: ${JSON.stringify(response.data)}`);
        return response?.data;
    } catch (error) {
        console.error(`[HttpService][fetchProviderData] error fetching data from ${config.apiUrl}: ${error}`);
        throw new Error(`Error fetching data: ${error}`);
    }
}