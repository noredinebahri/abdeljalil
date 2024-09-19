import {NgModule} from '@angular/core';
import {SharedLibsModule} from './shared-libs.module';
import {RouterModule} from "@angular/router";
import { HasAnyAuthorityDirective } from './directives/auth/has-any-authority.directive';
import {ButtonComponent} from "./components/button/button.component";
import {InputComponent} from "./components/inputs/input/input.component";
import {DropdownComponent} from "./components/inputs/dropdown/dropdown.component";
import {TextAreaComponent} from "./components/inputs/text-area/text-area.component";
import {VerificationCodeComponent} from "./components/inputs/verification-code/verification-code.component";
import {SearchInputComponent} from "./components/inputs/search-input/search-input.component";
import {InfoCardComponent} from "./components/info-card/info-card.component";
import {ResponseCardComponent} from "./components/response-card/response-card.component";
import {DossierCardComponent} from "./components/dossier-card/dossier-card.component";
import {NavbarButtonComponent} from "./components/responsive-navbar/navbar-button/navbar-button.component";
import {ResponsiveNavbarComponent} from "./components/responsive-navbar/responsive-navbar.component";
import {NgOptimizedImage} from "@angular/common";
import {FileUploadComponent} from "./components/file-upload/file-upload.component";
import {FormComponent} from "./components/form/form.component";
import {StatusTimelineComponent} from "./components/status-timeline/status-timeline.component";
import {NgbDateParserFormatter, NgbDatepicker, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";
import {DatePickerComponent} from "./directives/date-picker/date-picker.component";
import { TruncatePipe } from './pipes/truncate.pipe';
import {FilterComponent} from "./components/filter/filter.component";
import {CustomDateParserFormatter} from "./config/date-picker/datepicker-adapter";
import {DateRangePickerComponent} from "./directives/date-range-picker/date-range-picker.component";
import {NgxDaterangepickerBootstrapDirective} from "ngx-daterangepicker-bootstrap";
import {ReclamationAgentPayeurComponent} from "../components/agent-payeur/reclamation-agent-payeur/reclamation-agent-payeur.component";
import {DetailComptesBancairesComponent} from "../components/dossier/comptes-bancaires/detail-comptes-bancaires/detail-comptes-bancaires.component";
import {DetailHeritiersComponent} from "../components/dossier/heritiers/detail-heritiers/detail-heritiers.component";
import {TableComponent} from "./components/table/table.component";
import {ItemCountComponent} from "./directives/pagination/item-count.component";
import {RepresentantsComponent} from "../components/dossier/representants/representants.component";
import {HeritiersComponent} from "../components/dossier/heritiers/heritiers.component";
import {ComptesBancairesComponent} from "../components/dossier/comptes-bancaires/comptes-bancaires.component";
import {ReclamationsComponent} from "../components/dossier/reclamations/reclamations.component";
import {
  ConfirmRepondreModalComponent
} from "../components/dossier/reclamations/confirm-repondre-modal/confirm-repondre-modal.component";
import {ToastComponent} from "./components/toast/toast.component";
import {ConfirmationModalComponent} from "./components/confirmation-modal/confirmation-modal.component";
import {RoleTreeviewComponent} from "./components/role-treeview/role-treeview.component";
import {PageTitleComponent} from "./components/page-title/page-title.component";
import {ReleveIndemniteTableComponent} from "./components/releve-indemnite-table/releve-indemnite-table.component";


@NgModule({
    imports: [
        RouterModule,
        SharedLibsModule,
        NgOptimizedImage,
        NgbModule,
        FormsModule,
        NgxDaterangepickerBootstrapDirective,

    ],
  declarations: [
    HasAnyAuthorityDirective,
    ButtonComponent,
    InputComponent,
    DropdownComponent,
    TextAreaComponent,
    VerificationCodeComponent,
    SearchInputComponent,
    InfoCardComponent,
    ResponseCardComponent,
    DossierCardComponent,
    NavbarButtonComponent,
    ResponsiveNavbarComponent,
    FileUploadComponent,
    FormComponent,
    StatusTimelineComponent,
    DatePickerComponent,
    TruncatePipe,
    FilterComponent,
    DateRangePickerComponent,
    ReclamationAgentPayeurComponent,
    TableComponent,
    ItemCountComponent,
    ComptesBancairesComponent,
    DetailComptesBancairesComponent,
    HeritiersComponent,
    DetailHeritiersComponent,
    RepresentantsComponent,
    ReclamationsComponent,
    HeritiersComponent,
    RepresentantsComponent,
    TableComponent,
    ItemCountComponent,
    ComptesBancairesComponent,
    ConfirmRepondreModalComponent,
    ToastComponent,
    ConfirmationModalComponent,
    RoleTreeviewComponent,
    PageTitleComponent,
    ReleveIndemniteTableComponent
  ],
  exports: [
    SharedLibsModule,
    ButtonComponent,
    InputComponent,
    DropdownComponent,
    TextAreaComponent,
    VerificationCodeComponent,
    SearchInputComponent,
    InfoCardComponent,
    ResponseCardComponent,
    ResponsiveNavbarComponent,
    NavbarButtonComponent,
    DossierCardComponent,
    FileUploadComponent,
    HasAnyAuthorityDirective,
    FormComponent,
    StatusTimelineComponent,
    DatePickerComponent,
    NgbDatepicker,
    TruncatePipe,
    FilterComponent,
    DateRangePickerComponent,
    ReclamationAgentPayeurComponent,
    TableComponent,
    ItemCountComponent,
    ComptesBancairesComponent,
    DetailComptesBancairesComponent,
    HeritiersComponent,
    DetailHeritiersComponent,
    RepresentantsComponent,
    ReclamationsComponent,
    ComptesBancairesComponent,
    HeritiersComponent,
    RepresentantsComponent,
    TableComponent,
    ItemCountComponent,
    ConfirmRepondreModalComponent,
    ToastComponent,
    ConfirmationModalComponent,
    RoleTreeviewComponent,
    PageTitleComponent,
    ReleveIndemniteTableComponent
  ],
  providers: [
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter }
  ]
})
export class SharedModule {}
