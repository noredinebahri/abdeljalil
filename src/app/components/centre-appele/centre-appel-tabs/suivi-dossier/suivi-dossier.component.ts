import { Component } from '@angular/core';

@Component({
  selector: 'app-suivi-dossier',
  templateUrl: './suivi-dossier.component.html',
  styleUrl: './suivi-dossier.component.scss'
})
export class SuiviDossierComponent {
  statusArray = [
    { date: '', text: 'lorem ipsum dolor' },
    { date: '18/10/2023 18:30', text: 'deposant.details.etatAvancementDossier.status.enAttenteInfoReglement',active:true},
    // { date: '18/10/2023 17:30', text: 'deposant.details.etatAvancementDossier.status.indemnisationCalculee'   },
    // { date: '18/10/2023 15:30', text: 'deposant.details.etatAvancementDossier.status.indemnisationCalculee'   },
    { date: '18/10/2023 13:30', text: 'deposant.details.etatAvancementDossier.status.indemnisationCalculee'   },
    { date: '18/10/2023 12:30', text: 'deposant.details.etatAvancementDossier.status.dossierCree' }
  ];

}
