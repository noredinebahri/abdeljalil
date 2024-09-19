import {Component, OnInit} from '@angular/core';
import {ITEMS_PER_PAGE} from "../../shared/constants/shared.constant";
import {ActionClickEvent, ActionConfig, ColumnConfig} from "../../shared/components/table/table.config";
import {Reclamation} from "../../models/reclamation";
import {FormItem} from "../../shared/components/form/form.component";
import {Validators} from "@angular/forms";
import {IFile} from "../../models/depot-exceptionnel";

@Component({
  selector: 'app-generic-examples',
  templateUrl: './generic-examples.component.html',
  styleUrl: './generic-examples.component.scss'
})
export class GenericExamplesComponent implements OnInit {
  title = 'sgfg-front';
  cardToggle: boolean = false;

  totalItems: number = 0;
  itemsPerPage = ITEMS_PER_PAGE;
  page: number = 1;

  columns: ColumnConfig[] = [
    {field: 'ndossier', header: 'N° dossier'},
    {field: 'reclamation', header: 'N° réclamation'},
    {field: 'nature', header: 'Nature', type: 'text'},
    {field: 'provenance', header: 'Provenance'},
    {field: 'creationDate', header: 'Date de création'},
    {field: 'status', header: 'Statut', type: 'badge'},
    {field: 'criticality', header: 'Criticitė', type: 'badge'}
  ];

