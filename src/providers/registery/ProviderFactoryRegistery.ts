import { IProviderFactory } from "../interfaces/IProviderFactory";

export class ProviderFactoryRegistery {
    private static factories: Map<string, IProviderFactory> = new Map<string, IProviderFactory>();

    static registerProviderFactory(factory: IProviderFactory): void {
        if(this.factories.has(factory.providerCode)) {
            throw new Error(`Factory for provider code ${factory.providerCode} is already registered.`);
        }
        this.factories.set(factory.providerCode, factory);
    }

    static getProviderFactory(providerCode: string): IProviderFactory {
        const factory = this.factories.get(providerCode);
        if (!factory) {
            throw new Error(`No factory found for type ${providerCode}`);
        }
        return factory;
    }
}