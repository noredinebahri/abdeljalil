import {Component, OnInit} from '@angular/core';
import {FormItem} from "../../../shared/components/form/form.component";
import {Validators} from "@angular/forms";
import {OsPatternValidators} from "../../../shared/components/form/os-utils/os-pattern-validators";
import {IFile} from "../../../models/depot-exceptionnel";
import {ChangePasswordModalComponent} from "./change-password-modal/change-password-modal.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {IPersonne} from "../../../models/personne";
import {PersonneService} from "../../../services/personne/personne.service";
import {ToastService} from "../../../shared/components/toast/toast.service";
import {ContactInfoService} from "../../../services/personne/contact-info.service";
import {ContactInfo} from "../../../models/contact-info";

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrl: './utilisateurs.component.scss'
})
export class UtilisateursComponent implements OnInit{

  // form: FormGroup = new FormGroup({});
  // formItems: FormItem[] = [];

  personne:IPersonne | null = null;
  infosPerso: FormItem[] = [];
  coordonneesContact: FormItem[] = [];
  adressePostale: FormItem[] = [];


  constructor(
    private modalService: NgbModal,
    private personneService: PersonneService,
    private toastervice: ToastService,
    private contactInfoService: ContactInfoService
    ) {
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
        this.toastervice.showError('Erreur lors du chargement des informations de l\'utilisateur');
      }
    );
  }

  private setFormItems(personne: IPersonne) {
    this.setInfosPerso(personne);
    this.setCoordonneesContact(personne);
    this.setAdressePostale(personne);
  }

  private setInfosPerso(personne: IPersonne) {
    this.infosPerso = [
      {
        itemType: 'title', title: 'Informations personnelles '
      },
      {
        itemType: 'field', placeholder: 'cin', type: 'text', value: personne.numeroIdentifiant, disabled: true,
      },
      {
        itemType: 'field', placeholder: 'nom', type: 'text', value: personne.nom, disabled: true,
      },
      {
        itemType: 'field', placeholder: 'prenom', type: 'text', value: personne.prenom, disabled: true,
      },
      {
        itemType: 'field', placeholder: 'dateNaissance', type: 'date', value: personne.dateNaissance , disabled: true, validators: [Validators.required]
      },
      {
        itemType: 'field', placeholder: 'nationalite', type: 'text', value: personne.nationalite, disabled: true, validators: [Validators.required]
      },
    ];
  }

  private setCoordonneesContact(personne: IPersonne) {
    this.coordonneesContact = [
      {
        itemType: 'title', title: 'Coordonnées de contact'
      },
      {
        itemType: 'field', placeholder: 'mobile', type: 'mobile', value: personne.contactInfo?.mobile, disabled: true, validators: [Validators.required]
      },
      {
        itemType: 'field', placeholder: 'fixe', type: 'mobile', value: personne.contactInfo?.fixe, disabled: true, validators: [Validators.required]
      },
      {
        itemType: 'field', placeholder: 'email', type: 'text', value: personne.contactInfo?.email, disabled: true,
        validators: [Validators.required, Validators.maxLength(50),Validators.pattern(OsPatternValidators.emailRegex)]
      },
      {
        itemType: 'button', text: 'Mettre à jour mes coordonnées de contact', alignment: 'right', action: 'enableForm', outlined: true, selected: false
      },
    ];
  }

  private setAdressePostale(personne: IPersonne) {
    this.adressePostale = [
      {
        itemType: 'title', title: 'Adresse postale'
      },
      {
        itemType: 'field', placeholder: 'adresse1', type: 'text', value: personne.contactInfo?.adresse1, disabled: true, validators: [Validators.required]
      },
      {
        itemType: 'dropdown', placeholder: 'ville', value: personne.contactInfo?.ville?.code, options: [
          { value: 'casablanca', label: 'Casablanca' },
          { value: 'rabat', label: 'Rabat' },
          { value: 'marrakech', label: 'Marrakech' }
        ], disabled: true, validators: [Validators.required]
      },
      {
        itemType: 'field', placeholder: 'adresse2', type: 'text', value: personne.contactInfo?.adresse2, disabled: true, validators: []
      },
      {
        itemType: 'dropdown', placeholder: 'pays', value: personne.contactInfo?.pays?.code, options: [
          { value: 'ma', label: 'Maroc' },
          { value: 'fr', label: 'France' },
          { value: 'esp', label: 'Spain' }
        ], disabled: true, validators: [Validators.required]
      },
      {
        itemType: 'field', placeholder: 'codePostale', type: 'text', value: personne.contactInfo?.codePostal, disabled: true, validators: []
      },
      {
        itemType: 'button', text: 'Mettre à jour mon adresse postale', alignment: 'right', action: 'enableForm', outlined: true, selected: false
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
    // {
    //   itemType: 'field',
    //   placeholder: 'Mobile',
    //   type: 'mobile',
    //   value: '00212 612345678',
    //   disabled: true,
    //   options: [
    //     { value: '00212', label: 'Morocco (+212)' },
    //     { value: '001', label: 'USA (+1)' },
    //     { value: '044', label: 'UK (+44)' }
    //   ],
    //   validators: [Validators.required]
    // },
    {
      itemType: 'button',
      alignment: 'right',
      text: 'Changer mon mot de passe',
      action: () => { this.openModal() },
      outlined: true,
      selected: false
    },
  ];



  openModal() {
    this.modalService.open(ChangePasswordModalComponent, { size: 'lg', backdrop: 'static' });
  }

  // private enableFormAction() {
  //   this.form.enable();
  //
  //   const newButtons: FormItem[] = [
  //     {
  //       itemType: 'button',
  //       alignment: 'left',
  //       text: 'Annuler',
  //       action: 'annuler'
  //
  //     },
  //     {
  //       itemType: 'button',
  //       alignment: 'right',
  //       text: 'Enregistrer',
  //       action: 'enregistrer',
  //       outlined: false,
  //       selected: true
  //     },
  //   ];
  //
  //   this.formItems = this.formItems.filter(item => item.action !== 'enableForm').concat(newButtons);
  // }
  handleFormData(formValue: any, form : 'corrdonneesContact' | 'adressePostale') {
    console.log('Form Value:', formValue);
    let contactInfo = this.personne?.contactInfo;
    if(form === 'corrdonneesContact') {
      contactInfo = {
        ...contactInfo,
        mobile: formValue.mobile,
        fixe: formValue.fixe,
        email: formValue.email
      }
    } else if(form === 'adressePostale') {
      contactInfo = {
        ...contactInfo,
        adresse1: formValue.adresse1,
        adresse2: formValue.adresse2,
        ville: { code: formValue.ville },
        pays: { code: formValue.pays },
        codePostal: formValue.codePostal
      }
    }

    this.contactInfoService.updateContactInfo(contactInfo as ContactInfo).subscribe(
      (contactInfo) => {
        this.toastervice.showSuccess('Vos informations ont été mises à jour');
        this.personne = {
          ...this.personne,
          contactInfo: contactInfo
        }
        this.setFormItems(this.personne);
      },
      (error) => {
        this.toastervice.showError('Erreur lors de la mise à jour de vos informations');
      }
    );

  }

  goBack() {
    window.history.back();
  }

  handleConsultFile(file: IFile) {
    console.log('Consult File:', file);

  }
}
