import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { AppConfigService } from 'src/app/core/config/app-config.service';
import { createRequestOption } from 'src/app/shared/utils/request/request-util';
import { EntityArrayResponseType } from '../referentiel/referentiel-base.service';
import { Page } from 'src/app/models/shared/page';
import { buildHttpParamsFromRequest } from 'src/app/shared/utils/http-request-util';
import { CampagneIndemnisation } from 'src/app/models/campagneIndemnisation';


@Injectable({
  providedIn: 'root'
})
export class CampagneIndemnisationService {
  private url: string = '';
  private urls:string='http://localhost:8080/v1/campagneIndemnisation';


  constructor(
    private http: HttpClient, 
    private appConfigService: AppConfigService
  ) { 
      this.url = this.appConfigService.getEndpointForCompagneIndemnisation('v1/campagneIndemnisation');
  }

  create(compagneIndemnisation: CampagneIndemnisation): Observable<CampagneIndemnisation> {
    return this.http.post<CampagneIndemnisation>(`${this.urls}`, compagneIndemnisation);
  }
  

  update(compagneIndemnisation: CampagneIndemnisation): Observable<CampagneIndemnisation> {
    return this.http.put<CampagneIndemnisation>(this.url, compagneIndemnisation);
  }

  find(id: number): Observable<CampagneIndemnisation> {
    return this.http.get<CampagneIndemnisation>(`${this.urls}/${id}`);
  }

  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  query(req?: any): Observable<Page<CampagneIndemnisation>> {
    const options = buildHttpParamsFromRequest(req);
    return this.http.get<Page<CampagneIndemnisation>>(`${this.url}/search`, { params: options });
  }

  getAll(req: any): Observable<EntityArrayResponseType<CampagneIndemnisation>>{
    const options = createRequestOption(req);
    return this.http.get<CampagneIndemnisation[]>(`${this.urls}/search`, { params: options, observe: 'response' })
    .pipe(
      tap(
        (response) => {
          console.log('Success:', response);
        }
      ),
      catchError((error: HttpErrorResponse) => {
        if (error.error instanceof ErrorEvent) {
          // Client-side error
        } else {
          // Server-side error
        }
        return throwError(() => new Error('An error occurred during the HTTP request'));
      })
    );
  }

  delete(id: number): Observable<object> {
    return this.http.delete(`${this.urls}/${id}`);
  }

}
