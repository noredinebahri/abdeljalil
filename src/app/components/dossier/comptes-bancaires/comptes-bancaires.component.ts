import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {ActionClickEvent, ActionConfig, ColumnConfig, FilterField} from "../../../shared/components/table/table.config";
import {CompteBancaireService} from "../../../services/deposant/compte-bancaire.service";
import {IComptes} from "../../../models/comptes";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-comptes-bancaires',
  templateUrl: './comptes-bancaires.component.html',
  styleUrl: './comptes-bancaires.component.scss'
})
export class ComptesBancairesComponent {


  translatedComptesBancaires: any[] = [];
  heritier: IComptes[] = [];
  totalItemsTitle: string = "comptes bancaires ";
  totalItems: number =200;

  constructor(private compteBancaireService: CompteBancaireService,
              private translate: TranslateService,
              private router: Router) {
  }

  columns: ColumnConfig[] = [
    { field: 'pcec', header: 'deposant.compte.table.pcec', type: 'text' },
    { field: 'natureCompte', header: 'deposant.compte.table.natureCompte', type: 'text' },
    { field: 'rib', header: 'deposant.compte.table.rib', type: 'text' },
    { field: 'statusCompte', header: 'deposant.compte.table.statusCompte', type: 'badge'  },
  ];
  actions: ActionConfig[] = [
    { label: 'consult', action: 'consult', icon: 'assets/images/icone/consult.svg' },
  ];


  filterFields: FilterField[] = [

    { name: 'pcec', placeholder: 'PCEC', type: 'select', options: [{ value: '1', label: 'compte courant' }, { value: '2', label: 'compte courant' }] },
    { name: 'natureCompte', placeholder: 'Nature compte', type: 'select', options: [{ value: '1', label: 'Individuel' }, { value: '2', label: 'Option 2' }] },
    { name: 'rib', placeholder: 'Rib', type: 'text' },
  ];

  translateComptesBancaires() {
    const translations = this.translate.instant('enum.statutCompte');
    this.translatedComptesBancaires = this.heritier.map(heritier => {
      const statusCompteKey = heritier.statusCompte as keyof typeof translations;
      return {
        ...heritier,
        statusCompte: translations[statusCompteKey] || heritier.statusCompte
      };
    });
  }



  onActionClick(event: ActionClickEvent<any>): void {
    if (event.action === 'consult') {
      this.router.navigateByUrl('detail-compte-bancaire');
    } else {
      console.log(`Action: ${event.action}, Item: `, event.item);
    }
  }




  loadHeritierData() {
    this.compteBancaireService.getAllComptBancaire().subscribe(
        (data) => {
          this.heritier = data;
           this.translateComptesBancaires();
        },
        (error) => {
          console.error('Error fetching comptes', error);
        }
    );
  }

  ngOnInit() {
    console.log("result : ", JSON.parse(localStorage.getItem('ComptesData')!));
    this.loadHeritierData();
  }


}
