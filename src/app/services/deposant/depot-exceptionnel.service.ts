import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {IDepotExceptionnel} from "../../models/depot-exceptionnel";


type EntityResponseType = HttpResponse<IDepotExceptionnel>;

@Injectable({
  providedIn: 'root'
})
export class DepotExceptionnelService {

  private baseUrl = 'http://localhost:3001';

  constructor(private http: HttpClient) { }

  getAllDepots(): Observable<IDepotExceptionnel[]> {
    return this.http.get<IDepotExceptionnel[]>(`${this.baseUrl}/deposant/depots`);
  }

  addDepot(depot: IDepotExceptionnel): Observable<IDepotExceptionnel> {
    return this.http.post<IDepotExceptionnel>(`${this.baseUrl}/deposant/addDepot`, depot);
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<IDepotExceptionnel>(`${this.baseUrl}/deposant/depots/${id}`, { observe: 'response' });
  }

  delete(id: number): Observable<EntityResponseType> {
    return this.http
      .get<IDepotExceptionnel>(`${this.baseUrl}/deposant/depots/delete/${id}`, { observe: 'response' });
  }

  addDepotBrouillon(depot: IDepotExceptionnel): Observable<IDepotExceptionnel> {
    return this.http.post<IDepotExceptionnel>(`${this.baseUrl}/deposant/addDepot/brouillon`, depot);
  }
  
}
