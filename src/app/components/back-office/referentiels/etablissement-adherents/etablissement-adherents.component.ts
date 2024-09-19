import {Component, OnInit} from '@angular/core';
import {FormItem} from "../../../../shared/components/form/form.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FormGroup, Validators} from "@angular/forms";
import {
  ActionClickEvent,
  ActionConfig,
  ColumnConfig,
  FilterField
} from "../../../../shared/components/table/table.config";
import {UpdateModalComponent} from "../update-modal/update-modal.component";
import {IEtablissementsAdherents} from "../../../../models/referentiel/etablissements-adherents";
import {ReferentielBaseService} from "../../../../services/referentiel/referentiel-base.service";
import {HttpHeaders, HttpResponse} from "@angular/common/http";
import {
  ConfirmationModalComponent
} from "../../../../shared/components/confirmation-modal/confirmation-modal.component";
import {ToastService} from "../../../../shared/components/toast/toast.service";
import {TranslateService} from "@ngx-translate/core";
import {ITEMS_PER_PAGE} from "../../../../shared/constants/shared.constant";

@Component({
  selector: 'app-etablissement-adherents',
  templateUrl: './etablissement-adherents.component.html',
  styleUrl: './etablissement-adherents.component.scss'
})
export class EtablissementAdherentsComponent implements OnInit{
  totalItemsTitle: string = "référentiels";
  totalItems: number =5;
  page: number = 1;
  itemsPerPage = ITEMS_PER_PAGE;
  predicate: string = '';
  ascending!: boolean;
  formFilter?: FormGroup;
  depotFormItems: FormItem[] = []
  constructor(private modalService: NgbModal, private referentielBaseService: ReferentielBaseService<IEtablissementsAdherents>,
              private toastService: ToastService, private translateService: TranslateService) {
    this.referentielBaseService.setUrlEndpoint('EtablissementsAdherents');
  }

  columns: ColumnConfig[] = [
    { field: 'code', header: 'referentiel.code', type: 'text'},
    { field: 'libelle', header: 'referentiel.libelle', type: 'text'},
    { field: 'sigle', header: 'referentiel.sigle', type: 'text'},
    { field: 'active', header: 'referentiel.active', type: 'badge'},
  ];
  actions: ActionConfig[] = [
    { label: 'modifier', action: 'modifier', icon: 'assets/images/icone/edit.svg' },
    { label: 'desactiver', action: 'desactivier', icon: 'assets/images/icone/desactiver.svg', fieldCondition: 'active', condition: true },
    { label: 'activer', action: 'activer', icon: 'assets/images/icone/activer.svg', fieldCondition: 'active', condition: false },
  ];
  updateButtonAction: () => void = () => this.openUpdateModal();
  filterFields: FilterField[] = [
    { name: 'code', placeholder: 'referentiel.code', type: 'text', style: 'min-width: 100px; width: 100px;' },
    { name: 'libelle', placeholder: 'referentiel.libelle', type: 'text' },
    { name: 'sigle', placeholder: 'referentiel.sigle', type: 'text' },
    { name: 'active', placeholder: 'referentiel.active', type: 'select', options:[{ value: 'true', label: 'Modifier'}, { value: 'false', label: 'Désactiver'}]},
  ];

  tableData: IEtablissementsAdherents[] = []
  ngOnInit() {
    this.loadData();
  }

