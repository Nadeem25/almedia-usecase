import { IOffer } from "../../entities/interfaces/IOffer";

export interface IProviderTranformer {
    transform (data: any): IOffer[] 
}