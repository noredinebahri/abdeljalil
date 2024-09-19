import {Component, OnInit, OnDestroy} from '@angular/core';
import {ITEMS_PER_PAGE} from "../../../../shared/constants/shared.constant";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ReferentielBaseService} from "../../../../services/referentiel/referentiel-base.service";
import {ToastService} from "../../../../shared/components/toast/toast.service";
import {TranslateService} from "@ngx-translate/core";
import {IMotifsRejetInstructionsPaiement} from "../../../../models/referentiel/motifs-rejetInstructions-paiement";
import {ActionConfig, ColumnConfig} from "../../../../shared/components/table/table.config";
import {ActionClickEvent, FilterField} from "../../../../shared/components/form/form.config";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UpdateModalComponent} from "../update-modal/update-modal.component";
import {FormItem} from "../../../../shared/components/form/form.component";
import {ConfirmationModalComponent} from "../../../../shared/components/confirmation-modal/confirmation-modal.component";
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-motifs-rejet-instruction-paiement',
  templateUrl: './motifs-rejet-instruction-paiement.component.html',
  styleUrl: './motifs-rejet-instruction-paiement.component.scss'
})
export class MotifsRejetInstructionPaiementComponent implements OnInit, OnDestroy {
  tableData: IMotifsRejetInstructionsPaiement[] = [];
  totalItems: number = 1;
  page: number = 1;
  itemsPerPage = ITEMS_PER_PAGE;
  private destroy$: Subject<void> = new Subject();

  constructor(private modalService: NgbModal,
              private referentielBaseService: ReferentielBaseService<IMotifsRejetInstructionsPaiement>,
              private toastService: ToastService,
              private translateService: TranslateService) {
    this.referentielBaseService.setUrlEndpoint('MotifsRejetInstructionsPaiement');
  }

  columns: ColumnConfig[] = [
    { field: 'code', header: 'referentiel.code', type: 'text' },
    { field: 'libelle', header: 'referentiel.libelle', type: 'text' },
    { field: 'active', header: 'referentiel.active', type: 'badge' },
  ];

  actions: ActionConfig[] = [
    { label: 'modifier', action: 'modifier', icon: 'assets/images/icone/edit.svg' },
    { label: 'desactiver', action: 'desactiver', icon: 'assets/images/icone/desactiver.svg', fieldCondition: 'active', condition: true },
    { label: 'activer', action: 'activer', icon: 'assets/images/icone/activer.svg', fieldCondition: 'active', condition: false },
  ];

  filterFields: FilterField[] = [
    { name: 'code', placeholder: 'referentiel.code', type: 'text' },
    { name: 'libelle', placeholder: 'referentiel.libelle', type: 'text' },
    { name: 'active', placeholder: 'referentiel.active', type: 'select', options: [{ value: 'true', label: 'activer' }, { value: 'false', label: 'Désactiver' }] },
  ];

  ngOnInit(): void {
    this.loadData();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private loadData(page: number = this.page, filters: any = {}): void {
    const queryParams = { ...filters, page: page - 1, size: this.itemsPerPage };
    this.referentielBaseService.getAll(queryParams)
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        this.tableData = res.body ?? [];
        this.totalItems = Number(res.headers.get('X-Total-Count'));
      });
  }

  handleAction(event: ActionClickEvent<IMotifsRejetInstructionsPaiement>): void {
    const actionMap: { [key: string]: () => void } = {
      filter: () => this.applyFilter(event.item),
      resetFilter: () => this.loadData(),
      modifier: () => this.openCreateUpdateModal(event.item, 'modifier'),
      activer: () => this.toggleActivation(event.item, true),
      desactiver: () => this.toggleActivation(event.item, false)
    };

    actionMap[event.action]?.();
  }

  createAction: () => void = () => this.openCreateUpdateModal();

  private applyFilter(filters: IMotifsRejetInstructionsPaiement): void {
    const formFilter = new FormGroup({
      code: new FormControl(filters.code?.trim() || ''),
      libelle: new FormControl(filters.libelle?.trim() || ''),
      active: new FormControl(filters.active || null)
    });
    this.loadData(this.page, formFilter.value);
  }

  private toggleActivation(item: IMotifsRejetInstructionsPaiement, activate: boolean): void {
    const modalRef = this.modalService.open(ConfirmationModalComponent, { size: 'lg', backdrop: 'static' });
    const actionKey = activate ? 'activer' : 'desactiver';
    modalRef.componentInstance.title = this.translateService.instant(`referentiel.${actionKey}Message`);
    modalRef.componentInstance.value = item.libelle;

    modalRef.result
      .then((confirmed) => {
        if (confirmed) {
          this.referentielBaseService.toggleActivate(item.id!)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
              const successKey = activate ? 'global.messages.activerSuccess' : 'global.messages.desactiverSuccess';
              this.toastService.showSuccess(this.translateService.instant(successKey));
              this.loadData();
            });
        }
      })
      .catch(() => {});
  }
  openCreateUpdateModal(item?: IMotifsRejetInstructionsPaiement, action: string = 'ajouter'): void {
    const modalRef = this.modalService.open(UpdateModalComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.formItems = this.createFormItems(item);
    modalRef.componentInstance.action = action;
    modalRef.componentInstance.title = action === 'modifier' ? 'MODIFIER UNE VALEUR' : 'AJOUTER UNE VALEUR';

    modalRef.result.then((form) => {
      const updatedItem: IMotifsRejetInstructionsPaiement = { ...form.value, id: item?.id, active: item?.active };
      this.referentielBaseService.createOrUpdate(updatedItem).subscribe({
        next: () => this.onSuccess(action),
        error: (error) => this.onError(error)
      });
    });
  }

  private createFormItems(item?: IMotifsRejetInstructionsPaiement): FormItem[] {
    return [
      { itemType: 'field', placeholder: 'referentiel', type: 'text', value: 'Motifs de rejet de l\'instruction de paiement', disabled: true },
      { itemType: 'field', placeholder: 'code', type: 'text', value: item?.code || '', validators: [Validators.required] },
      { itemType: 'field', placeholder: 'libelle', type: 'text', value: item?.libelle || '', validators: [Validators.required] },
    ];
  }

  private onSuccess(action: string): void {
    const messageKey = action === 'modifier' ? 'global.messages.updateSuccess' : 'global.messages.addSuccess';
    this.toastService.showSuccess(this.translateService.instant(messageKey));
    this.loadData();
  }

  private onError(error: any): void {
    if (error.error.message === 'global.messages.codeAlreadyExisteVerification') {
      this.toastService.showError(this.translateService.instant('errorMessage'));
    }
  }

  onPageChange(page: number): void {
    this.page = page;
    this.loadData(page);
  }
}
