import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { ToastService } from 'src/app/shared/components/toast/toast.service';
import { ConfirmAjouterUtilisateurComponent } from '../gestion-utilisateur/confirm-ajouter-utilisateur/confirm-ajouter-utilisateur.component';

@Component({
  selector: 'app-nouveau-utilisateur',
  templateUrl: './nouveau-utilisateur.component.html',
  styleUrl: './nouveau-utilisateur.component.scss'
})
export class NouveauUtilisateurComponent {

  utilisateurForm: FormGroup;
  referentiel: string = '';
  isDisabled: boolean  = true;
  isSubmitted:boolean  = false;
 
  constructor(private fb: FormBuilder,public activeModal: NgbActiveModal, private translateService: TranslateService,
    private router: Router, private toastService : ToastService,private modalService: NgbModal) {
      
    this.utilisateurForm = this.fb.group({
      login: [null, Validators.required],
      nom: [null, Validators.required],
      prenom: [null, Validators.required],
      entityType: [null, Validators.required],
      entity: [null, Validators.required],
      role: [null, Validators.required],
      telephone: [null, Validators.required],
      email: [null, Validators.required]
    });
  }

  saveUtilisateur(): void {
    this.activeModal.close();
   // if(this.utilisateurForm.valid){
      const confirmModalRef = this.modalService.open(ConfirmAjouterUtilisateurComponent, { size: 'lg', backdrop: 'static' });
      if(confirmModalRef){
        console.log("add some logic here");
      }
   // }
   this.toastService.showSuccess('l\'utilisateur a été crée avec succès.');

  }

  ngOnInit() {
  }

  close() {
    this.activeModal.close();
  }

  cancel() {
    this.activeModal.close();
  }

  confirm(){
    this.close();
  }
  back(){
    this.isSubmitted = false;
  }
  save() {
    if(this.utilisateurForm){
      this.isSubmitted = true;
    }
  }
}
