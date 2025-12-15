import { IOffer } from "../../entities/interfaces/offer.interface";


export interface IOfferProvider {
    readonly providerCode: string;
    transformOfferData (data: any): IOffer[] | null
}