import {Component, Input, input} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";
import {StatusDossier} from "../../../../../enums/status-dossier";

@Component({
  selector: 'app-confirmation-approbation-modal',
  templateUrl: './confirmation-approbation-modal.component.html',
  styleUrl: './confirmation-approbation-modal.component.scss'
})
export class ConfirmationApprobationModalComponent {
  isRejeter: boolean = false;
  constructor(public activeModal: NgbActiveModal, private router: Router) {}

  close() {
    this.activeModal.close();
  }

  confirm() {
    this.activeModal.close();
    // this.router.navigate(['/detail-reclamation'], { queryParams: { status: this.isDraft ? StatusDossier.BROUILLON : StatusDossier.EN_COURS } });
  }

  back() {
    this.activeModal.dismiss({ action: 'back', data: null });
  }

}
