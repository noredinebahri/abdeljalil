import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DossiersFrauduleux } from 'src/app/models/dossiersFrauduleux';
import { ActionClickEvent, ActionConfig, ColumnConfig, FilterField } from 'src/app/shared/components/table/table.config';

@Component({
  selector: 'app-dossiers-frauduleux',
  templateUrl: './dossiers-frauduleux.component.html',
  styleUrl: './dossiers-frauduleux.component.scss'
})
export class DossiersFrauduleuxComponent {

  totalItems: number = 0;

  constructor(
    private router: Router
  ) {}


  filterFields: FilterField[] = [
    { name: 'ndossier', placeholder: 'N° dossier', type: 'text' },
    { name: 'nFraude', placeholder: 'N° fraude', type: 'text' },
    { name: 'dateIdFraude', placeholder: 'Date identification fraude', type: 'date-range' },
    { name: 'dateGel', placeholder: 'Date gel', type: 'date-range' },
    { name: 'motifGel', placeholder: 'Motif gel', type: 'text' },
  ];

  filterFieldsAvance: FilterField[] = [
    { name: 'ndossier', placeholder: 'N° dossier', type: 'text'},
    { name: 'nFraude', placeholder: 'N° fraude', type: 'text' },
    { name: 'dateGel', placeholder: 'Date gel', type: 'date-range' },
    { name: 'dateIdFraude', placeholder: 'Date id fraude', type: 'date-range' },
    { name: 'motifGel', placeholder: 'Motif gel', type: 'text' },
    { name: 'agentTraitant', placeholder: 'Agent traitant', type: 'text' },
    { name: 'dateDecision', placeholder: 'Date decision', type: 'date-range' },
    { name: 'status', placeholder: 'status', type: 'text' },
    { name: 'dateVerification', placeholder: 'Date Vérification', type: 'date-range' },
    { name: 'motifVerification', placeholder: 'Motif Vérification', type: 'text' },
    { name: 'responsableVerification', placeholder: 'Responsable Vérification', type: 'text' },
    { name: 'dateValidation', placeholder: 'Date Validation', type: 'date-range' },
    { name: 'motifValidation', placeholder: 'Motif Validation', type: 'text' },
    { name: 'responsableValidation', placeholder: 'Responsable Validation', type: 'text' },
    { name: 'dateDégel', placeholder: 'Date Dégel', type: 'date-range' },
    { name: 'motifDégel', placeholder: 'Motif Dégel', type: 'text' },
    { name: 'responsableDégel', placeholder: 'Responsable Dégel', type: 'text' },

  ];





  actions: ActionConfig[] = [
    { label: 'consult', action: 'consult', icon: 'assets/images/icone/consult.svg' },
  ];

  columns: ColumnConfig[] = [
    { field: 'ndossier', header: 'N° dossier', type: 'text', style: 'width: 10%;' },
    { field: 'nFraude', header: 'N° fraude', type: 'text', style: 'width: 23%;' },
    { field: 'dateGel', header: 'Date gel', type: 'text', style: 'width: 23%;' },
    { field: 'dateIdFraude', header: 'Date id fraude', type: 'text', style: 'width: 23%;' },
    { field: 'motifGel', header: 'Motif gel', type: 'text', style: 'width: 23%;' },
    { field: 'agentTraitant', header: 'Agent traitant', type: 'text', style: 'width: 23%;' },
    { field: 'dateDecision', header: 'Date decision', type: 'text', style: 'width: 23%;' },
    { field: 'status', header: 'status', type: 'badge', style: 'width: 23%;' }
  ];



  totalItemsTitle: string = "dossiers frauduleux";

