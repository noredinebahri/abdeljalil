import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { KeycloakService } from 'keycloak-angular';
import { LANGUAGE } from 'src/app/enums/language';
import { getLangue } from 'src/app/shared/utils/langue-util';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  isNavbarCollapsed = true;

  languages = Object.values(LANGUAGE);

  constructor(
    private keycloakService: KeycloakService,
    private translateService: TranslateService
  ) {
  }

  ngOnInit(): void {
  }

  collapseNavbar(): void {
    this.isNavbarCollapsed = true;
  }

  logout(): void {
    this.keycloakService.logout();
  }

  isLoggedIn() : boolean{
    return this.keycloakService.isLoggedIn();
  }

  toggleNavbar(): void {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  changeLang(langKey: string): void {
    this.translateService.use(langKey);
    this.collapseNavbar();
  }

  getLang(lang: string): string {
    return getLangue(lang);
  }

  isActiveLang(lang: string): boolean {
    return this.translateService.currentLang === lang;
  }

}
