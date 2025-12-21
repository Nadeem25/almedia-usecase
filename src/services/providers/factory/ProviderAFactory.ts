import { injectable } from "inversify";
import { IProviderFactory } from "../../interfaces/IProviderFactory";
import { IProviderTranformer } from "../../interfaces/IProviderTranformer";
import { ProviderATransformer } from "../transformer/ProviderATransformer";

@injectable()
export class ProviderAFactory implements IProviderFactory { 

    createTransformer(): IProviderTranformer {
        return new ProviderATransformer();
    }

}