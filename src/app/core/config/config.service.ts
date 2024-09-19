import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, shareReplay } from 'rxjs/operators';
import { Config } from './config';

@Injectable({ providedIn: 'root' })
export class ConfigService {

  private conf: Config | undefined;

  constructor(private http: HttpClient) {}

  init(): Observable<void> {
    return this.http.get<Config>('assets/env.json').pipe(
      map((config: Config) => {
        this.conf = config;
      }),
      catchError(error => {
        return throwError(() => error);
      }),
      shareReplay(1)
    );
  }

  get config(): Config | undefined {
    return this.conf;
  }
}