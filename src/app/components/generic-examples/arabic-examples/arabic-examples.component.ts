import { Component } from '@angular/core';
import {ActionClickEvent, ActionConfig, ColumnConfig} from "../../../shared/components/table/table.config";
import {Reclamation} from "../../../models/reclamation";
import {FormItem} from "../../../shared/components/form/form.component";
import {Validators} from "@angular/forms";
import {ITEMS_PER_PAGE} from "../../../shared/constants/shared.constant";
import {TranslateService} from "@ngx-translate/core";
import {LANGUAGE} from "../../../enums/language";
import {IFile} from "../../../models/depot-exceptionnel";


@Component({
  selector: 'app-arabic-examples',
  templateUrl: './arabic-examples.component.html',
  styleUrl: './arabic-examples.component.scss'
})
export class ArabicExamplesComponent {

  title = 'sgfg-front';
  cardToggle: boolean = false;

  totalItems: number = 0;
  itemsPerPage = ITEMS_PER_PAGE;
  page: number = 1;

  columns: ColumnConfig[] = [];

  actions: ActionConfig[] = [
    {label: 'edit', action: 'edit'},
    {label: 'delete', action: 'delete'}
  ];

  handleAction(event: ActionClickEvent<Reclamation>): void {
    console.log('Action:', event.action, 'Data:', event.item);
  }

  handlePageChange(newPage: number): void {
    console.log('New page:', newPage);
  }


  tableData: Reclamation[] = [
    {
      "ndossier": "RR20082004",
      "numReclamation": "RR20082004",
      "nature": "أسباب أخرى للشكاية",
      "provenance": "البريد",
      "createdAt": "01/01/2022",
      "status": "EN_COURS",
      "criticality": "ELEVEE"
    },
    {
      "ndossier": "RR20083005",
      "numReclamation": "RR20083005",
      "nature": "جودة الخدمة",
      "provenance": "البريد الإلكتروني",
      "createdAt": "02/02/2022",
      "status": "CLOTUREE",
      "criticality": "FAIBLE"
    },
    {
      "ndossier": "RR20084006",
      "numReclamation": "RR20084006",
      "nature": "تأخير في التسليم",
      "provenance": "الهاتف",
      "createdAt": "03/03/2022",
      "status": "NOUVELLE_DEMANDE",
      "criticality": "CRITIQUE"
    },
    {
      "ndossier": "RR20085007",
      "numReclamation": "RR20085007",
      "nature": "منتج تالف",
      "provenance": "مباشر",
      "createdAt": "04/04/2022",
      "status": "EN_ATTENTE_DE_COMPLEMENT",
      "criticality": "ELEVEE"
    },
    {
      "ndossier": "RR20082004",
      "numReclamation": "RR20082004",
      "nature": "أسباب أخرى للشكاية",
      "provenance": "البريد",
      "createdAt": "01/01/2022",
      "status": "EN_COURS",
      "criticality": "ELEVEE"
    },
    {
      "ndossier": "RR20083005",
      "numReclamation": "RR20083005",
      "nature": "جودة الخدمة",
      "provenance": "البريد الإلكتروني",
      "createdAt": "02/02/2022",
      "status": "CLOTUREE",
      "criticality": "FAIBLE"
    },
    {
      "ndossier": "RR20084006",
      "numReclamation": "RR20084006",
      "nature": "تأخير في التسليم",
      "provenance": "الهاتف",
      "createdAt": "03/03/2022",
      "status": "NOUVELLE_DEMANDE",
      "criticality": "CRITIQUE"
    },
    {
      "ndossier": "RR20085007",
      "numReclamation": "RR20085007",
      "nature": "منتج تالف",
      "provenance": "مباشر",
      "createdAt": "04/04/2022",
      "status": "EN_ATTENTE_DE_COMPLEMENT",
      "criticality": "ELEVEE"
    },
    {
      "ndossier": "RR20082004",
      "numReclamation": "RR20082004",
      "nature": "أسباب أخرى للشكاية",
      "provenance": "البريد",
      "createdAt": "01/01/2022",
      "status": "EN_COURS",
      "criticality": "ELEVEE"
    },
    {
      "ndossier": "RR20083005",
      "numReclamation": "RR20083005",
      "nature": "جودة الخدمة",
      "provenance": "البريد الإلكتروني",
      "createdAt": "02/02/2022",
      "status": "CLOTUREE",
      "criticality": "FAIBLE"
    },
    {
      "ndossier": "RR20084006",
      "numReclamation": "RR20084006",
      "nature": "تأخير في التسليم",
      "provenance": "الهاتف",
      "createdAt": "03/03/2022",
      "status": "NOUVELLE_DEMANDE",
      "criticality": "CRITIQUE"
    },
    {
      "ndossier": "RR20085007",
      "numReclamation": "RR20085007",
      "nature": "منتج تالف",
      "provenance": "مباشر",
      "createdAt": "04/04/2022",
      "status": "EN_ATTENTE_DE_COMPLEMENT",
      "criticality": "ELEVEE"
    }
  ];

  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang(LANGUAGE.FR);


}
  ngOnInit(): void {
    this.totalItems = this.tableData.length;
    this.columns = [
      {field: 'ndossier', header: 'ndossier'},
      {field: 'reclamation', header: 'reclamation'},
      {field: 'nature', header: 'nature', type: 'text'},
      {field: 'provenance', header: 'provenance'},
      {field: 'creationDate', header: 'creationDate'},
      {field: 'status', header: 'Statuts', type: 'badge'},
      {field: 'criticality', header: 'criticality', type: 'badge'}
    ];
  }

  protected readonly ITEMS_PER_PAGE = ITEMS_PER_PAGE;
