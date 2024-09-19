import {Component, OnInit} from '@angular/core';
import {FormItem} from "../../../shared/components/form/form.component";
import {Validators} from "@angular/forms";
import {OsPatternValidators} from "../../../shared/components/form/os-utils/os-pattern-validators";
import {
  ChangePasswordModalComponent
} from "../../deposant/utilisateurs/change-password-modal/change-password-modal.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

import {IPersonne} from "../../../models/personne";
import {PersonneService} from "../../../services/personne/personne.service";
import {ToastService} from "../../../shared/components/toast/toast.service";

@Component({
  selector: 'app-gestion-compte',
  templateUrl: './gestion-compte.component.html',
  styleUrl: './gestion-compte.component.scss'
})
export class GestionCompteComponent implements OnInit {
  private personne?: IPersonne;
  infosPerso: FormItem[] = [];
  coordonneesContact: FormItem[] = [];

  constructor(private modalService: NgbModal, private personneService: PersonneService, private toastervice: ToastService) {
  }

  ngOnInit(): void {
    this.loadPersonne();
  }

  private loadPersonne() {
    this.personneService.getPersonnesById(1).subscribe(
      (personne: IPersonne) => {
        this.personne = personne;
        this.setFormItems(personne);
      },
      (error) => {
        console.error('Error loading user info:', error);
        this.toastervice.showError('Erreur lors du chargement des informations de l\'utilisateur');
      }
    );
  }


  private setFormItems(personne: IPersonne) {
    this.setInfosPerso(personne);
    this.setCoordonneesContact(personne);
  }

  private setInfosPerso(personne: IPersonne) {
    this.infosPerso = [
      {
        itemType: 'title',
        title: 'Informations personnelles '
      },
      {
        itemType: 'field',
        placeholder: 'nom',
        type: 'text',
        value: personne?.nom,
        disabled: true,
      },
      {
        itemType: 'field',
        placeholder: 'prenom',
        type: 'text',
        value: this.personne?.prenom,
        disabled: true,
      },
    ];
  }

  parametreConnexion: FormItem[] = [
    {
      itemType: 'title',
      title: 'Paramètres de connexion'

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
      value: 'changer votre mot de passe pour vous connecter à votre compte',
      disabled: true,
      validators: [Validators.required, Validators.maxLength(30)]
    },

    {
      itemType: 'button',
      alignment: 'right',
      text: 'Changer mon mot de passe',
      action: () => {
        this.openModal()
      },
      outlined: true,
      selected: false
    },
  ];

  openModal() {
    this.modalService.open(ChangePasswordModalComponent, {size: 'lg', backdrop: 'static'});
  }

  private setCoordonneesContact(personne: IPersonne) {
    this.coordonneesContact = [
      {
        itemType: 'title',
        title: 'Coordonnées de contact'
      },
      {
        itemType: 'field',
        placeholder: 'mobile',
        type: 'mobile',
        value: this.personne?.contactInfo?.mobile,
        disabled: true,
        validators: [Validators.required]
      },
      {
        itemType: 'field',
        placeholder: 'email',
        type: 'text',
        value: this.personne?.contactInfo?.email,
        disabled: true,
        validators: [Validators.required, Validators.maxLength(50), Validators.pattern(OsPatternValidators.emailRegex)]
      },
      {
        itemType: 'button',
        text: 'Mettre à jour mes coordonnées de contact',
        alignment: 'right',
        action: 'enableForm',
        outlined: true,
        selected: false
      },
    ];
  }


  goBack() {
    window.history.back();
  }

}
