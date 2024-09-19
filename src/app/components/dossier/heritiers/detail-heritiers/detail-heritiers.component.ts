import {Component, Input} from '@angular/core';
import {FormItem} from "../../../../shared/components/form/form.component";
import {Validators} from "@angular/forms";
import {OsPatternValidators} from "../../../../shared/components/form/os-utils/os-pattern-validators";
import {IFile} from "../../../../models/depot-exceptionnel";

@Component({
  selector: 'app-detail-heritiers',
  templateUrl: './detail-heritiers.component.html',
  styleUrl: './detail-heritiers.component.scss'
})
export class DetailHeritiersComponent {



  constructor() {
  }

  infosPerso: FormItem[] = [
    {
      itemType: 'title',
      title: 'Information générales'
    },
    {
      itemType: 'field',
      placeholder: 'natureIdDeposant',
      type: 'text',
      value: 'CNIE',
      disabled: true,
      validators: [Validators.required, Validators.minLength(3)]
    },


    {
      itemType: 'field',
      placeholder: 'nId',
      type: 'text',
      value: 'BE879609',
      disabled: true,
      validators: [Validators.required, Validators.maxLength(50)]
    },
    {
      itemType: 'field',
      placeholder: 'nom',
      type: 'text',
      value: 'Benbrahim',
      disabled: true,
      validators: [Validators.required, Validators.maxLength(50)]
    },
    {
      itemType: 'field',
      placeholder: 'prenom',
      type: 'text',
      value: 'Rayane',
      disabled: true,
      validators: [Validators.required, Validators.maxLength(50)]
    },
    // {
    //   itemType: 'badge',
    //   placeholder: 'prenom',
    //   type: 'badge',
    //   value: 'EN_COURS',
    //   disabled: true
    // },

    {
      itemType: 'field',
      placeholder: 'dateNaissance',
      type: 'date',
      value: '1992-06-20',
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
      itemType: 'field',
      placeholder: 'partHeritage',
      type: 'text',
      value: '200',
      disabled: true,
      validators: [Validators.required]
    },
    // {
    //   itemType: 'file',
    //   placeholder: 'testPlaceholder',
    //   value: [
    //     { name: 'Document1.pdf', size: '1.2', progress: 100, uploadComplete: true, url: 'path/to/document1.pdf', fileType: 'pdf' },
    //     { name: 'Document2.pdf', size: '2.5', progress: 100, uploadComplete: true, url: 'path/to/document2.pdf', fileType: 'pdf' },
    //     { name: 'Document3.pdf', size: '3.1', progress: 100, uploadComplete: true, url: 'path/to/document3.pdf', fileType: 'pdf' }
    //   ]
    // }



  ];

  coordonneesContact: FormItem[] = [
    {
      itemType: 'title',
      title: 'Coordonnées de contact'
    },
    {
      itemType: 'field',
      placeholder: 'mobile',
      type: 'mobile',
      value: '+212 0612345567',
      disabled: true,
      validators: [Validators.required]
    },
    {
      itemType: 'field',
      placeholder: 'fixe',
      type: 'mobile',
      value: '+212 0612345567',
      disabled: true,
      validators: [Validators.required]

    },
    {
      itemType: 'field',
      placeholder: 'email',
      type: 'text',
      value: 'm.benbrahim@mailto.ma',
      disabled: true,
      validators: [Validators.required, Validators.maxLength(50),Validators.pattern(OsPatternValidators.emailRegex)]
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

  ];
  modeReglement: FormItem[] = [
    {
      itemType: 'title',
      title: 'Mode de règlement'
    },
    {
      itemType: 'field',
      placeholder: 'modeReglement',
      type: 'text',
      value: 'Virement bancaire',
      disabled: true,
      validators: [Validators.required]
    },
    {
      itemType: 'field',
      placeholder: 'coordoneeqBancaires',
      type: 'text',
      value: '123 456 78912230234234 56',
      disabled: true,
      validators: [Validators.required]
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

  ];

  adressePostale: FormItem[] = [
    {
      itemType: 'title',
      title: 'utilisateur.adressePostal.title'
    },
    {
      itemType: 'field',
      placeholder: 'adresse1',
      type: 'text',
      value: 'Bd de La Mecque',
      disabled: true,
      validators: [Validators.required, Validators.maxLength(50)]
    },
    {
      itemType: 'dropdown',
      placeholder: 'ville',
      value: 'rabat',
      options: [
        { value: 'casablanca', label: 'Casablanca' },
        { value: 'rabat', label: 'Rabat' },
        { value: 'marrakech', label: 'Marrakech' }
      ],
      disabled: true,
      validators: [Validators.required]
    },
    {
      itemType: 'field',
      placeholder: 'adresse2',
      type: 'text',
      value: 'Résidance Porte Californie 5ème ètage App. 34 ',
      disabled: true,
      validators: []
    },
    {
      itemType: 'dropdown',
      placeholder: 'pays',
      value: 'mar',
      options: [
        { value: 'mar', label: 'Maroc' },
        { value: 'fr', label: 'France' },
        { value: 'esp', label: 'Spain' }
      ],
      disabled: true,
      validators: [Validators.required]
    },
    {
      itemType: 'field',
      placeholder: 'codePostale',
      type: 'text',
      value: '2000',
      disabled: true,
      validators: []
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


  ];
  handleFormData(formValue: any) {
    console.log('Form Data:', formValue);
  }

  goBack() {
    window.history.back();
  }

  handleConsultFile(file: IFile) {
    console.log('Consult File:', file);

  }
}
