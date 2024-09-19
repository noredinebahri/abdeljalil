import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {IHeritier} from "../../models/heritiers";

@Injectable({
  providedIn: 'root'
})
export class HeritierService {

  private baseUrl = 'http://localhost:3001';


  constructor(private http: HttpClient) { }

  getAllHeritiers(): Observable<IHeritier[]> {
    return this.http.get<IHeritier[]>(`${this.baseUrl}/deposant/heritier`).pipe(
        tap(data => console.log('heritier data:', data))
    );
  }
}
