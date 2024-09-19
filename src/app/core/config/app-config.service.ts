import {Injectable} from '@angular/core';
import {ConfigService} from './config.service';

@Injectable({
  providedIn: 'root',
})
export class AppConfigService {
  private endpointPrefix = '';

  constructor(private configService: ConfigService) {
    this.setEndpointPrefix(this.configService?.config?.BASE_URI || '');
  }

  private setEndpointPrefix(endpointPrefix: string): void {
    this.endpointPrefix = endpointPrefix;
  }

  private getEndpointFor(api: string, microservice?: string): string {
    if (microservice) {
      api = api ? `/${api}` : ''
      return `${this.endpointPrefix}/${microservice}${api}`;
    }
    return `${this.endpointPrefix}/${api}`;
  }

  getEndpointForReferentiel(api: string): string {
    return this.getEndpointFor(api, this.configService?.config?.REFERENTIEL_SERVICE);
  }

  getEndpointForCompagneIndemnisation(api: string): string {
    return this.getEndpointFor(api, this.configService?.config?.COMPAGNE_INDEMNISATION_SERVICE);
  }

}
