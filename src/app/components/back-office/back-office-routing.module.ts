import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackOfficeComponent } from "./back-office.component";
import { ReferentielsComponent } from "./referentiels/referentiels.component";
import {
  NatureDepotsExceptionnelsComponent
} from "./referentiels/nature-depots-exceptionnels/nature-depots-exceptionnels.component";
import { ComptesNstpComponent } from "./referentiels/comptes-nstp/comptes-nstp.component";
import { DeviseComponent } from "./referentiels/devise/devise.component";
import {
  EtablissementAdherentsComponent
} from "./referentiels/etablissement-adherents/etablissement-adherents.component";
import { FormeJuridiqueComponent } from "./referentiels/forme-juridique/forme-juridique.component";
import { LibellePcecComponent } from "./referentiels/libelle-pcec/libelle-pcec.component";
import {
  NatureIdentifiantDeposantComponent
} from "./referentiels/nature-identifiant-deposant/nature-identifiant-deposant.component";
import {
  NatureIdentifiantDeposantPhysiqueComponent
} from "./referentiels/nature-identifiant-deposant-physique/nature-identifiant-deposant-physique.component";
import { VilleComponent } from "./referentiels/ville/ville.component";
import { PaysComponent } from "./referentiels/pays/pays.component";
import { DetectionFraudeComponent } from "./referentiels/detection-fraude/detection-fraude.component";
import { DonneesRoleComponent } from "./gestion-roles/donnees-role/donnees-role.component";
import { InfosRoleComponent } from "./gestion-roles/infos-role/infos-role.component";
import { TraceRoleComponent } from "./gestion-roles/trace-role/trace-role.component";

import { GestionUtilisateurComponent } from './gestion-utilisateur/gestion-utilisateur.component';
import { NouveauUtilisateurComponent } from './nouveau-utilisateur/nouveau-utilisateur.component';
import { ConsultUtilisateurComponent } from './consult-utilisateur/consult-utilisateur.component';
import { GestionTraceComponent } from './gestion-trace/gestion-trace.component';
import { ConsultTraceComponent } from './consult-trace/consult-trace.component';

import { GestionRolesComponent } from "./gestion-roles/gestion-roles.component";
import { CampagneIndemnisationComponent } from './compagne-indemnisation/campagne-indemnisation.component';
import { UpdateCampagneIndemnisationComponent } from './compagne-indemnisation/update-campagne-indemnisation/update-campagne-indemnisation.component';
import { NouveauRoleComponent } from './gestion-roles/nouveau-role/nouveau-role.component';
import { DetailCampagneIndemnisationComponent } from './compagne-indemnisation/detail-campagne-indemnisation/detail-comapgne-indemnisation/detail-campagne-indemnisation.component';
import { DossiersFrauduleuxComponent } from './fraudes/dossiers-frauduleux/dossiers-frauduleux.component';
import { DonneesFraudesComponent } from './fraudes/donnees-fraudes/donnees-fraudes.component';
import { SuiviDossierFraudesComponent } from './fraudes/suivi-dossier-fraudes/suivi-dossier-fraudes.component';
import { InfosDeposantFraudeComponent } from './fraudes/infos-deposant-fraude/infos-deposant-fraude.component';
import { DetailIndemnisationFraudeComponent } from './fraudes/detail-indemnisation-fraude/detail-indemnisation-fraude.component';
import { GestionInstructionPaymentComponent } from './gestion-instruction-payment/gestion-instruction-payment.component';
import { SuiviInstructionPaimentComponent } from './gestion-instruction-payment/suivi-instruction-paiment/suivi-instruction-paiment.component';
import { SuiviBlocInstructionPaimentComponent } from './gestion-instruction-payment/suivi-bloc-instruction-paiment/suivi-bloc-instruction-paiment.component';
import { DetailsInstructionPaimentComponent } from './gestion-instruction-payment/suivi-instruction-paiment/details-instruction-paiment/details-instruction-paiment.component';
import { AgentPayeurComponent } from './referentiels/agent-payeur/agent-payeur.component';
import {
  MotifsRejetInstructionPaiementComponent
} from "./referentiels/motifs-rejet-instruction-paiement/motifs-rejet-instruction-paiement.component";
import { AgenceComponent } from './referentiels/agence/agence.component';
import {GestionCompteComponent} from "./gestion-compte/gestion-compte.component";
import { ProvenanceReclamationComponent } from './referentiels/provenance-reclamation/provenance-reclamation.component';
import { CriticiteReclamationComponent } from './referentiels/criticite-reclamation/criticite-reclamation.component';
import { ParametrageComponent } from './parametrage/parametrage.component';

