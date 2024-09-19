import { Injectable } from '@angular/core';
import {AppConfigService} from "../../core/config/app-config.service";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import { createRequestOption } from '../../shared/utils/request/request-util';
import {IReferetielPage} from "../../models/referentiel/referetiel-page";
export type EntityResponseType<T> = HttpResponse<T>;
export type EntityArrayResponseType<T> = HttpResponse<T[]>;
@Injectable({
  providedIn: 'root'
})
export class ReferentielBaseService<T> {
  //public resourceUrl = 'http://localhost:8080/v1/';
  public resourceUrl = 'http://localhost:3000/v1/';

  constructor(private appConfig: AppConfigService, private http:HttpClient) { }

  setUrlEndpoint(endPoint: string){
      this.resourceUrl = this.resourceUrl + endPoint;
  }
  getAll(req: any): Observable<EntityArrayResponseType<T>>{
    const options = createRequestOption(req);
    return this.http.get<T[]>(`${this.resourceUrl}/search`, {params: options, observe: 'response'})
  }

  toggleActivate(id: number){
    return this.http.put<string>(`${this.resourceUrl}/${id}/toggle-active`, {})
  }

  createOrUpdate(object: T){
    return this.http.post<T>(`${this.resourceUrl}`, object)
  }

}
