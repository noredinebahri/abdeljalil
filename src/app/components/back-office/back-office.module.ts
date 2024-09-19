import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BackOfficeComponent} from "./back-office.component";
import {CoreModule} from "../../core/core.module";
import {SharedModule} from "../../shared/shared.module";
import {TableModule} from "../../shared/components/table/table.module";
import {BackOfficeRoutingModule} from "./back-office-routing.module";
import {ReferentielsComponent} from "./referentiels/referentiels.component";
import { NatureDepotsExceptionnelsComponent } from './referentiels/nature-depots-exceptionnels/nature-depots-exceptionnels.component';
import { NationalitePaysNaissanceComponent } from './referentiels/nationalite-pays-naissance/nationalite-pays-naissance.component';
import { FormeJuridiqueComponent } from './referentiels/forme-juridique/forme-juridique.component';
import { NatureIdentifiantDeposantPhysiqueComponent } from './referentiels/nature-identifiant-deposant-physique/nature-identifiant-deposant-physique.component';
import { NatureIdentifiantDeposantComponent } from './referentiels/nature-identifiant-deposant/nature-identifiant-deposant.component';
import { LibellePcecComponent } from './referentiels/libelle-pcec/libelle-pcec.component';
import { DeviseComponent } from './referentiels/devise/devise.component';
import { ComptesNstpComponent } from './referentiels/comptes-nstp/comptes-nstp.component';
import { EtablissementAdherentsComponent } from './referentiels/etablissement-adherents/etablissement-adherents.component';
import { VilleComponent } from './referentiels/ville/ville.component';
import { UpdateModalComponent } from './referentiels/update-modal/update-modal.component';
import { PaysComponent } from './referentiels/pays/pays.component';
import { DetectionFraudeComponent } from './referentiels/detection-fraude/detection-fraude.component';
import { GestionRolesComponent } from './gestion-roles/gestion-roles.component';


import { GestionUtilisateurComponent } from './gestion-utilisateur/gestion-utilisateur.component';
import { NouveauUtilisateurComponent } from './nouveau-utilisateur/nouveau-utilisateur.component';
import { ConsultUtilisateurComponent } from './consult-utilisateur/consult-utilisateur.component';
import { ConfirmAjouterUtilisateurComponent } from './gestion-utilisateur/confirm-ajouter-utilisateur/confirm-ajouter-utilisateur.component';
import { ConfirmReactiverUtilisateurComponent } from './gestion-utilisateur/confirm-reactiver-utilisateur/confirm-reactiver-utilisateur.component';
import { ConfirmUpdatePasswordComponent } from './gestion-utilisateur/confirm-update-password/confirm-update-password.component';
import { MotifReactiverUtilisateurComponent } from './gestion-utilisateur/motif-reactiver-utilisateur/motif-reactiver-utilisateur.component';
import { ConfirmDesactiverUtilisateurComponent } from './gestion-utilisateur/confirm-desactiver-utilisateur/confirm-desactiver-utilisateur.component';
import { SuiviActivitesComponent } from './consult-utilisateur/suivi-activites/suivi-activites.component';
import { GestionTraceComponent } from './gestion-trace/gestion-trace.component';
import { ConsultTraceComponent } from './consult-trace/consult-trace.component';

import {DonneesRoleComponent} from "./gestion-roles/donnees-role/donnees-role.component";
import {InfosRoleComponent} from "./gestion-roles/infos-role/infos-role.component";
import {TraceRoleComponent} from "./gestion-roles/trace-role/trace-role.component";
import {ConfirmeModaleComponent} from "./gestion-roles/confirme-modal/confirme-modale.component";


