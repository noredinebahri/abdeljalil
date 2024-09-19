import {Component, Input, OnInit} from '@angular/core';
import {ActionClickEvent, ActionConfig, ColumnConfig, FilterField} from "../../../shared/components/table/table.config";
import {CriticiteDossier} from "../../../enums/criticite-dossier";
import {IReclamation} from "../../../models/reclamation";
import {ReclamationService} from "../../../services/deposant/reclamation.service";
import {TranslateService} from "@ngx-translate/core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-reclamation-agent-payeur',
  templateUrl: './reclamation-agent-payeur.component.html',
  styleUrl: './reclamation-agent-payeur.component.scss'
})
export class ReclamationAgentPayeurComponent implements OnInit {
  @Input() baseSourceRoute: string = '';
  @Input() noDataFoundMessage: string | null = 'tools.table.noDataFoundMessage';

  columns: ColumnConfig[] = [
    { field: 'ndossier', header: 'N° dossier' },
    { field: 'numReclamation', header: 'N° réclamation' },
    { field: 'nature', header: 'Nature' },
    { field: 'provenance', header: 'Provenance' },
    { field: 'createdAt', header: 'Date de création' },
    { field: 'status', header: 'Statut', type: 'badge' },
    { field: 'criticality', header: 'Criticité', type: 'badge' }
  ];

  filterFields: FilterField[] = [
    { name: 'numeroDossier', placeholder: 'N° dossier', type: 'text' },
    { name: 'numeroReclamation', placeholder: 'N° réclamation', type: 'text' },
    { name: 'nature', placeholder: 'Nature', type: 'select', options: [{ value: '1', label: 'Option 1' }, { value: '2', label: 'Option 2' }] },
    { name: 'provenance', placeholder: 'Provenance', type: 'select', options: [{ value: '1', label: 'Option 1' }, { value: '2', label: 'Option 2' }] },
    { name: 'dateCreation', placeholder: 'Date création', type: 'date' },
    { name: 'statut', placeholder: 'Statut', type: 'select', options: [{ value: '1', label: 'Option 1' }, { value: '2', label: 'Option 2' }] },
    { name: 'criticite', placeholder: 'Criticité', type: 'select', options: [{ value: '1', label: 'Option 1' }, { value: '2', label: 'Option 2' }] }
  ];


  actions: ActionConfig[] = [
    { label: 'consult', action: 'consult', icon: 'assets/images/icone/consult.svg' },
  ];

  reclamations: IReclamation[] = [];
  translatedReclamations: any[] = [];

  totalItems: number = 200;
  itemsPerPage: number = 10;
  page: number = 1;

  constructor(
    private reclamationService: ReclamationService,
    private translate: TranslateService,
   private router: Router,
  ) { }

  ngOnInit(): void {
    this.loadReclamationData();
  }

  loadReclamationData() {
    this.reclamationService.getAllReclamations().subscribe(
      (data) => {
        this.reclamations = data;
        this.translateReclamations();
      },
      (error) => {
        console.error('Error fetching reclamations', error);
      }
    );
  }

  translateReclamations() {
    const translations = this.translate.instant('enum.natureReclamation');
    this.translatedReclamations = this.reclamations.map(reclamation => {
      const natureKey = reclamation.nature as keyof typeof translations;
      return {
        ...reclamation,
        nature: translations[natureKey] || reclamation.nature
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
      this.router.navigateByUrl(this.baseSourceRoute + '/detail-reclamation-agent-payeur/reclamation');
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
