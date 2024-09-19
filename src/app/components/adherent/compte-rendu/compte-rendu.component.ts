import {Component, OnInit} from '@angular/core';
import {ActionClickEvent, ActionConfig, ColumnConfig, FilterField} from "../../../shared/components/table/table.config";
import {TranslateService} from "@ngx-translate/core";
import {Router} from "@angular/router";
import {CompteRenduService} from "../../../services/adherent/compte-rendu.service";
import {IcompteRendu} from "../../../models/adherent/compte-rendu";

@Component({
  selector: 'app-compte-rendu',
  templateUrl: './compte-rendu.component.html',
  styleUrl: './compte-rendu.component.scss'
})
export class CompteRenduComponent implements OnInit{

  compteRendu: IcompteRendu[] = [];
  totalItems: number = 0;
  itemsPerPage: number = 10;
  page: number = 1;

  columns: ColumnConfig[] = [
    { field: 'nom', header: 'Nom', style: 'width: 75%;' },
    { field: 'dateGeneration', header: 'Date génération', style: 'width: 20%;', type:'date' },
  ];

  filterFields: FilterField[] = [
    { name: 'nom', placeholder: 'Nom', type: 'text', style: 'width: 60%'},
    { name: 'dateGeneration', placeholder: 'Date de génération', type: "date" },
  ];

  actions: ActionConfig[] = [
    { label: 'Télécharger', action: 'download', icon: 'assets/images/icone/download.svg' },
  ];

  // comptesRendu: any[] = [
  //   {nom: 'Lorem Ipsum dolor', dateGeneration: '00/00/0000'},
  //   {nom: 'Lorem Ipsum dolor', dateGeneration: '00/00/0000'},
  //   {nom: 'Lorem Ipsum dolor', dateGeneration: '00/00/0000'},
  //   {nom: 'Lorem Ipsum dolor', dateGeneration: '00/00/0000'},
  //   {nom: 'Lorem Ipsum dolor', dateGeneration: '00/00/0000'},
  //   {nom: 'Lorem Ipsum dolor', dateGeneration: '00/00/0000'},
  //   {nom: 'Lorem Ipsum dolor', dateGeneration: '00/00/0000'},
  //   {nom: 'Lorem Ipsum dolor', dateGeneration: '00/00/0000'},
  //   {nom: 'Lorem Ipsum dolor', dateGeneration: '00/00/0000'},
  //   {nom: 'Lorem Ipsum dolor', dateGeneration: '00/00/0000'},
  // ];

  loadCopmteRenduData() {
    this.compteRenduService.getAllCopmteRendu().subscribe(
      (data) => {
        this.compteRendu = data;
        this.totalItems = this.compteRendu.length;
      },
      () => {
        console.error('Error fetching CRs error');
      }
    );
  }



  constructor(
    private translate: TranslateService,
    private router: Router,
    private compteRenduService: CompteRenduService
  ) { }

  ngOnInit(): void {
    this.loadCopmteRenduData()
  }


  onDownloadFile(event: ActionClickEvent<any>): void {
    if (event.action === 'download') {
      this.router.navigateByUrl('detail-reclamation-agent-payeur/reclamation');
    } else {
      console.log(`Action: ${event.action}, Item: `, event.item);
    }
  }

  handlePageChange(page: number) {
    this.page = page;
    // Handle the page change logic
  }
}
