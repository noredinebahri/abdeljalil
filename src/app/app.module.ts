import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { NavbarComponent } from './shared/components/layouts/navbar/navbar.component';
import { FooterComponent } from './shared/components/layouts/footer/footer.component';
import { MainComponent } from './shared/components/layouts/main/main.component';
import { SidebarComponent } from './shared/components/layouts/sidebar/sidebar.component';
import { GenericExamplesComponent } from './components/generic-examples/generic-examples.component';
import {TableModule} from "./shared/components/table/table.module";
import { DeposantComponent } from './components/deposant/deposant.component';
import { DetailsIndemnisationComponent } from './components/dossier/details/details-indemnisation/details-indemnisation.component';
import { DepotsExceptionnelsComponent } from './components/dossier/details/depots-exceptionnels/depots-exceptionnels.component';
import { ValidateReglementModalComponent } from './components/dossier/details/details-indemnisation/validate-reglement-modal/validate-reglement-modal.component';
import { DemarrageComponent } from './components/deposant/demarrage/demarrage.component';
import { ArabicExamplesComponent } from './components/generic-examples/arabic-examples/arabic-examples.component';
import { VosDossierComponent } from './components/deposant/vos-dossier/vos-dossier.component';
import { IndicePopupComponent } from './components/deposant/indice-popup/indice-popup.component';
import { ReleveIndemniteComponent } from './components/deposant/releve-indemnite/releve-indemnite.component';
import { EtatDossierComponent } from './components/deposant/etat-dossier/etat-dossier.component';
import { DeclareDepotExceptionnelModalComponent } from './components/dossier/details/depots-exceptionnels/declare-depot-exceptionnel-modal/declare-depot-exceptionnel-modal.component';
import {NgbDatepicker, NgbDatepickerModule, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";
import { ConfirmDepotModalComponent } from './components/dossier/details/depots-exceptionnels/confirm-depot-modal/confirm-depot-modal.component';
import { DetailDepotComponent } from './components/dossier/details/depots-exceptionnels/detail-depot/detail-depot.component';
import {HttpClientModule} from "@angular/common/http";
import { UtilisateursComponent } from './components/deposant/utilisateurs/utilisateurs.component';
import { ChangePasswordModalComponent } from './components/deposant/utilisateurs/change-password-modal/change-password-modal.component';
import { VosDossierModalComponent } from './components/deposant/vos-dossier-modal/vos-dossier-modal.component';
import { NotificationComponent } from './components/deposant/notification/notification.component';
import { CurrencyBankPipe } from './pipes/currency-bank.pipe';
import {AdherentModule} from "./components/adherent/adherent.module";
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
import {provideDaterangepickerLocale} from "ngx-daterangepicker-bootstrap";

import { DossierComponent } from './components/dossier/dossier.component';
import {
  ConfirmReclamationModalComponent
} from "./components/dossier/reclamations/confirm-reclamation-modal/confirm-reclamation-modal.component";
import {
  DeclareReclamationModalComponent
} from "./components/dossier/reclamations/declare-reclamation-modal/declare-reclamation-modal.component";
import {
  DetailReclamationComponent
} from "./components/dossier/reclamations/detail-reclamation/detail-reclamation.component";
import {
  ConfirmCloturerReclamationModalComponent
} from "./components/dossier/reclamations/confirm-cloturer-reclamation-modal/confirm-cloturer-reclamation-modal.component";
import {
  DetailReprentantsComponent
} from "./components/dossier/representants/detail-reprentants/detail-reprentants.component";
import {
  ResponseReclamationModal
} from "./components/agent-payeur/reclamation-agent-payeur/detail-reclamation-agent-payeur/reclamation-detail/response-reclamation-modal/response-reclamation-modal";
import {
  ConfirmResponseReclamationModal
} from "./components/agent-payeur/reclamation-agent-payeur/detail-reclamation-agent-payeur/reclamation-detail/confirm-response-reclamation-modal/confirm-response-reclamation-modal";
import {BackOfficeModule} from "./components/back-office/back-office.module";
import {RoleTreeviewComponent} from "./shared/components/role-treeview/role-treeview.component";
import { LoginComponent } from './components/connexion/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    MainComponent,
    GenericExamplesComponent,
    DeposantComponent,
    DetailsIndemnisationComponent,
    DepotsExceptionnelsComponent,
    ConfirmReclamationModalComponent,
    DeclareReclamationModalComponent,
    DetailReclamationComponent,
    ValidateReglementModalComponent,
    DemarrageComponent,
    ArabicExamplesComponent,
    VosDossierComponent,
    IndicePopupComponent,
    ReleveIndemniteComponent,
    EtatDossierComponent,
    VosDossierComponent,
    DeclareDepotExceptionnelModalComponent,
    ConfirmDepotModalComponent,
    DetailDepotComponent,
    UtilisateursComponent,
    ChangePasswordModalComponent,
    ConfirmCloturerReclamationModalComponent,
    VosDossierModalComponent,
    NotificationComponent,
    CurrencyBankPipe,
    ValidateReglementModalComponent,
    DetailReclamationAgentPayeurComponent,
    ReclamationDetailComponent,
    InformationDeposantComponent,
    DetailIndemnisationApComponent,
    DetailReprentantsComponent,
    DossierComponent,
    ResponseReclamationModal,
    ConfirmResponseReclamationModal,
    LoginComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    TableModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    AdherentModule,
    BackOfficeModule,
    NgbDatepickerModule

  ],
  providers: [
    provideDaterangepickerLocale({
      separator: ' - ',
      applyLabel: 'Okay',
    }),

  ],
  exports: [
    NgbDatepicker,
    DetailsIndemnisationComponent,
    RoleTreeviewComponent,
    ReclamationDetailComponent,
    InformationDeposantComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
