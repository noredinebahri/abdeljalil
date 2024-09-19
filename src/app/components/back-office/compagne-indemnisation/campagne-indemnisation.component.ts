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

@Component({
  selector: 'app-campagne-indemnisation',
  templateUrl: './campagne-indemnisation.component.html',
  styleUrls: ['./campagne-indemnisation.component.scss']
})
export class CampagneIndemnisationComponent implements OnInit {

  totalItems: number = 0; 
  page: number = 1;
  itemsPerPage: number = 10; 
  isDeleted: boolean = false;

  formFilter?: FormGroup;
  depotFormItems: FormItem[] = [];
  item: ICampagneIndemnisation | undefined;

  totalItemsTitle: string = "compagne-indemnisation";

  columns: ColumnConfig[] = [
    { field: 'numCampagne', header: 'N° camp', type: 'text', style: 'width: 10%;' },
    { field: 'nomAdherent', header: 'Nom adhérent', type: 'text', style: 'width: 23%;' },
    { field: 'natureCampagne', header: 'Nature', type: 'text', style: 'width: 23%;' },
    { field: 'dateDebut', header: 'Date début', type: 'text', style: 'width: 23%;' },
    { field: 'dateFin', header: 'Date fin', type: 'text', style: 'width: 23%;' }
  ];


  
  actions: ActionConfig[] = [
    { label: 'consult', action: 'consult', icon: 'assets/images/icone/consult.svg'  },
    { label: 'modifier', action: 'modifier', icon: 'assets/images/icone/consult.svg' },
    { label: 'delete', action: 'supprimer', icon: 'assets/images/icone/consult.svg' }
  ];


  filterFields: FilterField[] = [
    { name: 'numCampagne', placeholder: 'N° campagne', type: 'text' },
    { name: 'nomAdherent', placeholder: 'Nom adhérent', type: 'text' }, 
    { name: 'natureCampagne', placeholder: 'Nature campagne', type: 'text' }, 
    { name: 'dateDebut', placeholder: 'Date début', type: 'date' }, 
    { name: 'dateFin', placeholder: 'Date fin', type: 'date' }
  ];

  tableData: CampagneIndemnisation[] = [];

  constructor(
    private toastService: ToastService,
    private router: Router,
    private compagneIndemnisationService: CampagneIndemnisationService,
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

    this.compagneIndemnisationService.getAll(queryParams).subscribe({
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
    if (event.action === 'consult') {
      const id = event.item.numCampagne;
      this.router.navigateByUrl(`back-office/detail-campagne-indemnisation/${id}`);
    } else if (event.action === 'newRecord') {
      this.newRecordAction(); 
    } else if (event.action === 'modifier') {
      const id = event.item.numCampagne;
      this.router.navigateByUrl(`back-office/update-campagne-indemnisation/${id}`);
    } else if (event.action === 'delete') {
      const id = event.item.numCampagne;
      this.isDeleted = true;
      this.deleteCompagne(id);
    }
  }

  deleteCompagne(id: number): void {
    const modalRef = this.modalService.open(ConfirmationModalComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.itemId = id;
    modalRef.componentInstance.title =  'indemnisation.supressionTitle';
    modalRef.componentInstance.value = id;

    modalRef.componentInstance.confirmDelete.subscribe(() => {
      if (id) {
        this.compagneIndemnisationService.delete(id).subscribe(
          () => {
            this.router.navigate(['/compagne-indemnisation']); 
            this.loadData(); // Reload data after deletion
          },
          error => {
            console.error('Error deleting compagne:', error);
          }
        );
      }
    });
  
    modalRef.componentInstance.cancelDelete.subscribe(() => {
      modalRef.close();
    });
  }

  newRecordAction: () => void = () => this.openUpdateModal();

  openUpdateModal(item?: ICampagneIndemnisation): void {
    const modalRef = this.modalService.open(UpdateModalComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.formItems = this.setFormItemValues(item);
    modalRef.componentInstance.title = 'indemnisation.title';
  
    modalRef.result.then((result) => {
      const form = result as FormGroup;
      const compagneIndemnisation: ICampagneIndemnisation = form.value;
    
      if (item) {
        compagneIndemnisation.nomAdherent = item.nomAdherent ?? compagneIndemnisation.nomAdherent;
        compagneIndemnisation.natureCampagne = item.natureCampagne ?? compagneIndemnisation.natureCampagne;
        compagneIndemnisation.dateFin = item.dateFin ?? compagneIndemnisation.dateFin;
        compagneIndemnisation.dateDebut = item.dateDebut ?? compagneIndemnisation.dateDebut;
      }
      this.compagneIndemnisationService.create(compagneIndemnisation).subscribe({
        next: (response: ICampagneIndemnisation) => {
          const createdId = response.numCampagne; 
          this.toastService.showSuccess(this.translateService.instant('global.messages.addSuccess'));
          this.router.navigateByUrl(`/consult-idemnisation/${createdId}`);
          this.loadData(); // Reload data after new record creation
        }
      });

    }, () => {});
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
          placeholder: 'nomAdherent',
          text:'nomAdherent',
          type: 'text',
          value: null,
          disabled: false,
          validators: [Validators.required]
        },
        {
          itemType: 'field',
          placeholder: 'dateDebut',
          text:'dateDebut',
          type: 'date',
          value: null,
          disabled: false,
          validators: [Validators.required]
        },      {
          itemType: 'field',
          placeholder: 'dateFin',
          text:'dateFin',
          type: 'date',
          value: null,
          disabled: false,
          validators: [Validators.required]
        },
        {
          itemType: 'select',
          placeholder: 'natureCampagne',
          text:'natureCampagne',
          type: 'text',
          value: null,
          disabled: false,
          validators: [Validators.required]
        },
     
    
      ];
    }

    return this.depotFormItems;
  }
}
