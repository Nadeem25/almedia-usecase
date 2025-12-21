import { IProviderFactory } from "./IProviderFactory";

export interface IProviderFactoryRegistery {
    registerProviderFactory(factory: IProviderFactory, providerCode: string): void;
    getProviderFactory(providerCode: string): IProviderFactory;
}