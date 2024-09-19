import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-reactiver-utilisateur',
  templateUrl: './confirm-reactiver-utilisateur.component.html',
  styleUrl: './confirm-reactiver-utilisateur.component.scss'
})
export class ConfirmReactiverUtilisateurComponent {
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
