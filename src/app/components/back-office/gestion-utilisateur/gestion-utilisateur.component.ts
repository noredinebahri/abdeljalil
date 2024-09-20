import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Utilisateur } from 'src/app/models/utilisateur';
import { ActionClickEvent, ActionConfig, ColumnConfig, FilterField } from 'src/app/shared/components/table/table.config';
import { NouveauUtilisateurComponent } from '../nouveau-utilisateur/nouveau-utilisateur.component';
import { ConfirmAjouterUtilisateurComponent } from './confirm-ajouter-utilisateur/confirm-ajouter-utilisateur.component';
import { ConfirmReactiverUtilisateurComponent } from './confirm-reactiver-utilisateur/confirm-reactiver-utilisateur.component';
import { ConfirmUpdatePasswordComponent } from './confirm-update-password/confirm-update-password.component';
import { MotifReactiverUtilisateurComponent } from './motif-reactiver-utilisateur/motif-reactiver-utilisateur.component';
import { ConfirmDesactiverUtilisateurComponent } from './confirm-desactiver-utilisateur/confirm-desactiver-utilisateur.component';
import { StatusDossier } from 'src/app/enums/status-dossier';
 @Component({
  selector: 'app-gestion-utilisateur',
  templateUrl: './gestion-utilisateur.component.html',
  styleUrl: './gestion-utilisateur.component.scss'
})
export class GestionUtilisateurComponent {

  constructor(private modalService: NgbModal, private formBuilder: FormBuilder, private router: Router) {}

  totalItemsTitle: string = "Utilisateurs";
  totalItems: number = 500;

  updateButtonAction: () => void = () => this.openAddUtilisateurModal();

  columns: ColumnConfig[] = [
    { field: 'login', header: 'deposant.gestionUtilisateur.table.login', type: 'text'},
    { field: 'fullname', header: 'deposant.gestionUtilisateur.table.fullname', type: 'text'},
    { field: 'email', header: 'deposant.gestionUtilisateur.table.email', type: 'text'},
    { field: 'typeEntite', header: 'deposant.gestionUtilisateur.table.typeEntite', type: 'text'},
    { field: 'entite', header: 'deposant.gestionUtilisateur.table.entite', type: 'text'},
    { field: 'statut', header: 'deposant.gestionUtilisateur.table.statut', type: 'badge'},
  ];

  filterFields: FilterField[] = [
    { name: 'login', placeholder: 'Login', type: 'text', style: 'width: 30%;'},
    { name: 'nom', placeholder: 'Nom', type: 'text', style: 'width: 30%;'},
    { name: 'prenom', placeholder: 'Prénom', type: 'text', style: 'width: 30%;' },
    { name: 'email', placeholder: 'Email', type: 'text', style: 'width: 30%;'},
    { name: 'statut', placeholder: 'Statut', type: 'select' , options:[{ value: 'true', label: StatusDossier.ACTIVER}, { value: 'false', label: StatusDossier.DESACTIVER}], style: 'width: 20%' },
  ];

  filterFieldsAvance: FilterField[] = [
    { name: 'login', placeholder: 'Login', type: 'text', style: 'width: 10%;'},
    { name: 'nom', placeholder: 'Nom', type: 'text', style: 'width: 10%;'},
    { name: 'prenom', placeholder: 'Prénom', type: 'text', style: 'width: 10%;' },
    { name: 'telephone', placeholder: 'N Téléphone', type: 'text', style: 'width: 50%;'},
    { name: 'email', placeholder: 'Email', type: 'text', style: 'width: 20%;'},
     { name: 'role', placeholder: 'Role', type: 'select' , 
     options:[{ value: 'true', label: 'role 1'}, { value: 'false', label: "role 2"},{ value: 'true', label: 'role 3'}], style: 'width: 30%', col: 'col-6' },
    { name: 'statut', placeholder: 'Statut', type: 'select' , options:[{ value: 'true', label: StatusDossier.ACTIVER}, { value: 'false', label: StatusDossier.DESACTIVER}], style: 'width: 20%' , col: 'col-6' },
    { name: 'entite', placeholder: 'Service/ Banque', type: 'select' , options:[{ value: 'true', label: 'E1'}, { value: 'false', label: "E2"},{ value: 'true', label: 'E3'}], style: 'width: 20%', col: 'col-6'},
    { name: 'typeEntite', placeholder: 'Unité organisationnelle', type: 'select' , options:[{ value: 'true', label: 'SGFG'}, { value: 'false', label: "Centre d'appel"},{ value: 'true', label: 'Adhérent'}], style: 'width: 30%', col: 'col-6' },
  ];

  

