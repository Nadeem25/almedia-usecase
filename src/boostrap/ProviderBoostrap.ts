import { Container } from 'inversify';
import { IProviderFactoryRegistery } from '../services/interfaces/IProviderFactoryRegistery';
import { IProviderFactory } from '../services/interfaces/IProviderFactory';
import { TYPES } from '../container/types';

export function registerProviders(container: Container): void {
  const registery = container.get<IProviderFactoryRegistery>(TYPES.ProviderFactoryRegistry);

  registery.registerProviderFactory(container.get<IProviderFactory>(TYPES.ProviderAFactory), "PROVIDER_A");
  registery.registerProviderFactory(container.get<IProviderFactory>(TYPES.ProviderBFactory), "PROVIDER_B");
  
}
