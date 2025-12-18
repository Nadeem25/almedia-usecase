import { IProviderFactory } from "../../interfaces/IProviderFactory";
import { IProviderTranformer } from "../../interfaces/IProviderTranformer";
import { ProviderATransformer } from "./ProviderATransformer";

export class ProviderAFactory implements IProviderFactory { 
    readonly providerCode: string = "PROVIDER_A";

    createTransformer(): IProviderTranformer {
        return new ProviderATransformer();
    }
}