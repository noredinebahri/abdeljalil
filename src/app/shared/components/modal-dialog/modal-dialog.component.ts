import { Component } from '@angular/core';

import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { ModalDialog } from './modal-dialog';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.css']
})

export class ModalDialogComponent {
  data?: ModalDialog;

  constructor(private activeModal: NgbActiveModal) { }

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirm(): void {
    this.activeModal.close('ok');
  }

}
