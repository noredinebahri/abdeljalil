import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-update-password',
  templateUrl: './confirm-update-password.component.html',
  styleUrl: './confirm-update-password.component.scss'
})
export class ConfirmUpdatePasswordComponent {
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
