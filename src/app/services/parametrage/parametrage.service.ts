import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfigService } from 'src/app/core/config/app-config.service';
import { EntityArrayResponseType } from '../referentiel/referentiel-base.service';
import { createRequestOption } from 'src/app/shared/utils/request/request-util';
import { Parametrage } from 'src/app/models/parametrage';

@Injectable({
  providedIn: 'root'
})
export class ParametrageService {

  private url: string = '';
  private urls:string='http://localhost:3000/v1/parametrage';


  constructor(
    private http: HttpClient, 
    private appConfigService: AppConfigService
  ) { 
      this.url = this.appConfigService.getEndpointForCompagneIndemnisation('v1/parametrage');
  }

  getAll(req: any): Observable<EntityArrayResponseType<Parametrage>>{
    console.log("request in service :",req)
    const options = createRequestOption(req);
    return this.http.get<Parametrage[]>(`${this.urls}/search`, { params: options, observe: 'response' })
  }
 
  updateParametrage(parametrage: Parametrage): Observable<Parametrage> {
    return this.http.put<Parametrage>(`${this.urls}/update`, parametrage);
  }
}
