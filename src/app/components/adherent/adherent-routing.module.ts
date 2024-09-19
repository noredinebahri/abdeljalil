import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ListAdherentsComponent} from "./list-adherents/list-adherents.component";
import {DetailAdherentComponent} from "./detail-adherent/detail-adherent.component";
import {DepotExceptionnelComponent} from "./detail-adherent/depot-exceptionnel/depot-exceptionnel.component";
import {CompteRenduComponent} from "./compte-rendu/compte-rendu.component";
import {AdherentReclamationComponent} from "./adherent-reclamation/adherent-reclamation.component";
import {ListDepotExceptionnelComponent} from "./list-depot-exceptionnel/list-depot-exceptionnel.component";
import {
  ReclamationDetailComponent
} from "../agent-payeur/reclamation-agent-payeur/detail-reclamation-agent-payeur/reclamation-detail/reclamation-detail.component";
import {
  DetailReclamationAgentPayeurComponent
} from "../agent-payeur/reclamation-agent-payeur/detail-reclamation-agent-payeur/detail-reclamation-agent-payeur.component";
import {
  InformationDeposantComponent
} from "../agent-payeur/reclamation-agent-payeur/detail-reclamation-agent-payeur/information-deposant/information-deposant.component";
import {
  DetailIndemnisationApComponent
} from "../agent-payeur/reclamation-agent-payeur/detail-reclamation-agent-payeur/detail-indemnisation-ap/detail-indemnisation-ap.component";
import {MainAdherentComponent} from "./main-adherent/main-adherent.component";


const routes: Routes = [
  {path: '', component: MainAdherentComponent, children: [
      {path: 'compte-rendu', component: CompteRenduComponent},
      {path: 'reclamations', component: AdherentReclamationComponent},
      {
        path: 'detail-reclamation-agent-payeur',
        component: DetailReclamationAgentPayeurComponent, children: [
          { path: 'reclamation', component: ReclamationDetailComponent },
          { path: 'informations', component: InformationDeposantComponent },
          { path: 'detail-indemnisation', component: DetailIndemnisationApComponent },
        ]
      },
      {path: 'depot-exceptionnels', component: ListDepotExceptionnelComponent}
    ]},
  {
    path: 'details', component: DetailAdherentComponent, children: [
      {path: 'depots', component: DepotExceptionnelComponent},
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdherentRoutingModule {
}