  actions: ActionConfig[] = [
    {label: 'Edit', action: 'edit'},
    {label: 'Delete', action: 'delete'}
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
      "nature": "Autres motifs de réclamation",
      "provenance": "Courrier",
      "createdAt": "01/01/2022",
      "status": "EN_COURS",
      "criticality": "ELEVEE"
    },
    {
      "ndossier": "RR20083005",
      "numReclamation": "RR20083005",
      "nature": "Qualité de service",
      "provenance": "Email",
      "createdAt": "02/02/2022",
      "status": "CLOTUREE",
      "criticality": "FAIBLE"
    },
    {
      "ndossier": "RR20084006",
      "numReclamation": "RR20084006",
      "nature": "Retard de livraison",
      "provenance": "Téléphone",
      "createdAt": "03/03/2022",
      "status": "NOUVELLE_DEMANDE",
      "criticality": "CRITIQUE"
    },
    {
      "ndossier": "RR20085007",
      "numReclamation": "RR20085007",
      "nature": "Produit endommagé",
      "provenance": "Direct",
      "createdAt": "04/04/2022",
      "status": "EN_ATTENTE_DE_COMPLEMENT",
      "criticality": "ELEVEE"
    },
    {
      "ndossier": "RR20082004",
      "numReclamation": "RR20082004",
      "nature": "Autres motifs de réclamation",
      "provenance": "Courrier",
      "createdAt": "01/01/2022",
      "status": "EN_COURS",
      "criticality": "ELEVEE"
    },
    {
      "ndossier": "RR20083005",
      "numReclamation": "RR20083005",
      "nature": "Qualité de service",
      "provenance": "Email",
      "createdAt": "02/02/2022",
      "status": "TRAITEE",
      "criticality": "FAIBLE"
    },
    {
      "ndossier": "RR20084006",
      "numReclamation": "RR20084006",
      "nature": "Retard de livraison",
      "provenance": "Téléphone",
      "createdAt": "03/03/2022",
      "status": "NOUVELLE_DEMANDE",
      "criticality": "CRITIQUE"
    },
    {
      "ndossier": "RR20085007",
      "numReclamation": "RR20085007",
      "nature": "Produit endommagé",
      "provenance": "Direct",
      "createdAt": "04/04/2022",
      "status": "EN_ATTENTE_DE_COMPLEMENT",
      "criticality": "ELEVEE"
    },
    {
      "ndossier": "RR20082004",
      "numReclamation": "RR20082004",
      "nature": "Autres motifs de réclamation",
      "provenance": "Courrier",
      "createdAt": "01/01/2022",
      "status": "EN_COURS",
      "criticality": "ELEVEE"
    },
    {
      "ndossier": "RR20083005",
      "numReclamation": "RR20083005",
      "nature": "Qualité de service",
      "provenance": "Email",
      "createdAt": "02/02/2022",
      "status": "CLOTUREE",
      "criticality": "FAIBLE"
    },
    {
      "ndossier": "RR20084006",
      "numReclamation": "RR20084006",
      "nature": "Retard de livraison",
      "provenance": "Téléphone",
      "createdAt": "03/03/2022",
      "status": "NOUVELLE_DEMANDE",
      "criticality": "CRITIQUE"
    },
    {
      "ndossier": "RR20085007",
      "numReclamation": "RR20085007",
      "nature": "Produit endommagé",
      "provenance": "Direct",
      "createdAt": "04/04/2022",
      "status": "EN_ATTENTE_DE_COMPLEMENT",
      "criticality": "ELEVEE"
    }
  ];


  ngOnInit(): void {
    this.totalItems = this.tableData.length;
  }

  protected readonly ITEMS_PER_PAGE = ITEMS_PER_PAGE;

  handleFile(file: IFile[]) {
    console.log('Received file:', file[0].name);
  }


  //===================================================HO=====================================================



  formItems1: FormItem[] = [
    {
      itemType: 'title',
      title: 'Adresse postale' // Form-level title
    },
    {
      itemType: 'field',
      placeholder: 'Adresse (Ligne 1)',
      type: 'text',
      value: '',
      disabled: false,
      validators: [Validators.required, Validators.minLength(3)]
    },
    {
      itemType: 'field',
      placeholder: 'Adresse (Ligne 2)',
      type: 'text',
      value: '',
      disabled: false,
      validators: [Validators.required, Validators.maxLength(50)]
    },
    {
      itemType: 'field',
      placeholder: 'Code postal (Facultatif)',
      type: 'text',
      value: '',
      disabled: false,
      validators: [Validators.required] // Validators for this field
    },
    {
      itemType: 'dropdown',
      placeholder: 'Ville',
      value: '',
      options: [
        { value: 'casablanca', label: 'Casablanca' },
        { value: 'rabat', label: 'Rabat' },
        { value: 'marrakech', label: 'Marrakech' }
      ],
      disabled: false,
      validators: [Validators.required] // Validators for this dropdown
    },
    {
      itemType: 'dropdown',
      placeholder: 'Pays',
      value: '',
      options: [
        { value: 'maroc', label: 'Maroc' },
        { value: 'france', label: 'France' },
        { value: 'spain', label: 'Spain' }
      ],
      disabled: false,
      validators: [Validators.required]
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
/////////////////////////////////////////////////////////// forms //////////////////////////////////////////////
  formItems3: FormItem[] = [
    {
      itemType: 'title',
      title: 'Adresse postale' // Form-level title
    },
    {
      itemType: 'field',
      placeholder: 'Adresse (Ligne 1)',
      type: 'text',
      value: 'Bd de La Mecq',
      disabled: true,
      validators: [Validators.required, Validators.minLength(3)] // Validators for this field
    },

    {
      itemType: 'field',
      placeholder: 'Adresse (Ligne 2)',
      type: 'text',
      value: 'Résidence Porte Californie 5ème étage App. 34',
      disabled: true,
      validators: [Validators.required, Validators.maxLength(50)] // Validators for this field
    },
    {
      itemType: 'field',
      placeholder: 'Code postal (Facultatif)',
      type: 'text',
      value: '20000',
      disabled: true,
      validators: []
    },
    {
      itemType: 'dropdown',
      placeholder: 'Ville',
      value: 'Casablanca',
      options: [
        { value: 'casablanca', label: 'Casablanca' },
        { value: 'rabat', label: 'Rabat' },
        { value: 'marrakech', label: 'Marrakech' }
      ],
      disabled: true,
      validators: [Validators.required] // Validators for this dropdown
    },
    {
      itemType: 'dropdown',
      placeholder: 'Pays',
      value: 'Maroc',
      options: [
        { value: 'maroc', label: 'Maroc' },
        { value: 'france', label: 'France' },
        { value: 'spain', label: 'Spain' }
      ],
      disabled: true,
      validators: [Validators.required]
    }
  ];



  statusArray = [
    { date: "", text: 'Dossier créé.'},
    { date: '18/10/2023', text: 'En attente des informations de règlement.',active: true},
    { date: '18/10/2023', text: 'Indemnisation calculée.'   },
    { date: '18/10/2023', text: 'Règlement en cours de traitement.' }
  ];
}