import { CampagneIndemnisationComponent } from './compagne-indemnisation/campagne-indemnisation.component';
import { DetailCampagneIndemnisationComponent } from './compagne-indemnisation/detail-campagne-indemnisation/detail-comapgne-indemnisation/detail-campagne-indemnisation.component';
import { UpdateCampagneIndemnisationComponent } from './compagne-indemnisation/update-campagne-indemnisation/update-campagne-indemnisation.component';
import { NouveauRoleComponent } from './gestion-roles/nouveau-role/nouveau-role.component';
import { DossiersFrauduleuxComponent } from './fraudes/dossiers-frauduleux/dossiers-frauduleux.component';
import { DonneesFraudesComponent } from './fraudes/donnees-fraudes/donnees-fraudes.component';
import { SuiviDossierFraudesComponent } from './fraudes/suivi-dossier-fraudes/suivi-dossier-fraudes.component';
import { InfosDeposantFraudeComponent } from './fraudes/infos-deposant-fraude/infos-deposant-fraude.component';
import { DetailIndemnisationFraudeComponent } from './fraudes/detail-indemnisation-fraude/detail-indemnisation-fraude.component';
import { GestionInstructionPaymentComponent } from './gestion-instruction-payment/gestion-instruction-payment.component';
import { SuiviBlocInstructionPaimentComponent } from './gestion-instruction-payment/suivi-bloc-instruction-paiment/suivi-bloc-instruction-paiment.component';
import { SuiviInstructionPaimentComponent } from './gestion-instruction-payment/suivi-instruction-paiment/suivi-instruction-paiment.component';
import { DetailsInstructionPaimentComponent } from './gestion-instruction-payment/suivi-instruction-paiment/details-instruction-paiment/details-instruction-paiment.component';
import { ValiderInstructionPaiementComponent } from './gestion-instruction-payment/suivi-bloc-instruction-paiment/valider-instruction-paiement/valider-instruction-paiement.component';
import { AnnulerInstructionPaiementComponent } from './gestion-instruction-payment/suivi-bloc-instruction-paiment/annuler-instruction-paiement/annuler-instruction-paiement.component';
import { FraudeModalComponent } from './fraudes/fraude-modal/fraude-modal.component';
import { AgentPayeurComponent } from './referentiels/agent-payeur/agent-payeur.component';
import { MotifsRejetInstructionPaiementComponent } from './referentiels/motifs-rejet-instruction-paiement/motifs-rejet-instruction-paiement.component';
import { AgenceComponent } from './referentiels/agence/agence.component';
import { ProvenanceReclamationComponent } from './referentiels/provenance-reclamation/provenance-reclamation.component';
import { CriticiteReclamationComponent } from './referentiels/criticite-reclamation/criticite-reclamation.component';
import { ParametrageComponent } from './parametrage/parametrage.component';
import { GestionCompteComponent } from './gestion-compte/gestion-compte.component';
import { UpdateParametrageModalComponent } from './parametrage/update-parametrage-modal/update-parametrage-modal.component';



@NgModule({
  declarations: [
    BackOfficeComponent,
    ReferentielsComponent,
    NatureDepotsExceptionnelsComponent,
    NationalitePaysNaissanceComponent,
    FormeJuridiqueComponent,
    NatureIdentifiantDeposantPhysiqueComponent,
    NatureIdentifiantDeposantComponent,
    LibellePcecComponent,
    DeviseComponent,
    ComptesNstpComponent,
    EtablissementAdherentsComponent,
    VilleComponent,
    UpdateModalComponent,
    PaysComponent,
    DetectionFraudeComponent,
    GestionRolesComponent,
    NouveauRoleComponent,


    DonneesRoleComponent,
    InfosRoleComponent,
    TraceRoleComponent,
    ConfirmeModaleComponent,
    GestionUtilisateurComponent,
    NouveauUtilisateurComponent,
    ConsultUtilisateurComponent,
    ConfirmAjouterUtilisateurComponent,
    ConfirmReactiverUtilisateurComponent,
    ConfirmUpdatePasswordComponent,
    MotifReactiverUtilisateurComponent,
    ConfirmDesactiverUtilisateurComponent,
    SuiviActivitesComponent,
    GestionTraceComponent,
    ConsultTraceComponent,
    CampagneIndemnisationComponent,
    DetailCampagneIndemnisationComponent,
    UpdateCampagneIndemnisationComponent,
    GestionInstructionPaymentComponent,
    SuiviBlocInstructionPaimentComponent,
    SuiviInstructionPaimentComponent,
    DetailsInstructionPaimentComponent,
    ValiderInstructionPaiementComponent,
    AnnulerInstructionPaiementComponent,
    DossiersFrauduleuxComponent,
    DonneesFraudesComponent,
    SuiviDossierFraudesComponent,
    InfosDeposantFraudeComponent,
    DetailIndemnisationFraudeComponent,
    FraudeModalComponent,
    AgentPayeurComponent,
    MotifsRejetInstructionPaiementComponent,
    AgenceComponent,
    ProvenanceReclamationComponent,
    CriticiteReclamationComponent,
    ParametrageComponent,
    GestionCompteComponent,
    UpdateParametrageModalComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    TableModule,
    BackOfficeRoutingModule,
  ]
})
export class BackOfficeModule { }
