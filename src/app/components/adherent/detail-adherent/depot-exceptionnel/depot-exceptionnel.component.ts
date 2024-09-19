import { Component } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";
import {ApprobationModalComponent} from "./approbation-modal/approbation-modal.component";
import {FormBuilder, FormGroup} from "@angular/forms";
import {
  ConfirmationApprobationModalComponent
} from "./confirmation-approbation-modal/confirmation-approbation-modal.component";
import {
  ConfirmReclamationModalComponent
} from "../../../dossier/reclamations/confirm-reclamation-modal/confirm-reclamation-modal.component";

@Component({
  selector: 'app-depot-exceptionnel',
  templateUrl: './depot-exceptionnel.component.html',
  styleUrl: './depot-exceptionnel.component.scss'
})
export class DepotExceptionnelComponent {
  statusDeclaration = [
    { date: "", text: 'adherent.depotExceptionnel.details.tabs.depotTemporaire.StatutDeclaration.enCours'},
    { date: '18/10/2023 18:00', text: 'adherent.depotExceptionnel.details.tabs.depotTemporaire.StatutDeclaration.declare',active: true},
  ];
  approbation: FormGroup;
  constructor(private modalService: NgbModal,
              private router: Router, private formBuilder: FormBuilder){
    this.approbation = this.formBuilder.group([{
      decision: [''],
      pieceJointe: [''],
    }
    ])
  }
  previousState(): void {
    window.history.back();
  }

  handleFile(event: any) {
    if (event && event.target && event.target.files && event.target.files.length > 0) {
      // this.attachedFile = event.target.files[0];
    }
  }
retour(){}
  envoyer(){}

  openConfirmationModal(isRejeter:  boolean) {
    const modalRef = this.modalService.open(ConfirmationApprobationModalComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.isRejeter = isRejeter;
    modalRef.result.then((status) => {
      if (status) {
        const confirmModalRef = this.modalService.open(ConfirmReclamationModalComponent, { size: 'lg', backdrop: 'static' });
        // confirmModalRef.componentInstance.reclamationData = reclamationData;
        // confirmModalRef.componentInstance.isDraft = (status === StatusDossier.BROUILLON);

        confirmModalRef.result.then((confirmStatus) => {
          if (confirmStatus === 'confirmed') {
            this.router.navigate(['/details-reclamation'], { queryParams: { status: status } });
          }
        }, () => {});
      }
    }, () => {});
  }

  openRejetModal() {
    const modalRef = this.modalService.open(ApprobationModalComponent, { size: 'lg', backdrop: 'static' });
    modalRef.result.then((status) => {
      if (status) {
        const confirmModalRef = this.modalService.open(ConfirmReclamationModalComponent, { size: 'lg', backdrop: 'static' });
        // confirmModalRef.componentInstance.reclamationData = reclamationData;
        // confirmModalRef.componentInstance.isDraft = (status === StatusDossier.BROUILLON);

        confirmModalRef.result.then((confirmStatus) => {
          if (confirmStatus === 'confirmed') {
            this.router.navigate(['/details-reclamation'], { queryParams: { status: status } });
          }
        }, () => {});
      }
    }, () => {});
  }
}
