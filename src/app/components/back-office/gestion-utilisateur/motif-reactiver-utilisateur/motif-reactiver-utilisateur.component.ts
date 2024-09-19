import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmReactiverUtilisateurComponent } from '../confirm-reactiver-utilisateur/confirm-reactiver-utilisateur.component';

@Component({
  selector: 'app-motif-reactiver-utilisateur',
  templateUrl: './motif-reactiver-utilisateur.component.html',
  styleUrl: './motif-reactiver-utilisateur.component.scss'
})
export class MotifReactiverUtilisateurComponent {
  motif?: string;

  isRejeter: boolean = false;
  constructor(public activeModal: NgbActiveModal, private router: Router,private modalService: NgbModal) {}

  close() {
    this.activeModal.close();
  }

  confirm() {
    const confirmModalRef = this.modalService.open(ConfirmReactiverUtilisateurComponent, { size: 'lg', backdrop: 'static' });
    if(confirmModalRef){
      //console.log("TEST");
      
    }
  }

  back() {
    this.activeModal.dismiss({ action: 'back', data: null });
  }
  
}
