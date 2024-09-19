import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IInstructionPaiment, InstructionPaiment } from 'src/app/models/instructionPaiment';
import { ActionClickEvent, ActionConfig, ColumnConfig, FilterField } from 'src/app/shared/components/table/table.config';

@Component({
  selector: 'app-suivi-instruction-paiment',
  templateUrl: './suivi-instruction-paiment.component.html',
  styleUrl: './suivi-instruction-paiment.component.scss'
})
export class SuiviInstructionPaimentComponent {

  constructor(private modalService: NgbModal, private formBuilder: FormBuilder, private router: Router) {}

  totalItemsTitle: string = "instructions de paiement";
  totalItems: number = 500;

  columns: ColumnConfig[] = [
    { field: 'numeroDossier', header: 'instructionPaiment.table.numeroDossier', type: 'text'},
    { field: 'numeroReference', header: 'instructionPaiment.table.numeroReference', type: 'text'},
    { field: 'modeReglement', header: 'instructionPaiment.table.modeReglement', type: 'text'},
    { field: 'dateGeneration', header: 'instructionPaiment.table.dateGeneration', type: 'date'},
    { field: 'dateEnvoi', header: 'instructionPaiment.table.dateEnvoi', type: 'date'},
    { field: 'dateExecution', header: 'instructionPaiment.table.dateExecution', type: 'date'},
    { field: 'status', header: 'instructionPaiment.table.status', type: 'badge'},
    { field: 'motif', header: 'instructionPaiment.table.motif', type: 'text'},
  ];

  filterFields: FilterField[] = [
    { name: 'numeroDossier', placeholder: 'N° dossier', type: 'text', style: 'width: 30%;'},
    { name: 'numeroInstruction', placeholder: 'N° instruction', type: 'text', style: 'width: 30%;'},
    { name: 'numeroReference', placeholder: 'N° référence', type: 'text', style: 'width: 30%;' },
    { name: 'modeReglement', placeholder: 'Mode règlement', type: 'select' , options:[{ value: 'true', label: 'mode 1'}, { value: 'false', label: "mode 2"},{ value: 'true', label: 'mode 3'}], style: 'width: 20%' },
    { name: 'statut', placeholder: 'Statut', type: 'select' , options:[{ value: 'true', label: 'S1'}, { value: 'false', label: "S2"},{ value: 'true', label: 'S3'}], style: 'width: 20%' },
  ];

  filterFieldsAvance: FilterField[] = [
    { name: 'numeroDossier', placeholder: 'N° dossier', type: 'text', style: 'width: 10%;'},
    { name: 'numeroInstruction', placeholder: 'N° instruction', type: 'text', style: 'width: 10%;'},
    { name: 'numeroReference', placeholder: 'N° réference', type: 'text', style: 'width: 10%;' },
    { name: 'modeReglement', placeholder: 'Mode réglement', type: 'text', style: 'width: 50%;'},
    { name: 'dateExecution', placeholder: 'Date exécution', type: 'date', style: 'width: 20%;'},
    { name: 'dateGeneration', placeholder: 'Date génération', type: 'date' , style: 'width: 20%;' },
    { name: 'statut', placeholder: 'Statut', type: 'select' , options:[{ value: 'true', label: 'S1'}, { value: 'false', label: "S2"},{ value: 'true', label: 'S3'}], style: 'width: 20%' },
  ];

  

  tableData: InstructionPaiment[] = [
    {
      numeroDossier: "TEST 1234",
      numeroInstruction: "numeroInstruction",
      numeroReference: "numeroReference",
      modeReglement: "modeReglement",
      dateGeneration: new Date,
      dateEnvoi: new Date,
      dateExecution: new Date,
      status: "REJECTEE",
      motif: "motif",
    },
    {
      numeroDossier: "numeroDossier",
      numeroInstruction: "numeroInstruction",
      numeroReference: "numeroReference",
      modeReglement: "modeReglement",
      dateGeneration: new Date,
      dateEnvoi: new Date,
      dateExecution: new Date,
      status: "INITIALE",
      motif: "motif",
    },
    {
      numeroDossier: "numeroDossier",
      numeroInstruction: "numeroInstruction",
      numeroReference: "numeroReference",
      modeReglement: "modeReglement",
      dateGeneration: new Date,
      dateEnvoi: new Date,
      dateExecution: new Date,
      status: "EXECUTEE",
      motif: "motif",
    },
    {
      numeroDossier: "numeroDossier",
      numeroInstruction: "numeroInstruction",
      numeroReference: "numeroReference",
      modeReglement: "modeReglement",
      dateGeneration: new Date,
      dateEnvoi: new Date,
      dateExecution: new Date,
      status: "REJECTEE",
      motif: "motif",
    }
  ];

  actions: ActionConfig[] = [
    { label: 'recycler', action: 'recycler', icon: 'assets/images/icone/recycler.svg' }
  ];

  onActionClick(event: ActionClickEvent<IInstructionPaiment>): void {
    if (event.action === 'recycler') {
      this.router.navigateByUrl('details-instruction-paiment');
  }
}
  
}
