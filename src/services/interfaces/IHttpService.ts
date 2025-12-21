import { IProvider } from "../../entities/interfaces/IProvider";

export interface IHttpService {
    fetchProviderOffers(offerProvider: IProvider): Promise<any>;
}