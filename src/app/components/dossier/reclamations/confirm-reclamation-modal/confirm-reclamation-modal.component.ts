import {Component, Input} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";
import {StatusDossier} from "../../../../enums/status-dossier";
import {IReclamation} from "../../../../models/reclamation";

@Component({
  selector: 'app-confirm-reclamation-modal',
  templateUrl: './confirm-reclamation-modal.component.html',
  styleUrl: './confirm-reclamation-modal.component.scss'
})
export class ConfirmReclamationModalComponent {
  @Input() reclamationData?: IReclamation;
  @Input() isDraft: boolean = false;

  constructor(public activeModal: NgbActiveModal, private router: Router) {}

  close() {
    this.activeModal.close();
  }

  confirm() {
    this.activeModal.close(this.isDraft ? StatusDossier.BROUILLON : StatusDossier.EN_COURS);
    this.router.navigate(['/detail-reclamation'], { queryParams: { status: this.isDraft ? StatusDossier.BROUILLON : StatusDossier.EN_COURS } });
  }

  back() {
    this.activeModal.dismiss({ action: 'back', data: this.reclamationData });
  }

  consultFile(file: any) {
    const imageTypes = ['image/jpeg', 'image/png'];
    if (file.fileType === 'application/pdf' || file.fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || imageTypes.includes(file.fileType)) {
      window.open(file.url, '_blank');
    } else {
      console.log('File type not supported for in-browser viewing');
    }
  }
}
