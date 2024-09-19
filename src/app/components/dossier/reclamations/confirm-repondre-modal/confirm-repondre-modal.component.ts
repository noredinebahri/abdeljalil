import { Component } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";

@Component({
  selector: 'app-confirm-repondre-modal',
  templateUrl: './confirm-repondre-modal.component.html',
  styleUrl: './confirm-repondre-modal.component.scss'
})
export class ConfirmRepondreModalComponent {
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
