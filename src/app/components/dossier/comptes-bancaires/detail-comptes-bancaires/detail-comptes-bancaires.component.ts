import {Component, OnInit} from '@angular/core';
import {FormItem} from "../../../../shared/components/form/form.component";
import {Validators} from "@angular/forms";
import { IFile} from "../../../../models/depot-exceptionnel";
import {StatusDossier} from "../../../../enums/status-dossier";
import {IComptes} from "../../../../models/comptes";
import {CriticiteDossier} from "../../../../enums/criticite-dossier";
import {ActionConfig, ColumnConfig} from "../../../../shared/components/table/table.config";
import {StatusCompte} from "../../../../enums/status-compte";


@Component({
  selector: 'app-detail-comptes-bancaires',
  templateUrl: './detail-comptes-bancaires.component.html',
  styleUrl: './detail-comptes-bancaires.component.scss'
})
export class DetailComptesBancairesComponent implements OnInit{
  compteData?: IComptes;
  cotitulaires: IComptes[] = [];


  constructor() {
  }

  infosCompteStp: FormItem[] = [
    {
      itemType: 'title',
      title: 'Information du compte bancaire'
    },

    {
      itemType: 'field',
      placeholder: 'NomComercialCompte',
      type: 'text',
      value: 'SARL ',
      disabled: true,
      validators: [Validators.required, Validators.minLength(3)]
    },


    {
      itemType: 'field',
      placeholder: 'pcec',
      type: 'text',
      value: 'Comptes courants',
      disabled: true,
      validators: [Validators.required, Validators.maxLength(50)]
    },
    {
      itemType: 'field',
      placeholder: 'natureCompte',
      type: 'text',
      value: 'Individuel',
      disabled: true,
      validators: [Validators.required, Validators.maxLength(50)]
    },
    {
      itemType: 'field',
      placeholder: 'nbrContitulaires',
      type: 'text',
      value: '0',
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
      placeholder: 'rib',
      type: 'text',
      value: '12345 67890 12345 67890 1234',
      disabled: true,
      validators: [Validators.required]
    },
    {
      itemType: 'field',
      placeholder: 'devise',
      type: 'text',
      value: 'MAD',
      disabled: true,
      validators: [Validators.required]
    },
    {
      itemType: 'field',
      placeholder: 'soldeMad',
      type: 'text',
      value: '12 345',
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

  infosCompteNstp: FormItem[] = [
    {
      itemType: 'title',
      title: 'Information du compte bancaire'
    },

    {
      itemType: 'field',
      placeholder: 'statusCompte',
      type: 'text',
      value: 'NSTP ',
      disabled: true,
    },

    {
      itemType: 'field',
      placeholder: 'motifNstp',
      type: 'text',
      value: 'lorem lorem ',
      disabled: true,
    },

    {
      itemType: 'field',
      placeholder: 'NomComercialCompte',
      type: 'text',
      value: 'SARL ',
      disabled: true,
      validators: [Validators.required, Validators.minLength(3)]
    },


    {
      itemType: 'field',
      placeholder: 'pcec',
      type: 'text',
      value: 'Comptes courants',
      disabled: true,
      validators: [Validators.required, Validators.maxLength(50)]
    },
    {
      itemType: 'field',
      placeholder: 'natureCompte',
      type: 'text',
      value: 'Individuel',
      disabled: true,
      validators: [Validators.required, Validators.maxLength(50)]
    },
    {
      itemType: 'field',
      placeholder: 'nbrContitulaires',
      type: 'text',
      value: '0',
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
      placeholder: 'rib',
      type: 'text',
      value: '12345 67890 12345 67890 1234',
      disabled: true,
      validators: [Validators.required]
    },
    {
      itemType: 'field',
      placeholder: 'devise',
      type: 'text',
      value: 'MAD',
      disabled: true,
      validators: [Validators.required]
    },
    {
      itemType: 'field',
      placeholder: 'soldeMad',
      type: 'string',
      value: '12 345',
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


  handleFormData(formValue: any) {
    console.log('Form Data:', formValue);
  }

  goBack() {
    window.history.back();
  }

  handleConsultFile(file: IFile) {
    console.log('Consult File:', file);

  }

  getBadgeClass(status: string | undefined): string {
    switch (status) {
      case StatusCompte.STP:
        return 'badge Traitée';
        case StatusCompte.NSTP:
          return 'badge Nouvelle-demande';
      default:
        return 'badge';
    }
  }


  getTranslationKey(field: string | undefined): string {
    let category = '';
    if (field === CriticiteDossier.FAIBLE || field === CriticiteDossier.ELEVEE || field === CriticiteDossier.CRITIQUE) {
      category = 'enum.criticite.';
    }
    else if (field === StatusCompte.STP){
      category = 'enum.statutCompte.';
    }
    else {
      category = 'enum.statutDossier.';
    }
    return category;
  }


  columns: ColumnConfig[] = [
    { field: 'idScv', header: 'ID SCV', type: 'text' },
    { field: 'prtCotitulaire', header: 'Part cotitulaire (%)', type: 'text' },

  ];

  columnsCartesBancaires: ColumnConfig[] = [
    { field: 'nCartes', header: 'N° Cartes', type: 'text' },
    { field: 'dateValidte', header: 'Date de validité', type: 'date' },

  ];
  columnsPrelevement: ColumnConfig[] = [
    { field: 'nature', header: 'Nature', type: 'text' },
    { field: 'natureAutre', header: 'Nature autre', type: 'text' },
    { field: 'montant', header: 'Montant (MAD)', type: 'date' },

  ];

  ngOnInit(): void {
    this.compteData = JSON.parse(localStorage.getItem('compteData')!);
  }

  protected readonly StatusDossier = StatusDossier;
  protected readonly StatusCompte = StatusCompte;
}
