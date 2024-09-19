import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuiviReclamationRoutingModule } from './suivi-reclamation-routing.module';
import { ListeReclamationComponent } from './liste-reclamation/liste-reclamation.component';
import {TranslateModule} from "@ngx-translate/core";
import {SharedModule} from "../../../shared/shared.module";
import { ConsultReclamationComponent } from './consult-reclamation/consult-reclamation.component';
import { InfoReclamationComponent } from './info-reclamation/info-reclamation.component';
import { InfoDeposantComponent } from './info-deposant/info-deposant.component';
import { InfoIndemnisationComponent } from './info-indemnisation/info-indemnisation.component';
import { AffectationReclamationModalComponent } from './affectation-reclamation-modal/affectation-reclamation-modal.component';
import { ReponseReclamationModalComponent } from './reponse-reclamation-modal/reponse-reclamation-modal.component';

@NgModule({
  declarations: [
    ListeReclamationComponent,
    ConsultReclamationComponent,
    InfoReclamationComponent,
    InfoDeposantComponent,
    InfoIndemnisationComponent,
    AffectationReclamationModalComponent,
    ReponseReclamationModalComponent
  ],
  imports: [
    CommonModule,
    SuiviReclamationRoutingModule,
    TranslateModule,
    SharedModule
  ]
})
export class SuiviReclamationModule { }
