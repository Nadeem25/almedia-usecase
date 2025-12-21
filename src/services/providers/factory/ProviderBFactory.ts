import { injectable } from "inversify";
import { IProviderFactory } from "../../interfaces/IProviderFactory";
import { IProviderTranformer } from "../../interfaces/IProviderTranformer";
import { ProviderBTransformer } from "../transformer/ProviderBTransformer";


@injectable()
export class ProviderBFactory implements IProviderFactory { 

    createTransformer(): IProviderTranformer {
        return new ProviderBTransformer();
    }
}
