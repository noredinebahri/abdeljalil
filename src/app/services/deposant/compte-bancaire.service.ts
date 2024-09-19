import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IComptes} from "../../models/comptes";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CompteBancaireService {
  private baseUrl = 'http://localhost:3001';


  constructor(private http: HttpClient) { }

  getAllComptBancaire(): Observable<IComptes[]> {
    return this.http.get<IComptes[]>(`${this.baseUrl}/deposant/comptes`).pipe(
      tap(data => console.log('comptes data:', data))
    );
  }

  isAgentPayeur()
  {
    return true;
  }
}
