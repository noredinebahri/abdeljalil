import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IInstructionPaiment, InstructionPaiment } from 'src/app/models/instructionPaiment';
import { ActionClickEvent, ActionConfig, ColumnConfig, FilterField } from 'src/app/shared/components/table/table.config';
import { AnnulerInstructionPaiementComponent } from './annuler-instruction-paiement/annuler-instruction-paiement.component';
import { ValiderInstructionPaiementComponent } from './valider-instruction-paiement/valider-instruction-paiement.component';

@Component({
  selector: 'app-suivi-bloc-instruction-paiment',
  templateUrl: './suivi-bloc-instruction-paiment.component.html',
  styleUrl: './suivi-bloc-instruction-paiment.component.scss'
})
export class SuiviBlocInstructionPaimentComponent {
  constructor(private modalService: NgbModal, private formBuilder: FormBuilder, private router: Router) {}

  totalItemsTitle: string = "blocs d'instructions de paiement";
  totalItems: number = 500;

  columns: ColumnConfig[] = [
    { field: 'numeroBloc', header: 'instructionPaiment.table.numeroBloc', type: 'text'},
    { field: 'dateGeneration', header: 'instructionPaiment.table.dateGeneration', type: 'date'},
    { field: 'modeReglement', header: 'instructionPaiment.table.modeReglement', type: 'text'},
    { field: 'montant', header: 'instructionPaiment.table.montant', type: 'text'},
    { field: 'status', header: 'instructionPaiment.table.status', type: 'badge'},
  ];

  filterFields: FilterField[] = [
    { name: 'numeroBloc', placeholder: 'N° bloc', type: 'text', style: 'width: 10%;'},
    { name: 'dateGeneration', placeholder: 'Date génération', type: 'date', style: 'width: 10%;'},
    { name: 'montant', placeholder: 'Montant', type: 'text', style: 'width: 10%;'},
    { name: 'modeReglement', placeholder: 'Mode réglement', type: 'select' , options:[{ value: 'true', label: 'mode 1'}, { value: 'false', label: "mode 2"},{ value: 'true', label: 'mode 3'}], style: 'width: 10%' },
    { name: 'statut', placeholder: 'Statut', type: 'select' , options:[{ value: 'true', label: 'En attente de validation'}, { value: 'false', label: "Valider"},{ value: 'true', label: 'Anuuler'}], style: 'width: 20%' },
  ];

  filterFieldsAvance: FilterField[] = [
     ];

  

  tableData: InstructionPaiment[] = [
    {
      numeroDossier: "numeroDossier",
      numeroInstruction: "numeroInstruction",
      numeroReference: "numeroReference",
      modeReglement: "modeReglement",
      dateGeneration: new Date,
      dateEnvoi: new Date,
      dateExecution: new Date,
      status: "ANUULER",
      motif: "motif",
      numeroBloc: "N° 1",
      montant: "100 000,00"
    },
    {
      numeroDossier: "numeroDossier",
      numeroInstruction: "numeroInstruction",
      numeroReference: "numeroReference",
      modeReglement: "modeReglement",
      dateGeneration: new Date,
      dateEnvoi: new Date,
      dateExecution: new Date,
      status: "VALIDER",
      motif: "motif",
      numeroBloc: "N° 2",
      montant: "10 000,00"
    },
    {
      numeroDossier: "numeroDossier",
      numeroInstruction: "numeroInstruction",
      numeroReference: "numeroReference",
      modeReglement: "modeReglement",
      dateGeneration: new Date,
      dateEnvoi: new Date,
      dateExecution: new Date,
      status: "VALIDER",
      motif: "motif",
      numeroBloc: "N° 3",
      montant: "3 000,00"
    },
    {
      numeroDossier: "numeroDossier",
      numeroInstruction: "numeroInstruction",
      numeroReference: "numeroReference",
      modeReglement: "modeReglement",
      dateGeneration: new Date,
      dateEnvoi: new Date,
      dateExecution: new Date,
      status: "EN_ATTENTE_DE_VALIDATION",
      motif: "motif",
      numeroBloc: "N° 4",
      montant: "4 000,00"
    }
  ];

  actions: ActionConfig[] = [
    { label: 'valider', action: 'valider', icon: 'assets/images/icone/valider.svg' },
    { label: 'annuler', action: 'Annuler', icon: 'assets/images/icone/annuler.svg' },
    { label: 'telecharger', action: 'Télécharger', icon: 'assets/images/icone/telecharger.svg'},
  ];

  onActionClick(event: ActionClickEvent<IInstructionPaiment>): void {
    if (event.action === 'annuler') {
      this.openAnnulerInstructionPaiementModal();
    }
    if (event.action === 'valider') {
      this.openValiderInstructionPaiementModal();
    }
  }

  openAnnulerInstructionPaiementModal(){
    const modalRef = this.modalService.open(AnnulerInstructionPaiementComponent, { size: 'md', backdrop: 'static' });
    modalRef.result.then((status) => {
      console.log(status);
    }, () => {});
  }

  openValiderInstructionPaiementModal(){
    const modalRef = this.modalService.open(ValiderInstructionPaiementComponent, { size: 'md', backdrop: 'static' });
    modalRef.result.then((status) => {
      console.log(status);
    }, () => {});
  }
}