const routes: Routes = [
  {
    path: '',
    component: BackOfficeComponent,
    children: [
      { path: 'referentiel', component: ReferentielsComponent },
      { path: 'nature-depots-exceptionnels', component: NatureDepotsExceptionnelsComponent },
      { path: 'comtes-nstp', component: ComptesNstpComponent },
      { path: 'devise', component: DeviseComponent },
      { path: 'list-agent-payeur', component: AgentPayeurComponent },
      { path: 'list-agence', component: AgenceComponent },
      { path: 'list-provenance-reclamation', component: ProvenanceReclamationComponent },
      { path: 'list-criticite-reclamation', component: CriticiteReclamationComponent },
      { path: 'etablissement-adherent', component: EtablissementAdherentsComponent },
      { path: 'forme-juridique', component: FormeJuridiqueComponent },
      { path: 'libelle-pcec', component: LibellePcecComponent },
      { path: 'nature-identifiant-deposant', component: NatureIdentifiantDeposantComponent },
      { path: 'nature-identifiant-deposant-physique', component: NatureIdentifiantDeposantPhysiqueComponent },
      { path: 'ville', component: VilleComponent },
      { path: 'pays', component: PaysComponent },
      { path: 'detection-fraude', component: DetectionFraudeComponent },
      { path: 'motifs-rejet-instruction-paiement', component: MotifsRejetInstructionPaiementComponent },
      { path: 'gestion-compte', component: GestionCompteComponent },
      { path: 'parametrage', component: ParametrageComponent },

      {
        path: 'gestion-roles',
        component: DonneesRoleComponent,
        children: [
          { path: 'role', component: InfosRoleComponent },
          { path: 'role-trace', component: TraceRoleComponent },
        ]
      },
      {
        path: 'donnees-fraudes',
        component: DonneesFraudesComponent,
        children: [
          { path: 'dossier-fraude', component: SuiviDossierFraudesComponent },
          { path: 'infos', component: InfosDeposantFraudeComponent },
          { path: 'detail', component: DetailIndemnisationFraudeComponent }

        ]
      },


      { path: 'ajout-role', component: NouveauRoleComponent },
      { path: 'role-list', component: GestionRolesComponent },
      { path: 'gestion-roles', component: GestionRolesComponent },
      { path: 'gestion-utilisateur', component: GestionUtilisateurComponent },
      { path: 'ajout-utilisateur', component: NouveauUtilisateurComponent },
      { path: 'consult-utilisateur', component: ConsultUtilisateurComponent },
      { path: 'gestion-trace', component: GestionTraceComponent },
      { path: 'consult-trace', component: ConsultTraceComponent },
      { path: 'gestion-roles', component: GestionRolesComponent },
      { path: 'indemnisation', component: CampagneIndemnisationComponent },
      { path: 'detail-campagne-indemnisation/:id', component: DetailCampagneIndemnisationComponent },
      { path: 'update-campagne-indemnisation/:id', component: UpdateCampagneIndemnisationComponent },
      { path: 'dossiers-frauduleux', component: DossiersFrauduleuxComponent },
      { path: 'details-instruction-paiment', component: DetailsInstructionPaimentComponent },
      {
        path: 'gestion-instruction-payment', component: GestionInstructionPaymentComponent,
        children: [
          { path: 'suivi-instruction-paiment', component: SuiviInstructionPaimentComponent },
          { path: 'suivi-bloc-instruction-paiment', component: SuiviBlocInstructionPaimentComponent },
        ]
      },
      { path: 'dossiers-frauduleux', component: DossiersFrauduleuxComponent },



      { path: 'update-campagne-indemnisation/:id', component: UpdateCampagneIndemnisationComponent },
      { path: 'suivi-reclamation', loadChildren: () => import('./suivi-reclamation/suivi-reclamation.module').then(m => m.SuiviReclamationModule) }


    ]
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackOfficeRoutingModule { }
