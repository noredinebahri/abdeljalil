import {Component, Input, OnInit} from '@angular/core';
import {ActionClickEvent, ActionConfig, ColumnConfig, FilterField} from "../../../shared/components/table/table.config";
import {IReclamation} from "../../../models/reclamation";
import {ReclamationService} from "../../../services/deposant/reclamation.service";
import {TranslateService} from "@ngx-translate/core";
import {Router} from "@angular/router";
import {CriticiteDossier} from "../../../enums/criticite-dossier";
import {IDepotExceptionnel} from "../../../models/depot-exceptionnel";
import {DepotExceptionnelService} from "../../../services/deposant/depot-exceptionnel.service";

@Component({
  selector: 'app-list-depot-exceptionnel',
  templateUrl: './list-depot-exceptionnel.component.html',
  styleUrl: './list-depot-exceptionnel.component.scss'
})
export class ListDepotExceptionnelComponent implements OnInit {

  @Input() noDataFoundMessage: string | null = 'tools.table.noDataFoundMessage';

  columns: ColumnConfig[] = [
    { field: 'ndepot', header: 'Nº dépôt' },
    { field: 'ndossier', header: 'N° dossier' },
    { field: 'nomPrenom', header: 'Nom & prénom / Raison sociale' },
    { field: 'typeDeposant', header: 'T. Dépo.' },
    { field: 'nature', header: 'Nature dépôt' },
    { field: 'dateDeclaration', header: 'Date décl.' },
    { field: 'status', header: 'Statut', type: 'badge' },
  ];

  filterFields: FilterField[] = [
    { name: 'ndepot', placeholder: 'Nº dépôt', type: 'text' },
    { name: 'ndossier', placeholder: 'N° dossier', type: 'text' },
    { name: 'nomPrenom', placeholder: 'Nom & prénom', type: 'text' },
    { name: 'typeDeposant', placeholder: 'Type Déposant', type: 'select', options: [{ value: '1', label: 'Option 1' }, { value: '2', label: 'Option 2' }] },
    { name: 'natureDepot', placeholder: 'Nature dépôt', type: 'select', options: [{ value: '1', label: 'Option 1' }, { value: '2', label: 'Option 2' }] },
    { name: 'dateDeclaration', placeholder: 'Date de déclaration', type: 'date' },
    { name: 'statut', placeholder: 'Statut', type: 'select', options: [{ value: '1', label: 'Option 1' }, { value: '2', label: 'Option 2' }] },
  ];


  actions: ActionConfig[] = [
    { label: 'consult', action: 'consult', icon: 'assets/images/icone/consult.svg' },
  ];

  depotsExceptionnels: IDepotExceptionnel[] = [];
  translatedDepotExceptionnel: any[] = [];

  totalItems: number = 200;
  itemsPerPage: number = 10;
  page: number = 1;

  constructor(
    private depotExceptionnelService: DepotExceptionnelService,
    private translate: TranslateService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.loadDepotExceptionnelData();
  }

  loadDepotExceptionnelData() {
    this.depotExceptionnelService.getAllDepots().subscribe({
      next: (data) => {
        this.depotsExceptionnels = data;
        this.translateDepotExceptionnel();
      },
      error: (error) => {
        console.error('Error fetching reclamations', error);
      }
    }
    );
  }

  translateDepotExceptionnel() {
    const translations = this.translate.instant('enum.natureReclamation');
    this.translatedDepotExceptionnel = this.depotsExceptionnels.map(depotExceptionnel => {
      const natureKey = depotExceptionnel.nature as keyof typeof translations;
      return {
        ...depotExceptionnel,
        nature: translations[natureKey] || depotExceptionnel.nature
      };
    });
  }

  applyFilter() {
    //const filters = this.filterForm?.value;
    // Apply filters to the data
  }

  clearFilter() {
    //this.filterForm?.reset();
    // Clear the filters and reload the data
  }

  onActionClick(event: ActionClickEvent<any>): void {
    if (event.action === 'consult') {
      this.router.navigateByUrl('adherent/details/depots');
    } else {
      console.log(`Action: ${event.action}, Item: `, event.item);
    }
  }

  handlePageChange(page: number) {
    this.page = page;
    // Handle the page change logic
  }

  getBadgeClass(status: string): string {
    switch (status) {
      case 'OUVERTE':
        return 'badge ouverte';
      case 'REPONDUE':
        return 'badge respondue';
      case 'TRAITEE':
        return 'badge traitée';
      case 'CLOTUREE':
        return 'badge clôturée';
      case 'CRITIQUE':
        return 'badge critique';
      case 'ELEVEE':
        return 'badge élevée';
      case 'FAIBLE':
        return 'badge faible';
      default:
        return 'badge';
    }
  }

  getTranslationKey(field: string): string {
    let category = '';
    if (field === CriticiteDossier.FAIBLE || field === CriticiteDossier.ELEVEE || field === CriticiteDossier.CRITIQUE) {
      category = 'enum.criticite.';
    } else {
      category = 'enum.statutDossier.';
    }
    return category;
  }

}
