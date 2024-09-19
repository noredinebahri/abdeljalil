import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-annuler-instruction-paiement',
  templateUrl: './annuler-instruction-paiement.component.html',
  styleUrl: './annuler-instruction-paiement.component.scss'
})
export class AnnulerInstructionPaiementComponent {

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
