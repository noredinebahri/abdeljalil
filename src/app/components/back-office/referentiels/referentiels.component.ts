import { Component } from '@angular/core';
import { Reference } from 'src/app/models/reference';
import { NavItem } from 'src/app/shared/components/responsive-navbar/responsive-navbar.component';
import {ActionClickEvent, ActionConfig, ColumnConfig, FilterField} from 'src/app/shared/components/table/table.config';
import {Router} from "@angular/router";

@Component({
  selector: 'app-referentiels',
  templateUrl: './referentiels.component.html',
  styleUrl: './referentiels.component.scss'
})
export class ReferentielsComponent {


  totalItemsTitle: string = "référentiels";
  totalItems: number =5;

  columns: ColumnConfig[] = [
    { field: 'numReferentiel', header: 'deposant.reference.table.N°reference', type: 'text', style: 'width: 10%;' },
    { field: 'referentiel', header: 'deposant.reference.table.Reference', type: 'text', style: 'width: 83%;' },
  ];
  actions: ActionConfig[] = [
    { label: 'consult', action: 'consult', icon: 'assets/images/icone/consult.svg' },
  ];

  filterFields: FilterField[] = [

    { name: 'numReferentiel', placeholder: 'N° référentiel', type: 'text' },
    { name: 'referentiel', placeholder: 'Référentiel', type: 'text' },
  ];

  tableData: Reference[] = [
    {
      numReferentiel: "1",
      referentiel: "Nature des dépôts exceptionnels",
      routerLink: "nature-depots-exceptionnels"
    },
    {
      numReferentiel: "2",
      referentiel: "Nationalité / Pays de naissance",
      routerLink: ""
    },
    {
      numReferentiel: "3",
      referentiel: "Forme juridique",
      routerLink: "forme-juridique"
    },
    {
      numReferentiel: "4",
      referentiel: "Nature de l’identifiant du déposant physique",
      routerLink: "nature-identifiant-deposant-physique"
    },
    {
      numReferentiel: "5",
      referentiel: " Nature de l’identifiant du déposant",
      routerLink: "nature-identifiant-deposant"
    },
    {
      numReferentiel: "6",
      referentiel: "Libellé PCEC",
      routerLink: "libelle-pcec"
    },
    {
      numReferentiel: "7",
      referentiel: "Devise",
      routerLink: "devise"
    },
    {
      numReferentiel: "8",
      referentiel: "Comptes NSTP",
      routerLink: "comtes-nstp"
    },
    {
      numReferentiel: "9",
      referentiel: "Établissements adhérents",
      routerLink: "etablissement-adherent"
    },
    {
      numReferentiel: "10",
      referentiel: "Detection Fraude",
      routerLink: "detection-fraude"
    },
    {
      numReferentiel: "11",
      referentiel: "Ville",
      routerLink: "ville"
    },
    {
      numReferentiel: "12",
      referentiel: "Pays",
      routerLink: "pays"
    },
    {
      numReferentiel: "13",
      referentiel: "Agent payeur",
      routerLink: "list-agent-payeur"
    },
    {
      numReferentiel: "14",
      referentiel: "Motifs de rejet d'instruction de paiement",
      routerLink: "motifs-rejet-instruction-paiement"
    },
    {
      numReferentiel: "15",
      referentiel: "Agence",
      routerLink: "list-agence"
    },
    {
      numReferentiel: "16",
      referentiel: "Criticité de réclamation",
      routerLink: "list-criticite-reclamation"
    }
  ];
  constructor(private router: Router) {
  }
  onActionClick(event: ActionClickEvent<any>): void {
    if (event.action === 'consult') {
      this.router.navigateByUrl('back-office/'+event.item.routerLink);
    }
  }
}
