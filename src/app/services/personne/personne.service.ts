import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IPersonne} from "../../models/personne";

@Injectable({
  providedIn: 'root'
})
export class PersonneService {
  private baseUrl = 'http://localhost:3001/personne';

  constructor(private http: HttpClient) { }

  getPersonnesById(id: number) {
    return this.http.get<IPersonne>(`${this.baseUrl}/${id}`);
  }
}
