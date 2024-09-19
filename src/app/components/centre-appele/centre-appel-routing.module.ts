import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CentreAppeleComponent} from "./centre-appele.component";
import {CentreAppelTabsComponent} from "./centre-appel-tabs/centre-appel-tabs.component";
import {InfosDeposantComponent} from "../dossier/details/infos-deposant/infos-deposant.component";
import {DetailIndemnisationComponent} from "../dossier/details/detail-indemnisation/detail-indemnisation.component";
import {ReclamationComponent} from "./centre-appel-tabs/reclamation/reclamation.component";
import {SuiviDossierComponent} from "./centre-appel-tabs/suivi-dossier/suivi-dossier.component";
import {DetailAdherentComponent} from "../adherent/detail-adherent/detail-adherent.component";
import {DetailHeritiersComponent} from "../dossier/heritiers/detail-heritiers/detail-heritiers.component";

const routes: Routes = [
  {path: '', component: CentreAppeleComponent},
  {
  path: 'details', component: CentreAppelTabsComponent, children: [
      {path: 'infos-deposant', component: InfosDeposantComponent},
      {path: 'details-indemnisation', component: DetailIndemnisationComponent},
      {path: 'reclamation', component: ReclamationComponent},
      {path: 'suivi-dossier', component: SuiviDossierComponent},

    ]
  },
  {
    path: 'centre-appel', component: DetailAdherentComponent, children: [
      {path: 'details-heritiers', component: DetailHeritiersComponent},
      // {path: 'indemnisation', component: DetailsIndemnisationComponent},
      // {path: 'representant', component: RepresentantsLegauxComponent},
      // {path: 'compts-bancaires', component: ComptsBancairesComponent}
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CentreAppeleRoutingModule {
}
