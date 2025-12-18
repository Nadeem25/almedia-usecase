export interface IProviderFactory {
    readonly providerCode: string;
    createTransformer(): any;
}