  tableData: DossiersFrauduleux[] = [
    {
      "ndossier": "RR20082004",
      "nFraude": "RR20082004",
      "dateGel": "2022-01-01",
      "dateIdFraude": "2022-01-01",
      "motifGel": "01/01/2022",
      "agentTraitant": "EN_COURS",
      "dateDecision": "2022-01-01",
      "status": "EN_ATTENTE_DE_QUALIFICATION"
    },
    {
      "ndossier": "RR20082004",
      "nFraude": "RR20082004",
      "dateGel": "2022-01-01",
      "dateIdFraude": "2022-01-01",
      "motifGel": "01/01/2022",
      "agentTraitant": "EN_COURS",
      "dateDecision": "2022-01-01",
      "status": "EN_ATTENTE_DE_QUALIFICATION"
    },
    {
      "ndossier": "RR20082004",
      "nFraude": "RR20082004",
      "dateGel": "2022-01-01",
      "dateIdFraude": "2022-01-01",
      "motifGel": "01/01/2022",
      "agentTraitant": "EN_COURS",
      "dateDecision": "2022-01-01",
      "status": "FRAUDE_VALIDEE"
    },
    {
      "ndossier": "RR20082004",
      "nFraude": "RR20082004",
      "dateGel":"2022-01-01",
      "dateIdFraude": "2022-01-01",
      "motifGel": "01/01/2022",
      "agentTraitant": "EN_COURS",
      "dateDecision": "2022-01-01",
      "status": "EN_ATTENTE_APPROBATION"
    },
    {
      "ndossier": "RR20082004",
      "nFraude": "RR20082004",
      "dateGel": "2022-01-01",
      "dateIdFraude": "2022-01-01",
      "motifGel": "01/01/2022",
      "agentTraitant": "EN_COURS",
      "dateDecision": "2022-01-01",
      "status": "EN_ATTENTE_APPROBATION"
        },
    {
      "ndossier": "RR20082004",
      "nFraude": "RR20082004",
      "dateGel": "2022-01-01",
      "dateIdFraude": "2022-01-01",
      "motifGel": "01/01/2022",
      "agentTraitant": "EN_COURS",
      "dateDecision": "2022-01-01",
      "status": "FRAUDE_VALIDEE"
    },
    {
      "ndossier": "RR20082004",
      "nFraude": "RR20082004",
      "dateGel": "2022-01-01",
      "dateIdFraude": "2022-01-01",
      "motifGel": "01/01/2022",
      "agentTraitant": "EN_COURS",
      "dateDecision":"2022-01-01",
      "status": "EN_ATTENTE_DE_QUALIFICATION"
    },
    {
      "ndossier": "RR20082004",
      "nFraude": "RR20082004",
      "dateGel": "2022-01-01",
      "dateIdFraude": "2022-01-01",
      "motifGel": "01/01/2022",
      "agentTraitant": "EN_COURS",
      "dateDecision": "2022-01-01",
      "status": "EN_ATTENTE_DE_QUALIFICATION"
    },
    {
      "ndossier": "RR20082004",
      "nFraude": "RR20082004",
      "dateGel": "2022-01-01",
      "dateIdFraude": "2022-01-01",
      "motifGel": "01/01/2022",
      "agentTraitant": "EN_COURS",
      "dateDecision": "2022-01-01",
      "status": "FRAUDE_VALIDEE"
    },
    {
      "ndossier": "RR20082004",
      "nFraude": "RR20082004",
      "dateGel": "2022-01-01",
      "dateIdFraude": "2022-01-01",
      "motifGel": "01/01/2022",
      "agentTraitant": "EN_COURS",
      "dateDecision": "2022-01-01",
      "status": "FRAUDE_VALIDEE"
    },
    {
      "ndossier": "RR20082004",
      "nFraude": "RR20082004",
      "dateGel": "2022-01-01",
      "dateIdFraude": "2022-01-01",
      "motifGel": "01/01/2022",
      "agentTraitant": "EN_COURS",
      "dateDecision": "2022-01-01",
      "status": "EN_ATTENTE_APPROBATION"
    },
    {
      "ndossier": "RR20082004",
      "nFraude": "RR20082004",
      "dateGel": "2022-01-01",
      "dateIdFraude": "2022-01-01",
      "motifGel": "01/01/2022",
      "agentTraitant": "EN_COURS",
      "dateDecision": "2022-01-01",
      "status": "EN_ATTENTE_APPROBATION"
    },
  ];

  handlePageChange(newPage: number): void {
    console.log('New page:', newPage);
  }

  handleAction(event: ActionClickEvent<DossiersFrauduleux>): void {
    if(event.action==='consult'){
      this.router.navigateByUrl(`/back-office/donnees-fraudes/dossier-fraude`);


    }
  }

  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }


}
