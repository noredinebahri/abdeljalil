import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListAdherentsComponent} from "./list-adherents/list-adherents.component";
import {DetailAdherentComponent} from "./detail-adherent/detail-adherent.component";
import {DepotExceptionnelComponent} from "./detail-adherent/depot-exceptionnel/depot-exceptionnel.component";
import {RepresentantsLegauxComponent} from "./detail-adherent/representants-legaux/representants-legaux.component";
import {ComptsBancairesComponent} from "../dossier/compts-bancaires/compts-bancaires.component";
import {DetailsIndemnisationComponent} from "./detail-adherent/details-indemnisation/details-indemnisation.component";
import {CoreModule} from "../../core/core.module";
import {SharedModule} from "../../shared/shared.module";
import {AdherentRoutingModule} from "./adherent-routing.module";
import { ApprobationModalComponent } from './detail-adherent/depot-exceptionnel/approbation-modal/approbation-modal.component';
import { RejetModalComponent } from './detail-adherent/depot-exceptionnel/rejet-modal/rejet-modal.component';
import { ConfirmationRejetModalComponent } from './detail-adherent/depot-exceptionnel/confirmation-rejet-modal/confirmation-rejet-modal.component';
import { ConfirmationApprobationModalComponent } from './detail-adherent/depot-exceptionnel/confirmation-approbation-modal/confirmation-approbation-modal.component';
import { CompteRenduComponent } from './compte-rendu/compte-rendu.component';
import {TableModule} from "../../shared/components/table/table.module";
import { AdherentReclamationComponent } from './adherent-reclamation/adherent-reclamation.component';
import { ListDepotExceptionnelComponent } from './list-depot-exceptionnel/list-depot-exceptionnel.component';
import { MainAdherentComponent } from './main-adherent/main-adherent.component';



@NgModule({
  declarations: [
    ListAdherentsComponent,
    DetailAdherentComponent,
    DepotExceptionnelComponent,
    RepresentantsLegauxComponent,
    ComptsBancairesComponent,
    DetailsIndemnisationComponent,
    ApprobationModalComponent,
    RejetModalComponent,
    ConfirmationRejetModalComponent,
    ConfirmationApprobationModalComponent,
    CompteRenduComponent,
    AdherentReclamationComponent,
    ListDepotExceptionnelComponent,
    MainAdherentComponent,
  ],
  imports: [
    CommonModule,
    AdherentRoutingModule,
    CoreModule,
    SharedModule,
    TableModule,
  ]
})
export class AdherentModule { }
