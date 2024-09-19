import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { EMPTY, Observable, mergeMap, of } from 'rxjs';
import {DepotExceptionnelService} from "./services/deposant/depot-exceptionnel.service";
import {DepotExceptionnel} from "./models/depot-exceptionnel";

@Injectable({
  providedIn: 'root'
})
export class DepotRoutingResolveService {

  constructor(protected service: DepotExceptionnelService, protected router: Router) { }
  resolve(route: ActivatedRouteSnapshot): Observable<DepotExceptionnel> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        mergeMap((declaration: HttpResponse<Console>) => {
          if (declaration.body) {
            return of(declaration.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new DepotExceptionnel());
  }
}