changeToAR(){
  this.translateService.use(LANGUAGE.AR);
  this.translateService.setDefaultLang(LANGUAGE.AR);
}
changeToFR(){
  this.translateService.use(LANGUAGE.FR);
  this.translateService.setDefaultLang(LANGUAGE.FR);

}

  handleFile(file: IFile[]) {
    console.log('Received file:', file[0].name);
  }


  //===================================================HO=====================================================



  formItems1: FormItem[] = [
    {
      itemType: 'title',
      title: 'العنوان البريدي' // Form-level title
    },
    {
      itemType: 'field',
      placeholder: 'adresseLigne1',
      type: 'text',
      value: '',
      disabled: false,
      validators: [Validators.required, Validators.minLength(3)] // Validators for this field
    },
    {
      itemType: 'field',
      placeholder: 'adresseLigne2',
      type: 'text',
      value: '',
      disabled: false,
      validators: [Validators.required, Validators.maxLength(50)] // Validators for this field
    },
    {
      itemType: 'field',
      placeholder: 'codePostale',
      type: 'text',
      value: '',
      disabled: false,
      validators: [Validators.required] // Validators for this field
    },
    {
      itemType: 'dropdown',
      placeholder: 'ville',
      value: '',
      options: [
        { value: 'casablanca', label: 'الدار البيضاء' },
        { value: 'rabat', label: 'الرباط' },
        { value: 'marrakech', label: 'مراكش' }
      ],
      disabled: false,
      validators: [Validators.required] // Validators for this dropdown
    },
    {
      itemType: 'dropdown',
      placeholder: 'pays',
      value: '',
      options: [
        { value: 'maroc', label: 'المغرب' },
        { value: 'france', label: 'فرنسا' },
        { value: 'spain', label: 'إسبانيا' }
      ],
      disabled: false,
      validators: [Validators.required] // Validators for this dropdown
    },
    {
      itemType: 'button',
      text: 'Enregistrer',
      action: 'submitForm'
    },
    {
      itemType: 'button',
      text: 'Annuler',
      action: 'cancelForm'
    }
  ];
///////////////////////////////////////////////////////////
  formItems: FormItem[] = [
    {
      itemType: 'title',
      title: 'العنوان البريدي' // Form-level title
    },
    {
      itemType: 'field',
      placeholder: 'adresseLigne1',
      type: 'text',
      value: 'شارع مكة',
      disabled: true,
      validators: [Validators.required, Validators.minLength(3)] // Validators for this field
    },

    {
      itemType: 'field',
      placeholder: 'adresseLigne2',
      type: 'text',
      value: 'باب الإقامة كاليفورنيا شقة الطابق الخامس. 34',
      disabled: true,
      validators: [Validators.required, Validators.maxLength(50)] // Validators for this field
    },
    {
      itemType: 'field',
      placeholder: 'codePostale',
      type: 'text',
      value: '20000',
      disabled: true,
      validators: [] // No validators for this field
    },
    {
      itemType: 'dropdown',
      placeholder: 'ville',
      value: 'Casablanca',
      options: [
        { value: 'casablanca', label: 'الدار البيضاء' },
        { value: 'rabat', label: 'الرباط' },
        { value: 'marrakech', label: 'مراكش' }
      ],
      disabled: true,
      validators: [Validators.required] // Validators for this dropdown
    },
    {
      itemType: 'dropdown',
      placeholder: 'pays',
      value: 'Maroc',
      options: [
        { value: 'maroc', label: 'المغرب' },
        { value: 'france', label: 'فرنسا' },
        { value: 'spain', label: 'إسبانيا' }
      ],
      disabled: true,
      validators: [Validators.required]
    }
  ];

}
