import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { Authority } from 'src/app/enums/authority';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit{

  ADMIN: string = Authority.ADMIN;
  menus :Menu[] = [
    {name: 'referentiel', authority: this.ADMIN,
      subMenus: [
        {name: 'marque', path: '/referentiel/marque', authority: this.ADMIN}
      ]
    }
  ];
  out: string = 'out';
  in: string = 'in';
  refState: string = this.out;

  constructor(
    private keycloakService: KeycloakService,
    private router:Router
  ) {
  }

  ngOnInit(): void {
  }

  isLoggedIn() : boolean{
    return this.keycloakService.isLoggedIn();
  }

  openMenu(menu: Menu): void {
    if (menu.subMenus && menu.subMenus.length > 0) {
      this.toggleMenu(menu.name);
    } else if (menu.path) {
      this.router.navigate([menu.path]);
    }
  }

  private toggleMenu(menu: string): void {
    switch (menu) {
      case 'referentiel':
        this.refState = this.refState === this.out ? this.in : this.out;
        break;
      default:
        break;
    }
  }
}

interface Menu {
  name: string;
  authority: string;
  path?: string;
  subMenus?: [{
    name: string;
    authority: string;
    path: string;
  }]
}
