import { ConfigService } from 'src/app/core/config/config.service';
import { KeycloakService } from 'keycloak-angular';
import { Observable, catchError, of, switchMap, throwError } from 'rxjs';

export function initializer(keycloak: KeycloakService, configService: ConfigService): () => Observable<void> {
  return () => {
    return configService.init().pipe(
      switchMap(() => {
        const conf = configService.config;
        if (!conf) {
          return throwError(() => new Error('Configuration is not available.'));
        }
        return keycloak.init({
          config: {
            url: conf.KEYCLOAK_URI,
            realm: conf.REALM,
            clientId: conf.CLIENT_ID
          },
          initOptions: {
            onLoad: 'login-required',
            checkLoginIframe: false
          },
          bearerExcludedUrls: ['/assets'],
        });
      }),
      catchError((error) => {
        return throwError(() => error);
      }),
      switchMap(() => of(undefined)) 
    );
  };
}