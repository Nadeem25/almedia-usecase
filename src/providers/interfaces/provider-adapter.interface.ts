import { IOffer } from "../../entities/interfaces/offer.interface";


export interface IProviderAdapter {
    readonly providerCode: string;
    transform (data: any): IOffer[] 
}