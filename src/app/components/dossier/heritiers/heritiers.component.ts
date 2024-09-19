import {Component, Input} from '@angular/core';
import {IReprentants} from "../../../models/representants";
import {RepresentantService} from "../../../services/deposant/representant.service";
import {Router} from "@angular/router";
import {ActionClickEvent, ActionConfig, ColumnConfig} from "../../../shared/components/table/table.config";
import {IHeritier} from "../../../models/heritiers";
import {HeritierService} from "../../../services/deposant/heritier.service";

@Component({
  selector: 'app-heritiers',
  templateUrl: './heritiers.component.html',
  styleUrl: './heritiers.component.scss'
})
export class HeritiersComponent {
  @Input() baseSourceRoute: string = '';

  //translatedReclamations: any[] = [];
  heritier: IHeritier[] = [];

  constructor(private representantService: HeritierService,
              //private translate: TranslateService,
              private router: Router) {
  }

  columns: ColumnConfig[] = [
    // { field: 'idScv', header: 'deposant.heritier.table.idScv', type: 'text' },
    { field: 'natureId', header: 'deposant.heritier.table.natureId', type: 'text' },
    // { field: 'natureIdDeposantHeritiers', header: 'deposant.heritier.table.natureIdDeposantHeritiers', type: 'text' },
    { field: 'nId', header: 'deposant.heritier.table.nId', type: 'text' },
    { field: 'nomAndPrenom', header: 'deposant.heritier.table.nomAndPrenom', type: 'text' },
    { field: 'nationalite', header: 'deposant.heritier.table.nationalite', type: 'text' },
    { field: 'montantIndem', header: 'deposant.heritier.table.montantIndem', type: 'text' },
  ];
  actions: ActionConfig[] = [
    { label: 'consult', action: 'consult', icon: 'assets/images/icone/consult.svg' },
  ];

  onActionClick(event: ActionClickEvent<any>): void {
    if (event.action === 'consult') {
      this.router.navigateByUrl(this.baseSourceRoute + '/detail-heritier');
    } else {
      console.log(`Action: ${event.action}, Item: `, event.item);
    }
  }




  loadHeritierData() {
    this.representantService.getAllHeritiers().subscribe(
        (data) => {
          this.heritier = data;
          // this.translateReclamations();
        },
        (error) => {
          console.error('Error fetching heritiers', error);
        }
    );
  }

  ngOnInit() {
    console.log("result : ", JSON.parse(localStorage.getItem('heritiersData')!));
    this.loadHeritierData();
  }


}
