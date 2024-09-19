import {Component, Input} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";
import {StatusDossier} from "../../../../enums/status-dossier";

@Component({
  selector: 'app-confirm-cloturer-reclamation-modal',
  templateUrl: './confirm-cloturer-reclamation-modal.component.html',
  styleUrl: './confirm-cloturer-reclamation-modal.component.scss'
})
export class ConfirmCloturerReclamationModalComponent {
  @Input() isConfirmed: boolean = false;
  constructor(public activeModal: NgbActiveModal, private router: Router) {}

  close() {
    this.activeModal.close();
  }

  confirm() {
    this.isConfirmed = true;
    this.activeModal.close(this.isConfirmed ? StatusDossier.CLOTUREE : StatusDossier.EN_COURS);
  }

  back() {
    this.activeModal.dismiss({ action: 'back'});
  }
}
