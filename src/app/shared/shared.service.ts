import { Injectable } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  openSidebar: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  currencySymbol: BehaviorSubject<string> = new BehaviorSubject<string>('MAD');
  constructor(private translateService: TranslateService) {}
  setCurrencySymbol() {
    this.translateService.get('tools.currency.mad').subscribe((res: string) => {
       this.currencySymbol.next(res);
    });
  }

  setOpenSidebar(value:boolean){
    this.openSidebar.next(value);
  }
}
