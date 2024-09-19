import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IFile } from 'src/app/models/depot-exceptionnel';
import { FormItem } from 'src/app/shared/components/form/form.component';
import { ToastService } from 'src/app/shared/components/toast/toast.service';

@Component({
  selector: 'app-consult-utilisateur',
  templateUrl: './consult-utilisateur.component.html',
  styleUrl: './consult-utilisateur.component.scss'
})
export class ConsultUtilisateurComponent {

  constructor( private modalService: NgbModal,private toastService:ToastService) {}

  infosPerso: FormItem[] = [
    {
      itemType: 'title',
      title: 'Information générales'
    },
    {
      itemType: 'field',
      placeholder: 'nom',
      type: 'text',
      value: 'Benbrahim',
      disabled: true,
    },
    {
      itemType: 'field',
      placeholder: 'prenom',
      type: 'text',
      value: 'Mohammed',
      disabled: true,
    },
    {
      itemType: 'field',
      placeholder: 'dateNaissance',
      type: 'date',
      value: '2018-07-22',
      disabled: true,
      validators: [Validators.required]
    },
    {
      itemType: 'field',
      placeholder: 'nationalite',
      type: 'text',
      value: 'Marocaine',
      disabled: true,
      validators: [Validators.required]
    },
    {
      itemType: 'button',
      alignment: 'right',
      text: 'Mettre a jour',
      action: () => { this.openModalUpdateInfo() },
      outlined: true,
      selected: false
    },
  ];

  entityRole: FormItem[] = [
    {
      itemType: 'title',
      title: 'Entitié et role'
    },
    {
      itemType: 'field',
      placeholder: 'typeEntitie',
      type: 'text',
      value: 'Type entitie 1',
      disabled: true,
    },
    {
      itemType: 'field',
      placeholder: 'entitie',
      type: 'text',
      value: 'entitie 1',
      disabled: true,
    },
    {
      itemType: 'field',
      placeholder: 'role',
      type: 'text',
      value: 'Administrateur',
      disabled: true,
      validators: [Validators.required]
    },
    {
      itemType: 'button',
      alignment: 'right',
      text: 'Mettre a jour',
      action: () => { this.openModalUpdateEntityRole() },
      outlined: true,
      selected: false
    },
  ];

  parametreDacces: FormItem[] = [
    {
      itemType: 'title',
      title: 'Paramètre d\'accès'

    },
    {
      itemType: 'field',
      placeholder: 'nIdentification',
      type: 'text',
      value: 'AB1234560',
      disabled: true,
      validators: [Validators.required, Validators.minLength(3)]
    },

    {
      itemType: 'field',
      placeholder: 'motPasse',
      type: 'text',
      value: '*************',
      disabled: true,
      validators: [Validators.required, Validators.maxLength(30)]
    },
    {
      itemType: 'button',
      alignment: 'right',
      text: 'Réinitialiser le mot de passe',
      action: () => { this.openModalUpdateParametreDacces() },
      outlined: true,
      selected: false
    },
  ];

  openModalUpdateInfo() {
   // this.modalService.open(ChangePasswordModalComponent, { size: 'lg', backdrop: 'static' });
   this.toastService.showSuccess('Les informations générales de l\'utilisateur ont été mises à jour avec succès.');

  }

  openModalUpdateEntityRole() {
   // this.modalService.open(ChangePasswordModalComponent, { size: 'lg', backdrop: 'static' });
   this.toastService.showSuccess('L’entité et le rôle de l’utilisateur ont été mis à jour avec succès.');

  }

  openModalUpdateParametreDacces() {
   // this.modalService.open(ChangePasswordModalComponent, { size: 'lg', backdrop: 'static' });
   this.toastService.showSuccess('Le mot de passe a été réinitialisé avec succès.');

  }

  handleFormData(formValue: any) {
    console.log('Form Data:', formValue);
  }

  goBack() {
    window.history.back();
  }

  handleConsultFile(file: IFile) {
    console.log('Consult File:', file);

  }
  
  statusArray = [
    { date: '12/23/2020 00:00', text: 'Utilisateur crée'},
  ];

}
