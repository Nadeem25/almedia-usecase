import { IOffer } from "../../entities/interfaces/offer.interface";


export interface IOfferProvider {
    readonly providerCode: string;
    transform (data: any): IOffer[] | null
}