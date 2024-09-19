import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gestion-instruction-payment',
  templateUrl: './gestion-instruction-payment.component.html',
  styleUrl: './gestion-instruction-payment.component.scss'
})
export class GestionInstructionPaymentComponent {


  showNavBar = true;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.subscribe(() => {
      const excludedRoutes = ['releve-indemnite', 'etat-dossier'];
      this.showNavBar = !excludedRoutes.some(route => this.router.url.includes(route));
    });
  }
}
