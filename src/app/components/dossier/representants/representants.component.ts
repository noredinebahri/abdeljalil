import { Component } from '@angular/core';
import {ActionClickEvent, ActionConfig, ColumnConfig} from "../../../shared/components/table/table.config";

import {RepresentantService} from "../../../services/deposant/representant.service";
import {IReclamation} from "../../../models/reclamation";
import {IReprentants} from "../../../models/representants";
import {TranslateService} from "@ngx-translate/core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-representants',
  templateUrl: './representants.component.html',
  styleUrl: './representants.component.scss'
})
export class RepresentantsComponent {

    //translatedReclamations: any[] = [];
    representant: IReprentants[] = [];

  constructor(private representantService: RepresentantService,
              //private translate: TranslateService,
              private router: Router) {
  }

  columns: ColumnConfig[] = [
    // { field: 'idScv', header: 'deposant.representantsLegaux.table.idScv', type: 'text' },
    { field: 'natureIdDeposant', header: 'deposant.representantsLegaux.table.natureIdDeposant', type: 'text' },
    { field: 'nId', header: 'deposant.representantsLegaux.table.nId', type: 'text' },
    { field: 'nomAndPrenom', header: 'deposant.representantsLegaux.table.nomAndPrenom', type: 'text' },
    { field: 'mobile', header: 'deposant.representantsLegaux.table.mobile', type: 'text' },
    { field: 'email', header: 'deposant.representantsLegaux.table.email', type: 'text' },
  ];
  actions: ActionConfig[] = [
    { label: 'consult', action: 'consult', icon: 'assets/images/icone/consult.svg' },
  ];

    onActionClick(event: ActionClickEvent<any>): void {
        if (event.action === 'consult') {
            this.router.navigateByUrl('detail-representant');
        } else {
            console.log(`Action: ${event.action}, Item: `, event.item);
        }
    }




    loadRepresentantData() {
        this.representantService.getAllRepresentant().subscribe(
            (data) => {
                this.representant = data;
               // this.translateReclamations();
            },
            (error) => {
                console.error('Error fetching representants', error);
            }
        );
    }

    ngOnInit() {
        console.log("result : ", JSON.parse(localStorage.getItem('representantData')!));
        this.loadRepresentantData();
    }

}
