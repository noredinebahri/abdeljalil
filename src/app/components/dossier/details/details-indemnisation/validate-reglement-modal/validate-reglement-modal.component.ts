import {Component, Input} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-validate-reglement-modal',
  templateUrl: './validate-reglement-modal.component.html',
  styleUrls: ['./validate-reglement-modal.component.scss']
})
export class ValidateReglementModalComponent {
  @Input() content: string = "";
  currentStep: number = 1;

  agentsPayeurs = [
    { value: '1', label: 'Agent 1' },
    { value: '2', label: 'Agent 2' },
    // Add more options as needed
  ];

  constructor(public activeModal: NgbActiveModal) {}

  close() {
    this.activeModal.close();
  }

  dismiss() {
    this.activeModal.dismiss();
  }
}
