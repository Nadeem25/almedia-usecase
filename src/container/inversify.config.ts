import { Container } from "inversify";
import { TYPES } from "./types";
import { ProviderRepository } from "../repository/ProviderRepository";
import { OfferRepository } from "../repository/OfferRepository";
import { ProviderFactoryRegistery } from "../services/providers/registery/ProviderFactoryRegistery";
import { ProviderAFactory } from "../services/providers/factory/ProviderAFactory";
import { ProviderBFactory } from "../services/providers/factory/ProviderBFactory";
import { IProviderRepository } from "../repository/interfaces/IProviderRepository";
import { IOfferRepository } from "../repository/interfaces/IOfferRepository";
import { IProviderFactory } from "../services/interfaces/IProviderFactory";
import { IProviderFactoryRegistery } from "../services/interfaces/IProviderFactoryRegistery";
import { Job } from "../job/OfferJob";
import { HttpService } from "../services/HttpService";


const container = new Container();

container.bind<IProviderRepository>(TYPES.ProviderRepository).to(ProviderRepository);
container.bind<IOfferRepository>(TYPES.OfferRepository).to(OfferRepository);
container.bind<IProviderFactory>(TYPES.ProviderAFactory).to(ProviderAFactory);
container.bind<IProviderFactory>(TYPES.ProviderBFactory).to(ProviderBFactory);
container.bind<IProviderFactoryRegistery>(TYPES.ProviderFactoryRegistry).to(ProviderFactoryRegistery).inSingletonScope();
container.bind(TYPES.HttpService).to(HttpService)
container.bind(TYPES.Job).to(Job);

export { container };


