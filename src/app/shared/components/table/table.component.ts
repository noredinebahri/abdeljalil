import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { StatusDossier } from "../../../enums/status-dossier";
import { CriticiteDossier } from "../../../enums/criticite-dossier";
import { ActionClickEvent, ActionConfig, ColumnConfig, FilterField } from "./table.config";
import { ITEMS_PER_PAGE } from "../../constants/shared.constant";
import { FormBuilder, FormGroup } from "@angular/forms";
import { StatusCompte } from "../../../enums/status-compte";
import { StatusRole } from "../../../enums/role-statut";





@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TableComponent<T extends { [key: string]: any }> {

  protected maxSize: number = 9;
  protected page: number = 1;


  @Input() columnsSuffix: string = '';
  @Input() columns: ColumnConfig[] = [];
  @Input() data: T[] = [];
  @Input() actions: ActionConfig[] = [];
  @Input() noDataFoundMessage: string | null = 'tools.table.noDataFoundMessage';
  @Input() pagination: boolean = false;
  @Input() totalItems: number = 0;
  @Input() itemsPerPage: number = ITEMS_PER_PAGE;
  @Input() displayItemCount: boolean = false;
  @Input() titlePage?: string;
  @Input() titleTotalItems?: string;
  @Input() filter: boolean = false;
  @Input() filterFields: FilterField[] = [];
  @Input() filterFieldsAvance: FilterField[] = [];
  @Input() backgroundFilter: boolean = false;
  @Input() newRecordBtnLink?: () => void;
  @Input() newValeurButton?: string;
  @Input() canBackToList?: boolean;


  @Output() actionClick: EventEmitter<ActionClickEvent<T>> = new EventEmitter<ActionClickEvent<T>>();
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();
  @Input() isFieldsAvance?: boolean = true;


  filterForm?: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    if (this.filter) {
      this.createFilterForm();
    //  this.createFilterFormAdvance();
    }
  }

  private createFilterForm() {
    const group = this.filterFields.reduce((acc: { [key: string]: any }, field) => {
      acc[field.name] = [''];
      return acc;
    }, {});
    this.filterForm = this.formBuilder.group(group);
  }

  private createAdvanceFilterForm() {
    const group = this.filterFieldsAvance.reduce((acc: { [key: string]: any }, field) => {
      acc[field.name] = [''];
      return acc;
    }, {});
    this.filterForm = this.formBuilder.group(group);
  }

  changePage(newPage: number): void {
    if (newPage < 1 || newPage > Math.ceil(this.totalItems / this.itemsPerPage)) {
      return;
    }
    this.page = newPage;
    this.pageChange.emit(this.page);
  }

  protected handleAction(action: ActionConfig, item: T): void {
    this.actionClick.emit({ action: action.label, item });
  }


  onFilter() {
    let controls: any;
    this.filterFields.map(field => controls = { ...controls, [field.name]: this.filterForm?.get(field.name)?.value ?? '' });
    this.handleAction({ label: "filter", action: "filter" }, controls);
  }
  onResetFilter() {
    this.filterForm?.reset();
    let controls: any;
    this.filterFields.map(field => controls = { ...controls, [field.name]: this.filterForm?.get(field.name)?.value ?? '' });
    this.handleAction({ label: "reset-filter", action: "reset-filter" }, controls);
  }

  protected handlePageChange(page: number) {
    if (this.pagination) {
      this.page = page;
      this.pageChange.emit(page);
    }
  }

  getTranslationKey(field: string | boolean): string {
    let category = '';
    if (field === CriticiteDossier.FAIBLE || field === CriticiteDossier.ELEVEE || field === CriticiteDossier.CRITIQUE) {
      category = 'enum.criticite.';
    } else if (field === StatusCompte.STP) {
      category = 'enum.statutCompte.';
    }
    else if (field === StatusCompte.NSTP) {
      category = 'enum.statutCompte.';
    }
    else if (typeof field === "boolean") {
      category = 'enum.referentiel.';
    }
    else if (field === StatusRole.true || field === StatusRole.false) {
      category = 'enum.roleStatut.';
    }
   // else {
    //  category = 'enum.statutDossier.';
   // }
    return category;
  }

  getBadgeClass(status: string | boolean): string {
    switch (status) {
      case StatusDossier.INITIALE:
      case StatusDossier.EN_COURS:
        return 'badge En-cours';
      case StatusDossier.NOUVELLE_DEMANDE:
      case StatusDossier.EN_ATTENTE_DE_QUALIFICATION:
        return 'badge Nouvelle-demande';
      case StatusDossier.EN_ATTENTE_DE_COMPLEMENT:
      case StatusDossier.EN_ATTENTE_DE_VALIDATION:
        return 'badge En-attente';
      case StatusDossier.TRAITEE:
      case StatusDossier.APPROUVE:
      case StatusDossier.VALIDE_PAR_SGFG:
      case StatusDossier.EXECUTEE:
      case StatusDossier.VALIDER:
      case StatusDossier.ACTIVER:
        return 'badge Traitée';
      case StatusDossier.CLOTUREE:
        return 'badge Clôturée';
      case StatusRole.true:
        return 'badge Validée';
      case StatusRole.false:
        return 'badge Rejetée';
      case CriticiteDossier.CRITIQUE:
      case StatusDossier.REJETE_PAR_SGFG:
      case StatusDossier.REJECTEE:
      case StatusDossier.ANUULER:
      case StatusDossier.DESACTIVER:
      case StatusDossier.FRAUDE_VALIDEE:
        return 'badge Critique';
      case CriticiteDossier.ELEVEE:
        return 'badge Élevée';
      case CriticiteDossier.FAIBLE:
      case StatusDossier.BROUILLON:
      case StatusDossier.EN_ATTENTE_APPROBATION:
        return 'badge Faible';
      case StatusCompte.STP:
        return 'badge Traitée';
      case StatusCompte.NSTP:
        return 'badge Nouvelle-demande';

      case true:
        return 'badge activer';
      case false:
        return 'badge desactiver';
      default:
        return 'badge';
    }
  }

  applyFilter() {
    const filters = this.filterForm?.value;
    this.data = this.data.filter(item => {
      return Object.keys(filters).every(key => {
        return item[key].toString().toLowerCase().includes(filters[key].toString().toLowerCase());
      });
    });
  }

  clearFilter() {
    this.filterForm?.reset();
  }

  getOptions(options?: { label: string, value: any }[]): { label: string, value: any }[] | null {
    return options || null;
  }
  goBack() {
    window.history.back();
  }


}
