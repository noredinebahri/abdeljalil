import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-deposant',
  templateUrl: './deposant.component.html',
  styleUrl: './deposant.component.scss'
})
export class DeposantComponent {
  showNavBar = true;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.subscribe(() => {
      const excludedRoutes = ['releve-indemnite', 'etat-dossier'];
      this.showNavBar = !excludedRoutes.some(route => this.router.url.includes(route));
    });
  }

}
