import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {StatusReclamation} from "../../../../enums/status-reclamation";

@Component({
  selector: 'app-consult-reclamation',
  templateUrl: './consult-reclamation.component.html',
  styleUrl: './consult-reclamation.component.scss'
})
export class ConsultReclamationComponent {
  showTab: string  = 'reclamation';

  statusArray = [
    { date: '18/10/2023 00:00', text: 'Réclamation en cours de traitement.' },
    { date: '18/10/2023 00:00', text: 'Réclamation créée.' , active: true},
  ];
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
  }
  ngOnInit(): void {
    this.getReclamationId();
  }

  getBadgeReclamation(status: string | undefined): string {
    switch (status) {

      case StatusReclamation.OUVERTE:
        return 'badge Traitée';

      default:
        return 'badge';
    }
  }
  goBack(): void {
    this.router.navigateByUrl('/suivi-reclamation');
  }


  private getReclamationId(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      console.log("id: ", id);
    });
  }

  protected readonly StatusReclamation = StatusReclamation;
}
