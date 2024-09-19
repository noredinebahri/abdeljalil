import {Component, Input} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";
import {IReclamation} from "../../../../../../models/reclamation";
import {StatusReclamation} from "../../../../../../enums/status-reclamation";

@Component({
  selector: 'app-confirm-reclamation-modal',
  templateUrl: './confirm-response-reclamation-modal.html',
  styleUrl: './confirm-response-reclamation-modal.scss'
})
export class ConfirmResponseReclamationModal {
  @Input() responseReclamation?: IReclamation;
  @Input() isDraft: boolean = false;

  constructor(public activeModal: NgbActiveModal, private router: Router) {}

  close() {
    this.activeModal.close();
  }

  confirm() {
    this.activeModal.close( StatusReclamation.REPONDUE);
  }

  back() {
    this.activeModal.dismiss({ action: 'back', data: this.responseReclamation });
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
