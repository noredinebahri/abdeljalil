import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ContactInfo} from "../../models/contact-info";

@Injectable({
  providedIn: 'root'
})
export class ContactInfoService {
  private baseUrl = 'http://localhost:3001/contact-info';

  constructor(private http: HttpClient) { }

  updateContactInfo(contactInfo: ContactInfo) {
    return this.http.put<ContactInfo>(`${this.baseUrl}/${contactInfo.id}`, contactInfo);
  }
}
