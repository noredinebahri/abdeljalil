import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StatusRole } from 'src/app/enums/role-statut';
import { StatusDossier } from 'src/app/enums/status-dossier';

@Component({
  selector: 'app-donnees-fraudes',
  templateUrl: './donnees-fraudes.component.html',
  styleUrl: './donnees-fraudes.component.scss'
})
export class DonneesFraudesComponent {

  constructor(

    private router: Router
  ) {}

  getBadgeClass(status: string | undefined): string {
    switch (status) {
      case StatusRole.true:
        return 'badge Validée';
      case StatusRole.false:
        return 'badge Rejetée';
        case StatusDossier.EN_ATTENTE_DE_QUALIFICATION:
          return 'badge Nouvelle-demande';
      default:
        return 'badge';
    }
  }
  getTranslationKey(field: string | undefined): string {
    let category = '';
    if (field ===  StatusRole.true ||  StatusRole.false ) {
      category = 'enum.roleStatut.';
    }
    else {
      category = 'enum.statutDossier.';
    }
    return category;
  }

  goBack() {
    this.router.navigateByUrl(`/back-office/dossiers-frauduleux`);
  }

}
