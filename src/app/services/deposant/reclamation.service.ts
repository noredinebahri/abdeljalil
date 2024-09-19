import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IReclamation} from "../../models/reclamation";

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  private baseUrl = 'http://localhost:3001';

  constructor(private http: HttpClient) { }

  getAllReclamations(): Observable<IReclamation[]> {
    return this.http.get<IReclamation[]>(`${this.baseUrl}/deposant/reclamations`);
  }

  addReclamation(depot: IReclamation): Observable<IReclamation> {
    return this.http.post<IReclamation>(`${this.baseUrl}/deposant/addReclamation`, depot);
  }
}
