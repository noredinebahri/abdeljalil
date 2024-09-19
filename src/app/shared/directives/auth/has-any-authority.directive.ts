/* eslint-disable  @typescript-eslint/no-explicit-any */

import { Directive, Input, TemplateRef, ViewContainerRef, OnDestroy } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { Subject } from 'rxjs';

@Directive({
  selector: '[appHasAnyAuthority]',
})
export class HasAnyAuthorityDirective implements OnDestroy {
  private readonly destroy$ = new Subject<void>();

  @Input()
  set appHasAnyAuthority(value: string | string[]) {
    const authorities: string[] = Array.isArray(value) ? value : [value];
    this.updateView(authorities);
  }

  constructor(private keycloakService: KeycloakService,
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}

  private updateView(authorities: string[]): void {
    const hasAnyAuthority = this.hasAnyAuthority(authorities);
    this.viewContainerRef.clear();
    if (hasAnyAuthority) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }

  private hasAnyAuthority(authorities: string[]): boolean {
    return this.keycloakService.isLoggedIn() &&
      this.keycloakService.getUserRoles().some((authority: string) => authorities.includes(authority));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
