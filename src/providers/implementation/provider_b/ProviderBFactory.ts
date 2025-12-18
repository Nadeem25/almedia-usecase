import { IProviderFactory } from "../../interfaces/IProviderFactory";
import { IProviderTranformer } from "../../interfaces/IProviderTranformer";
import { ProviderBTransformer } from "./ProviderBTransformer";

export class ProviderBFactory implements IProviderFactory { 
    readonly providerCode: string = "PROVIDER_B";

    createTransformer(): IProviderTranformer {
        return new ProviderBTransformer();
    }
}
