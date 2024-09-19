import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-valider-instruction-paiement',
  templateUrl: './valider-instruction-paiement.component.html',
  styleUrl: './valider-instruction-paiement.component.scss'
})
export class ValiderInstructionPaiementComponent {
  isRejeter: boolean = false;
  constructor(public activeModal: NgbActiveModal, private router: Router) {}

  close() {
    this.activeModal.close();
  }

  confirm() {
    this.activeModal.close();
  }

  back() {
    this.activeModal.dismiss({ action: 'back', data: null });
  }
}
