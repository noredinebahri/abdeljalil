import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { natureDepot } from '../../../../../enums/nature-depot';
import { IDepotExceptionnel, IFile } from '../../../../../models/depot-exceptionnel';
import moment from 'moment';
import { DepotExceptionnelService } from "../../../../../services/deposant/depot-exceptionnel.service";
import {ToastService} from "../../../../../shared/components/toast/toast.service";
import {dateValidator} from "../../../../../shared/validators/dateValidator";
import {DATE_FORMAT, INPUT_DATE_FORMAT} from "../../../../../shared/constants/shared.constant";
import {StatusDossier} from "../../../../../enums/status-dossier";
import {Router} from "@angular/router";
import { FormItem } from 'src/app/shared/components/form/form.component';

@Component({
  selector: 'app-declare-depot-exceptionnel-modal',
  templateUrl: './declare-depot-exceptionnel-modal.component.html',
  styleUrls: ['./declare-depot-exceptionnel-modal.component.scss']
})
export class DeclareDepotExceptionnelModalComponent implements OnInit {
  @Input() depotData?: IDepotExceptionnel;
  nature: any[] = [];
  depotForm: FormGroup;
  formSubmitted: boolean = false;
  private attachedFiles: IFile[] = [];
  formItems!: FormItem[];

  constructor(
    public activeModal: NgbActiveModal,
    private translateService: TranslateService,
    private formBuilder: FormBuilder,
    private depotService: DepotExceptionnelService,
    private toastService: ToastService,
    protected router: Router
  ) {
    this.depotForm = this.formBuilder.group({
      // nature: ['', Validators.required],
      natureDepot: ['', Validators.required],
      compteBancaire: ['', Validators.required],
      montant: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      montantReclamation: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      dateDeclaration: ['', [Validators.required, dateValidator]],
      pieceJointeName: ['', Validators.required]
    });
  }
  compteBancaire = [
    { libelle: 'Compte 1', code: '1' },
    { libelle: 'Compte 2', code: '2' },
  ];

  ngOnInit(): void {
    this.translateService.get(['enum.natureDepot']).subscribe((translations) => {
      Object.values(natureDepot).forEach((value) => {
        this.nature.push({ code: value, libelle: translations['enum.natureDepot'][value] });
      });
    });

    if (this.depotData) {

      this.formItems = [
        {
          itemType: 'file',
          placeholder: 'pieceJointe',
          type: 'text',
            value: [
      { name: 'Document1.pdf', size: '1.2', progress: 100, uploadComplete: true, url: 'path/to/document1.pdf', fileType: 'pdf' },
      { name: 'Document2.pdf', size: '2.5', progress: 100, uploadComplete: true, url: 'path/to/document2.pdf', fileType: 'pdf' },
    ]
        },
      ];

      const matchedNature = this.nature.find(option => option.libelle === this.depotData?.nature);
      if (matchedNature) {
        this.depotData.nature = matchedNature.code;
      }
      this.depotForm.patchValue({
        ...this.depotData,
        dateDeclaration: moment(this.depotData.dateDeclaration, DATE_FORMAT).format(INPUT_DATE_FORMAT),
        montant: this.depotData?.montant,
        montantReclamation: 35,
        compteBancaire: '1',
        natureDepot: 'ASSURANCE_VIE',
      });
    }

    this.depotForm.valueChanges.subscribe(() => {
      this.formSubmitted = false;
    });
  }

  isInvalid(controlName: string): boolean {
    const control = this.depotForm.get(controlName);
    return control ? control.invalid && (control.dirty || control.touched || this.formSubmitted) : false;
  }

  saveData(status: string): void {
    this.formSubmitted = true;

    if (this.depotForm.invalid) {
      this.toastService.showError("Le formulaire contient des erreurs.");
      return;
    }
    // else {
    //   this.toastService.showSuccess("Votre dépôt a bien eteens")
    // }

    const formData: IDepotExceptionnel = {
      ndepot: this.depotData?.ndepot || "33",
      nature: this.depotForm.get('natureDepot')!.value,
      montant: this.depotForm.get('montant')!.value,
      montantReclamation: this.depotForm.get('montantReclamation')!.value,
      CompteBancaire: this.depotForm.get('compteBancaire')!.value,
      pieceJointeName: this.attachedFiles,
      dateDeclaration: moment(this.depotForm.get('dateDeclaration')!.value, INPUT_DATE_FORMAT).format(INPUT_DATE_FORMAT),
      status: status
    };
    localStorage.setItem('depotData', JSON.stringify(formData));
    this.activeModal.close(status);
  }

  close() {
    this.activeModal.close();
  }

  saveDraft() {
    this.saveData(StatusDossier.BROUILLON);

    /*this.depotService.addDepotBrouillon(this.depotForm).subscribe(
      (response) => {
        console.log('Depot added successfully', response);
      },
      (error) => {
        console.error('Error adding depot', error);
      }
    );*/
    this.toastService.showSuccess('le dépôt exceptionnel a été ajouté en tant que brouillon avec succès.');
    }

  declare() {
    this.saveData(StatusDossier.EN_COURS);
    this.router.navigate(['/details-depot'], { queryParams: { status: status } });

  }

  handleFileSelected(files: IFile[]) {
    this.attachedFiles = files;
    this.depotForm.patchValue({ pieceJointeName: files.map(file => file.name).join(', ') });
  }
}
