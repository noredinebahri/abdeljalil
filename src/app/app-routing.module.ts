import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './shared/components/layouts/main/main.component';
import { AuthGuard } from './core/auth/auth-guard ';
import { Authority } from './enums/authority';
import {GenericExamplesComponent} from "./components/generic-examples/generic-examples.component";
import {DeposantComponent} from "./components/deposant/deposant.component";
import {DetailsIndemnisationComponent} from "./components/dossier/details/details-indemnisation/details-indemnisation.component";
import {DepotsExceptionnelsComponent} from "./components/dossier/details/depots-exceptionnels/depots-exceptionnels.component";
import {FormComponent} from "./shared/components/form/form.component";
import {DemarrageComponent} from "./components/deposant/demarrage/demarrage.component";
import {ArabicExamplesComponent} from "./components/generic-examples/arabic-examples/arabic-examples.component";
import {ReleveIndemniteComponent} from "./components/deposant/releve-indemnite/releve-indemnite.component";
import {EtatDossierComponent} from "./components/deposant/etat-dossier/etat-dossier.component";
import {VosDossierComponent} from "./components/deposant/vos-dossier/vos-dossier.component";
import {DetailDepotComponent} from "./components/dossier/details/depots-exceptionnels/detail-depot/detail-depot.component";
import {UtilisateursComponent} from "./components/deposant/utilisateurs/utilisateurs.component";
import {NotificationComponent} from "./components/deposant/notification/notification.component";
import {
  ReclamationAgentPayeurComponent
} from "./components/agent-payeur/reclamation-agent-payeur/reclamation-agent-payeur.component";
import {
  DetailReclamationAgentPayeurComponent
} from "./components/agent-payeur/reclamation-agent-payeur/detail-reclamation-agent-payeur/detail-reclamation-agent-payeur.component";
import {
  ReclamationDetailComponent
} from "./components/agent-payeur/reclamation-agent-payeur/detail-reclamation-agent-payeur/reclamation-detail/reclamation-detail.component";
import {
  InformationDeposantComponent
} from "./components/agent-payeur/reclamation-agent-payeur/detail-reclamation-agent-payeur/information-deposant/information-deposant.component";
import {
  DetailIndemnisationApComponent
} from "./components/agent-payeur/reclamation-agent-payeur/detail-reclamation-agent-payeur/detail-indemnisation-ap/detail-indemnisation-ap.component";
import {DossierComponent} from "./components/dossier/dossier.component";
import {
  DetailIndemnisationComponent
} from "./components/dossier/details/detail-indemnisation/detail-indemnisation.component";
import {InfosDeposantComponent} from "./components/dossier/details/infos-deposant/infos-deposant.component";
import {ReclamationsComponent} from "./components/dossier/reclamations/reclamations.component";
import {
  DetailReclamationComponent
} from "./components/dossier/reclamations/detail-reclamation/detail-reclamation.component";
import {RepresentantsComponent} from "./components/dossier/representants/representants.component";
import {HeritiersComponent} from "./components/dossier/heritiers/heritiers.component";
import {ComptesBancairesComponent} from "./components/dossier/comptes-bancaires/comptes-bancaires.component";
import {
  DetailReprentantsComponent
} from "./components/dossier/representants/detail-reprentants/detail-reprentants.component";
import {DetailHeritiersComponent} from "./components/dossier/heritiers/detail-heritiers/detail-heritiers.component";
import {
  DetailComptesBancairesComponent
} from "./components/dossier/comptes-bancaires/detail-comptes-bancaires/detail-comptes-bancaires.component";
import { LoginComponent } from './components/connexion/login/login.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children:[
      { path: '', redirectTo: 'accueil', pathMatch: "full" },
      { path: 'accueil', component: HomeComponent },
      { path: 'generics', component: GenericExamplesComponent },
      { path: 'arabic-example', component: ArabicExamplesComponent },
      {path:'form',component: FormComponent},
      {path:'demarrage',component: DemarrageComponent},
      {path:'vos-dossier',component: VosDossierComponent},
      {path:'utilisateurs',component: UtilisateursComponent},
      {path:'notifications',component: NotificationComponent},
      {path:'login',component:LoginComponent},

      {
        path: 'deposant', component: DeposantComponent, children: [
          { path: 'details', component: DetailsIndemnisationComponent },
          { path: 'depots', component: DepotsExceptionnelsComponent},
          { path: 'reclamations', component: ReclamationsComponent },
          { path: 'releve-indemnite', component: ReleveIndemniteComponent },
          { path: 'etat-dossier', component: EtatDossierComponent },
          { path: 'representants', component: RepresentantsComponent },
          { path: 'heritiers', component: HeritiersComponent },
          { path: 'comptes', component: ComptesBancairesComponent },
          { path: '', redirectTo: 'details', pathMatch: 'full' }
        ]
      },

      {
        path: 'dossier', component: DossierComponent, children: [
          {path:'detail-Indemnisation-deposant', component: DetailsIndemnisationComponent},
          {path:'detail-Indemnisation', component: DetailIndemnisationComponent},
          {path:'info-deposant', component: InfosDeposantComponent},
          {path:'depot-exceptionnel', component: DepotsExceptionnelsComponent},
          {path:'reclamation', component: ReclamationsComponent},
          {path: 'representant', component: RepresentantsComponent},
          {path: 'heritier', component: HeritiersComponent},
          {path: 'compte-bancaire', component: ComptesBancairesComponent},
        ]
      },

      {
        path: 'agent-payeur', component: ReclamationAgentPayeurComponent
      },
      {
        path: 'detail-reclamation-agent-payeur',
        component: DetailReclamationAgentPayeurComponent, children: [
          { path: 'reclamation', component: ReclamationDetailComponent },
          { path: 'informations', component: InformationDeposantComponent },
          { path: 'detail-indemnisation', component: DetailIndemnisationApComponent },
        ]
      },


      {
        path: 'detail-depot',
        component: DetailDepotComponent,
      },
      {
        path: 'detail-reclamations',
        component: DetailReclamationComponent,
      },
      {
        path: 'detail-representant',
        component: DetailReprentantsComponent,
      },
      {
        path: 'detail-heritier',
        component: DetailHeritiersComponent,
      },
      {
        path: 'detail-compte-bancaire',
        component: DetailComptesBancairesComponent,
      },

      {
        path: 'referentiel',
        canActivate: [AuthGuard],
        data: {
          roles: [Authority.ADMIN],
        },
        loadChildren: () => import('./components/referentiel/referentiel.module').then(m => m.ReferentielModule),
      },
      {
        path: 'adherent',
        loadChildren: () => import('./components/adherent/adherent.module').then(m => m.AdherentModule)
      },
      {
        path: 'centre-appel',
        loadChildren: () => import('./components/centre-appele/centre-appel.module').then(m => m.CentreAppelModule)
      },
      {
        path: 'back-office',
        loadChildren: () => import('./components/back-office/back-office.module').then(m => m.BackOfficeModule)
      }

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
