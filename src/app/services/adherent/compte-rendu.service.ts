import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {tap} from "rxjs/operators";
import {IcompteRendu} from "../../models/adherent/compte-rendu";

@Injectable({
  providedIn: 'root'
})
export class CompteRenduService {

  private baseUrl = 'http://localhost:3001';

  constructor(private http: HttpClient) { }

  getAllCopmteRendu(): Observable<IcompteRendu[]> {
    return this.http.get<IcompteRendu[]>(`${this.baseUrl}/adherent/compteRendu`).pipe(
      tap(data => console.log('Compte Rendu data:', data)),
      catchError(this.handleError)
    );
  }


  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${error.error.message}`;
    } else {
      errorMessage = `Server returned code: ${error.status}, error message is: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
