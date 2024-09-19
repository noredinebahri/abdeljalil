import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-ajouter-utilisateur',
  templateUrl: './confirm-ajouter-utilisateur.component.html',
  styleUrl: './confirm-ajouter-utilisateur.component.scss'
})
export class ConfirmAjouterUtilisateurComponent {
  isRejeter: boolean = false;
  constructor(public activeModal: NgbActiveModal, private router: Router) {}

  close() {
    this.activeModal.close();
  }

  confirm() {
    this.activeModal.close();
    this.router.navigateByUrl('back-office/consult-utilisateur');
  }

  back() {
    this.activeModal.dismiss({ action: 'back', data: null });
  }
}
