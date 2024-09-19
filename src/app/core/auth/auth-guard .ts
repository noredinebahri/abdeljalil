import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { inject } from '@angular/core';

export function AuthGuard(route: ActivatedRouteSnapshot): Promise<boolean> {
  const keycloak = inject(KeycloakService);
  const router = inject(Router);

  return new Promise((resolve) => {
    if (!keycloak.isLoggedIn()) {
      router.navigate(['']);
      return resolve(false);
    }
    const requiredRoles = route.data['roles'];
    if (!Array.isArray(requiredRoles) || requiredRoles.length === 0) {
      return true;
    }
    const roles = keycloak.getUserRoles();
    const granted = requiredRoles.some(role => roles && roles.includes(role));
    if (!granted) {
      router.navigate(['']);
    }
    resolve(granted);
  });
}