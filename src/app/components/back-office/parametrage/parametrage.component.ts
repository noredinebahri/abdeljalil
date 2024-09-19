import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormItem } from 'src/app/shared/components/form/form.component';

import { ActionClickEvent, ActionConfig, ColumnConfig, FilterField } from 'src/app/shared/components/table/table.config';
import { ToastService } from 'src/app/shared/components/toast/toast.service';
import { TranslateService } from "@ngx-translate/core";
import { ConfirmationModalComponent } from 'src/app/shared/components/confirmation-modal/confirmation-modal.component';
import { UpdateModalComponent } from '../referentiels/update-modal/update-modal.component';
import { CampagneIndemnisation, ICampagneIndemnisation } from 'src/app/models/campagneIndemnisation';
import { CampagneIndemnisationService } from 'src/app/services/compagne-indemnisation/campagne-indemnisation.service';
import { IParametrage, Parametrage } from 'src/app/models/parametrage';
import { ParametrageService } from 'src/app/services/parametrage/parametrage.service';
import { UpdateParametrageModalComponent } from './update-parametrage-modal/update-parametrage-modal.component';
import { ConfirmDepotModalComponent } from '../../dossier/details/depots-exceptionnels/confirm-depot-modal/confirm-depot-modal.component';

@Component({
  selector: 'app-parametrage',
  templateUrl: './parametrage.component.html',
  styleUrl: './parametrage.component.scss'
})
export class ParametrageComponent {

  totalItems: number = 0; 
  page: number = 1;
  itemsPerPage: number = 10; 
  isDeleted: boolean = false;

  formFilter?: FormGroup;
  depotFormItems: FormItem[] = [];
  item: IParametrage | undefined;

  totalItemsTitle: string = "compagne-indemnisation";

  columns: ColumnConfig[] = [
    { field: 'numParametre', header: 'N° paramètre', type: 'text', style: 'width: 10%;' },
    { field: 'parametre', header: 'Paramètre', type: 'text', style: 'width: 20%;' },
    { field: 'valeur', header: 'Valeur', type: 'text', style: 'width: 20%;' },
    { field: 'dateModif', header: 'Date modification', type: 'text', style: 'width: 10%;' },
    { field: 'pj', header: 'Pj', type: 'text', style: 'width: 20%;' },
    { field: 'commentaire', header: 'Commentaire', type: 'text', style: 'width: 20%;' }
  ];


  
  actions: ActionConfig[] = [
    { label: 'modifier', action: 'modifier', icon: 'assets/images/icone/consult.svg' },
  ];


  filterFields: FilterField[] = [
    { name: 'numParametre', placeholder: 'N° paramètre', type: 'text' },
    { name: 'parametre', placeholder: 'Paramètre', type: 'text' }, 
    { name: 'dateModif', placeholder: 'Date modification', type: 'date' }
  ];

  tableData: Parametrage[] = [];

  constructor(
    private toastService: ToastService,
    private router: Router,
    private parametrageService: ParametrageService,
    private modalService: NgbModal,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {

    this.loadData();
  }

  loadData(page?: number, filters?: any): void {
    const pageSearch: number = page ?? this.page;
    const queryParams = {
      ...this.formFilter?.value,
      page: pageSearch - 1, 
      size: this.itemsPerPage 
    };

    this.parametrageService.getAll(queryParams).subscribe({
      next: (data: HttpResponse<ICampagneIndemnisation[]>) => {
        if (data.body) {
          this.onSuccess(data.body, data.headers, pageSearch);
        }
      }
    });
  }

  protected onSuccess(res: ICampagneIndemnisation[], headers: HttpHeaders, page: number): void {
    this.totalItems = Number(headers.get('X-Total-Count'));
    this.page = page;
    this.tableData = res ?? [];
  }

  onPageChange(page: number): void {
    this.page = page;
    this.loadData(page);
  }



  onActionClick(event: ActionClickEvent<any>): void {

    if(event.action==='filter'){
      this.formFilter = new FormGroup({
        numCampagne: new FormControl(event.item.numCampagne),
        nomAdherent: new FormControl(event.item.nomAdherent),
        natureCampagne: new FormControl(event.item.natureCampagne),
        dateDebut: new FormControl(event.item.dateDebut),
        dateFin: new FormControl(event.item.dateFin)
    });

      this.loadData();

    }
if (event.action === 'modifier') {
      //const id = event.item.numCampagne;
     // this.router.navigateByUrl(`back-office/update-campagne-indemnisation/${id}`);
     this.openUpdateParametregeModal(event.item);

    } 
  }

  openUpdateParametregeModal(parametrageData: IParametrage ){

    /*
    console.log(parametrageData, "  data");
    
    const modalRef = this.modalService.open(UpdateParametrageModalComponent, { size: 'lg', backdrop: 'static' });
    if (parametrageData) {
      modalRef.componentInstance.depotData = parametrageData;
    }

    modalRef.result.then((status) => {
      if(status){
        const confirmModalRef = this.modalService.open(UpdateParametrageModalComponent, { size: 'lg', backdrop: 'static' });
        if(confirmModalRef){
          console.log("add some logic here");
        }      }
    }, () => {});
    */

    const modalRef = this.modalService.open(UpdateParametrageModalComponent, { size: 'lg', backdrop: 'static' });

    if (parametrageData) {
      modalRef.componentInstance.parametrageData = parametrageData;
    }

  }



  setFormItemValues(item?: ICampagneIndemnisation): FormItem[] {
    if (item) {
      this.depotFormItems = [
        {
          itemType: 'field',
          placeholder: 'Adhèrent',
          type: 'text',
          value: item.dateFin,
          disabled: true
        },
        {
          itemType: 'field',
          placeholder: 'Nom Adhèrent',
          type: 'text',
          value: item.dateFin,
          disabled: true,
          validators: [Validators.required]
        },
        {
          itemType: 'field',
          placeholder: 'Nom Adhèrent',
          type: 'text',
          value: item.nomAdherent,
          disabled: true,
          validators: [Validators.required]
        },
        {
          itemType: 'field',
          placeholder: 'Nature Campagne',
          type: 'text',
          value: item.natureCampagne,
          disabled: true,
          validators: [Validators.required]
        },
        {
          itemType: 'field',
          placeholder: 'Date début',
          type: 'date',
          value: item.dateDebut,
          validators: [Validators.required]
        },
        {
          itemType: 'field',
          placeholder: 'Date fin',
          type: 'date',
          value: item.dateFin,
          validators: [Validators.required]
        }
      ]
    } else {
      this.depotFormItems = [

        {
          itemType: 'select',
          placeholder: 'numParametre',
          text:'numParametre',
          type: 'text',
          value: "fhhhdh",
          disabled: false,
          validators: [Validators.required]
        },
        {
          itemType: 'field',
          placeholder: 'parametre',
          text:'',
          type: 'text',
          value: "fhhhdh",
          disabled: false,
          validators: [Validators.required]
        },      {
          itemType: 'field',
          placeholder: 'valeur',
          text:'valeur',
          type: 'text',
          value: "valeur",
          disabled: false,
          validators: [Validators.required]
        },
        {
          itemType: 'select',
          placeholder: 'dateModif',
          text:'dateModif',
          type: 'date',
          value: null,
          disabled: false,
          validators: [Validators.required]
        },
     
    
      ];
    }

    return this.depotFormItems;
  }
}

