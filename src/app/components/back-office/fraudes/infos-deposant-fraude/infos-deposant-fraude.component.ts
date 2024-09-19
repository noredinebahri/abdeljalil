import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormItem } from 'src/app/shared/components/form/form.component';
import { OsPatternValidators } from 'src/app/shared/components/form/os-utils/os-pattern-validators';

@Component({
  selector: 'app-infos-deposant-fraude',
  templateUrl: './infos-deposant-fraude.component.html',
  styleUrl: './infos-deposant-fraude.component.scss'
})
export class InfosDeposantFraudeComponent {

  formItems!: FormItem[];

  ngOnInit(): void {
    this.formItems = [
      {
        itemType: 'title',
        title: 'Informations génerales'
      },
      {
        itemType: 'field',
        placeholder: 'nDossier',
        type: 'text',
        value: "DP123456",
        disabled: true,
      },
      {
        itemType: 'field',
        placeholder: 'statutVieDeposant',
        type: 'text',
        value: "Décédé",
        disabled: true,
      },
      {
        itemType: 'field',
        placeholder: 'typeDeposant',
        type: 'text',
        value: "Personne physique",
        disabled: true,
      },
      {
        itemType: 'field',
        placeholder: 'cin',
        type: 'text',
        value: "BE848765",
        disabled: true,
      },
      {
        itemType: 'field',
        placeholder: 'nom',
        type: 'text',
        value: "Benbrahim",
        disabled: true,
      },
      {
        itemType: 'field',
        placeholder: 'prenom',
        type: 'text',
        value: "Mohammed",
        disabled: true,
      },
      {
        itemType: 'field',
        placeholder: 'dateNaissance',
        type: 'text',
        value: "20 juin 1992",
        disabled: true,
      },
      {
        itemType: 'field',
        placeholder: 'nationalite',
        type: 'text',
        value: "Marocaine",
        disabled: true,
      },
      {
        itemType: 'field',
        placeholder: 'nombreHeritiers',
        type: 'text',
        value: "2",
        disabled: true,
      },
      ]
  }

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

}
