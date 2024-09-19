import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoreModule} from "../../core/core.module";
import {SharedModule} from "../../shared/shared.module";
import {CentreAppeleRoutingModule} from "./centre-appel-routing.module";
import {CentreAppeleComponent} from "./centre-appele.component";
import { CentreAppelTabsComponent } from './centre-appel-tabs/centre-appel-tabs.component';
import { InfosDeposantComponent } from '../dossier/details/infos-deposant/infos-deposant.component';
import { DetailIndemnisationComponent } from '../dossier/details/detail-indemnisation/detail-indemnisation.component';
import { ReclamationComponent } from './centre-appel-tabs/reclamation/reclamation.component';
import { SuiviDossierComponent } from './centre-appel-tabs/suivi-dossier/suivi-dossier.component';
import {TableModule} from "../../shared/components/table/table.module";




@NgModule({
  declarations: [
  CentreAppeleComponent,
  CentreAppelTabsComponent,
  InfosDeposantComponent,
  DetailIndemnisationComponent,
  ReclamationComponent,
  SuiviDossierComponent
  ],
  imports: [
    CommonModule,
    CentreAppeleRoutingModule,
    CoreModule,
    SharedModule,
    TableModule,
  ]
})
export class CentreAppelModule { }