  loadData(page?:number){
    const pageSearch: number = page ??  this.page ?? 1;
    const queryParams = {
      ...this.formFilter,
      page: pageSearch - 1,
      size: this.itemsPerPage,
      sort: this.sort(),
    };
    this.referentielBaseService.getAll(queryParams).subscribe({
      next: (data:HttpResponse<IEtablissementsAdherents[]>)=>{
        if(data.body)
          this.onSuccess(data.body, data.headers, pageSearch);
      }
    });
  }
  protected onSuccess(res: IEtablissementsAdherents[], headers: HttpHeaders, page: number): void {
    this.totalItems = Number(headers.get('X-Total-Count'));
    // this.page = page;
    this.tableData =  res ?? [];
  }
  protected sort(): string[] {
    const result = [this.predicate + ',' + (this.ascending ? 'asc' : 'desc')];
    if (this.predicate !== 'id') {
      result.push('id');
    }
    return result;
  }
  handelActions(event: ActionClickEvent<any>): void {
    if (event.action === 'desactiver' || event.action === 'activer') {
      const modalRef = this.modalService.open(ConfirmationModalComponent, { size: 'lg', backdrop: 'static' });
      const isActiver = event.action === 'activer'
      modalRef.componentInstance.title = !isActiver? 'referentiel.desactiverMessage' : 'referentiel.activerMessage';
      modalRef.componentInstance.value = event.item.libelle;
      modalRef.result.then((result) => {
        if(result){
          this.referentielBaseService.toggleActivate(event.item.id).subscribe({
            next: () => {
              const message = isActiver? 'global.messages.activerSuccess': 'global.messages.desactiverSuccess'
              this.toastService.showSuccess(this.translateService.instant(message));
              this.loadData()}
          });
        }

      }, () => {});
    }else if(event.action === 'modifier'){
      this.openUpdateModal(event.item,event.action);
    }else if (event.action === 'filter'){
      this.formFilter = event.item;
      this.loadData();
    }else if (event.action === 'reset-filter'){
      this.formFilter = event.item;
      this.loadData();
    }
  }
  openUpdateModal(item?:IEtablissementsAdherents,action?:string) {
    const modalRef = this.modalService.open(UpdateModalComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.formItems = this.setFormItemValues(item);
    if(action==='modifier'){
      modalRef.componentInstance.title="MODIFIER UNE NOUVELLE VALEUR"
    }else{
      modalRef.componentInstance.title="AJOUTER UNE NOUVELLE VALEUR"
    }
    modalRef.result.then((form) => {
      const etablissementsAdherents: IEtablissementsAdherents = form.value;
      etablissementsAdherents.id = item?.id;
      etablissementsAdherents.active = item?.active;
      this.referentielBaseService.createOrUpdate(etablissementsAdherents)
        .subscribe({
          next: (res) => {
            this.toastService.showSuccess(this.translateService.instant('global.messages.addSuccess'));
            this.loadData()          }
        })
    }, () => {});
  }

  setFormItemValues(item?:IEtablissementsAdherents):FormItem[]{
    if(item){
      this.depotFormItems = [
        {
          itemType: 'field',
          placeholder: 'referentiel',
          type: 'text',
          value: "Etablissement Adherents",
          disabled: true,
        },
        {
          itemType: 'field',
          placeholder: 'code',
          type: 'text',
          value: item.code,
          disabled: false,
          validators: [Validators.required]
        },
        {
          itemType: 'field',
          placeholder: 'libelle',
          type: 'text',
          value: item.libelle,
          disabled: false,
          validators: [Validators.required]
        },
        {
          itemType: 'field',
          placeholder: 'sigle',
          type: 'text',
          value: item.sigle,
          disabled: false,
          validators: [Validators.required]
        }
      ]
    }else {
      this.depotFormItems = [
        {
          itemType: 'field',
          placeholder: 'referentiel',
          type: 'text',
          value: "Etablissement adhérents",
          disabled: true,
        },
        {
          itemType: 'field',
          placeholder: 'code',
          type: 'text',
          value: null,
          disabled: false,
          validators: [Validators.required]
        },
        {
          itemType: 'field',
          placeholder: 'libelle',
          type: 'text',
          value: null,
          disabled: false,
          validators: [Validators.required]
        },
        {
          itemType: 'field',
          placeholder: 'sigle',
          type: 'text',
          value: null,
          disabled: false,
          validators: [Validators.required]
        }
      ]
    }
    return this.depotFormItems;
  }
}
