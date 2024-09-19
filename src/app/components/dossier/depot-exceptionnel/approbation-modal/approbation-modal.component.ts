import { Component } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {TranslateService} from "@ngx-translate/core";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastService} from "../../../../../shared/components/toast/toast.service";

@Component({
  selector: 'app-approbation-modal',
  templateUrl: './approbation-modal.component.html',
  styleUrl: './approbation-modal.component.scss'
})
export class ApprobationModalComponent {
  approbation: FormGroup;
  constructor(public activeModal: NgbActiveModal, private translateService: TranslateService,
              private router: Router, private formBuilder: FormBuilder, private toastService : ToastService) {
    this.approbation = this.formBuilder.group([{
      decision: [''],
      pieceJointe: [''],
    }
    ])
  }
  close() {
    this.activeModal.close();
  }

  retour() {
    this.activeModal.close();
  }

  envoyer() {
    // this.saveData(StatusDossier.EN_COURS);
  }

  handleFile(event: any) {
    if (event && event.target && event.target.files && event.target.files.length > 0) {
      // this.attachedFile = event.target.files[0];
    }
  }
}
