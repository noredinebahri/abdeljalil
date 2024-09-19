import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IReprentants} from "../../models/representants";
import {tap} from "rxjs/operators";
import {IHeritier} from "../../models/heritiers";

@Injectable({
  providedIn: 'root'
})
export class RepresentantService {

  private baseUrl = 'http://localhost:3001';


  constructor(private http: HttpClient) { }

  getAllRepresentant(): Observable<IReprentants[]> {
    return this.http.get<IReprentants[]>(`${this.baseUrl}/deposant/representant`).pipe(
        tap(data => console.log('Representants data:', data))
    );
  }
}
