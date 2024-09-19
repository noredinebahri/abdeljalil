import { APP_INITIALIZER, NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LoaderInterceptor } from './interceptors/loader-interceptor.service';
import { ErrorHandlerInterceptor } from './interceptors/error-handler.interceptor';
import { initializer } from './init/app-init';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { ConfigService } from './config/config.service';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { LANGUAGE } from '../enums/language';



@NgModule({
  imports: [
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'X-XSRF-TOKEN'
    }),
    KeycloakAngularModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => new TranslateHttpLoader(http, 'assets/i18n/', '.json'),
        deps: [HttpClient]
      }
    }),
    NgbAlertModule
  ],
  providers: [
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: initializer,
    //   multi: true,
    //   deps: [KeycloakService, ConfigService ]
    // },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorHandlerInterceptor, multi: true }
  ]
})
export class CoreModule {

  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang(LANGUAGE.FR);
    this.translateService.use(LANGUAGE.FR);
  }

 }
