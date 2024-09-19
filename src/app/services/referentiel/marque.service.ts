import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Marque } from 'src/app/models/referentiel/marque';
import { Page } from 'src/app/models/shared/page';
import { AppConfigService } from 'src/app/core/config/app-config.service';
import { buildHttpParamsFromRequest } from 'src/app/shared/utils/http-request-util';

@Injectable()
export class MarqueService {

  private url: string = '';

  constructor(
    private http: HttpClient, 
    private appConfigService: AppConfigService
  ) { 
      this.url = this.appConfigService.getEndpointForReferentiel('marque');
  }

  create(marque: Marque): Observable<Marque> {
    return this.http.post<Marque>(this.url, marque);
  }

  update(marque: Marque): Observable<Marque> {
    return this.http.put<Marque>(this.url, marque);
  }

  find(id: number): Observable<Marque> {
    return this.http.get<Marque>(`${this.url}/${id}`);
  }

  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  query(req?: any): Observable<Page<Marque>> {
    const options = buildHttpParamsFromRequest(req);
    return this.http.get<Page<Marque>>(`${this.url}/criteria`, { params: options });
  }

  findAll(): Observable<Marque[]> {
    return this.http.get<Marque[]>(this.url);
  }

  delete(id: number): Observable<object> {
    return this.http.delete(`${this.url}/${id}`);
  }

}
