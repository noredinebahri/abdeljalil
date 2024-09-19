import { Component } from '@angular/core';
import {StatusCompte} from "../../../../enums/status-compte";
import {CriticiteDossier} from "../../../../enums/criticite-dossier";
import {StatusRole} from "../../../../enums/role-statut";

@Component({
  selector: 'app-donnees-role',
  templateUrl: './donnees-role.component.html',
  styleUrl: './donnees-role.component.scss'
})
export class DonneesRoleComponent {

  getBadgeClass(status: string | undefined): string {
    switch (status) {
      case StatusRole.true:
        return 'badge Validée';
      case StatusRole.false:
        return 'badge Rejetée';
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
    window.history.back();
  }

}
