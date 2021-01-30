import { inject, injectable } from 'inversify';

import { IResolverObject } from 'apollo-server-express';

import { IResolver } from 'ui/common/config/application/apollo/common/IResolver';
import { IRateService } from 'core/applicationServices/Rate/IRateService';
import { DOMAIN_APPLICATION_SERVICE_IDENTIFIERS } from 'core/CoreModuleSymbols';

@injectable()
export class RateQuery implements IResolver<IResolverObject> {
  readonly resolvers: IResolverObject;

  constructor(
    @inject(DOMAIN_APPLICATION_SERVICE_IDENTIFIERS.RATE_SERVICE)
    private readonly rateService: IRateService
  ) {
    this.resolvers = {
      rates: this.rates,
    };
  }

  private rates = () => this.rateService.fetchRates();
}