  tableData: Utilisateur[] = [
    {
      login: 'login 1',
      fullname: 'Test 1',
      email: "test@gmail.ma",
      entite: 'Entity 1',
      typeEntite: 'Type 1',
      statut: false
    },
    {
      login: 'login 2',
      fullname: 'Test 2',
      email: "test4@gmail.ma",
      entite: 'Entity 2',
      typeEntite: 'Type 2',
      statut: true
    },
    {
      login: 'login 3',
      fullname: 'Test 3',
      email: "test3@gmail.ma",
      entite: 'Entity 3',
      typeEntite: 'Type 3',
      statut: false
    },
    {
      login: 'login 4',
      fullname: 'Test 2',
      email: "tesT2@gmail.ma",
      entite: 'Entity 2',
      typeEntite: 'Type 4',
      statut: true
    }
  ];

  actions: ActionConfig[] = [
    { label: 'consult', action: 'consult', icon: 'assets/images/icone/consult.svg' },
    { label: 'reinitialiserMotDePasse', action: 'Réinitialiser le mot de passe', icon: 'assets/images/icone/resetPassword.svg' },
    { label: 'reactiver', action: 'reactiver', icon: 'assets/images/icone/reactiver.svg', fieldCondition: 'statut', condition: true},
    { label: 'desactiver', action: 'desactiver', icon: 'assets/images/icone/desactiver.svg', fieldCondition: 'statut', condition: false },
  ];

  onActionClick(event: ActionClickEvent<Utilisateur>): void {
    if (event.action === 'consult') {
      this.router.navigateByUrl('back-office/consult-utilisateur');
    }
    if (event.action === 'reactiver') {
      this.openReactiverUtilisateurModal();
    }
    if (event.action === 'reinitialiserMotDePasse') {
      this.openReinitialiserMotDePasseUtilisateurModal();
    }
    if (event.action === 'desactiver') {
      this.openDesactiverUtilisateurModal();
    }
  }

  openAddUtilisateurModal() {
    const modalRef = this.modalService.open(NouveauUtilisateurComponent, { size: 'lg', backdrop: 'static' });
    modalRef.result.then((status) => {
      if(status == true){
        const confirmModalRef = this.modalService.open(ConfirmAjouterUtilisateurComponent, { size: 'lg', backdrop: 'static' });
        if(confirmModalRef){
         // console.log("add some logic here");
        }
      }

    }, () => {});
  }

  openReactiverUtilisateurModal(){
    const modalRef = this.modalService.open(MotifReactiverUtilisateurComponent, { size: 'lg', backdrop: 'static' });
    modalRef.result.then((status) => {
      if(status){
        const confirmModalRef = this.modalService.open(ConfirmReactiverUtilisateurComponent, { size: 'lg', backdrop: 'static' });
        if(confirmModalRef){
          //console.log("add some logic here");
        }      }
    }, () => {});
  }

  openDesactiverUtilisateurModal(){
    const modalRef = this.modalService.open(MotifReactiverUtilisateurComponent, { size: 'lg', backdrop: 'static' });
    modalRef.result.then((status) => {
      if(status){
        const confirmModalRef = this.modalService.open(ConfirmDesactiverUtilisateurComponent, { size: 'lg', backdrop: 'static' });
        if(confirmModalRef){
          console.log("add some logic here");
        }      }
    }, () => {});
  }


  openReinitialiserMotDePasseUtilisateurModal(){
    const modalRef = this.modalService.open(ConfirmUpdatePasswordComponent, { size: 'lg', backdrop: 'static' });
    modalRef.result.then((status) => {
      if(status){
        //console.log("add some logic here");        
      }          //console.log("add some logic here");

    }, () => {});
  }
     // this.toastService.showSuccess('Le rôle a été activé avec succès.');

}
