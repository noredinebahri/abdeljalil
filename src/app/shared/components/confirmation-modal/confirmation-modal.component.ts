import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrl: './confirmation-modal.component.scss'
})
export class ConfirmationModalComponent {
  @Output() confirmDelete = new EventEmitter<void>();
  @Output() cancelDelete = new EventEmitter<void>();




title: string = '';
  @Input() value?: string = '';
  constructor(private activeModal: NgbActiveModal) {

  }
  close(result?: boolean) {
    this.activeModal.close(result);
  }

  cancel() {
    this.cancelDelete.emit();
    this.activeModal.close(false);
  }

  confirm(){
    this.confirmDelete.emit();
    this.close(true);
  }

}
