import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import moment from 'moment';
import { IFile } from 'src/app/models/depot-exceptionnel';
import { IParametrage } from 'src/app/models/parametrage';
import { ParametrageService } from 'src/app/services/parametrage/parametrage.service';
import { FormItem } from 'src/app/shared/components/form/form.component';
import { ToastService } from 'src/app/shared/components/toast/toast.service';
import { DATE_FORMAT, INPUT_DATE_FORMAT } from 'src/app/shared/constants/shared.constant';
import { dateValidator } from 'src/app/shared/validators/dateValidator';

@Component({
  selector: 'app-update-parametrage-modal',
  templateUrl: './update-parametrage-modal.component.html',
  styleUrl: './update-parametrage-modal.component.scss'
})
export class UpdateParametrageModalComponent implements OnInit{

  parametrage: IParametrage[] = [];
  @Input() parametrageData?: IParametrage;
  parametrageForm: FormGroup;
  formSubmitted: boolean = false;
  formItems!: FormItem[];
  private attachedFiles: IFile[] = [];

  valeur = [
    { libelle: 'valeur 1', code: '1' },
    { libelle: 'valeur 2', code: '2' },
  ];

  constructor(
    private modalService: NgbModal,
    private router: Router,
    private translate: TranslateService, 
    private toastService: ToastService,
    private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal,
    private parametrageService: ParametrageService
  ) {
    this.parametrageForm = this.formBuilder.group({
      numParametre: ['', Validators.required],
      parametre: [{ value: "", disabled: true }, Validators.required],
      dateModif: ['', [Validators.required, dateValidator]],
      valeur: ['', Validators.required],
      commentaire: ['', Validators.required],
      file: ['', Validators.required]
    });
  }

  
  
  ngOnInit() {
    console.log("parametrageData ", this.parametrageData);

    if(this.parametrageData){

      this.formItems = [{
          itemType: 'file',
          placeholder: 'pieceJointe',
          type: 'text',
          value: [
            { name: 'Document1.pdf', size: '1.2', progress: 100, uploadComplete: true, url: 'path/to/document1.pdf', fileType: 'pdf' },
            { name: 'Document2.pdf', size: '2.5', progress: 100, uploadComplete: true, url: 'path/to/document2.pdf', fileType: 'pdf' },]
        }];

      this.parametrageForm.patchValue({
        numParametre: this.parametrageData?.numParametre,
        parametre: this.parametrageData?.parametre,
        dateModif: moment(this.parametrageData.dateModif, DATE_FORMAT).format(INPUT_DATE_FORMAT),
        valeur: this.parametrageData.valeur,
        commentaire: this.parametrageData?.commentaire,
        file: this.formItems
      });
    }


    console.log("this.parametrageForm.value ", this.parametrageForm.value);

    
    //this.loadDepotData();
  }


  isInvalid(controlName: string): boolean {
    const control = this.parametrageForm.get(controlName);
    return control ? control.invalid && (control.dirty || control.touched || this.formSubmitted) : false;
  }

  enregistrer() {
    this.activeModal.close();
    this.toastService.showSuccess('Paramètre modifié avec succès.');

    /*this.parametrageService.updateParametrage(this.parametrageForm.value).subscribe(
      () => {},
      error => {
        console.error('Error deleting compagne:', error);
      });*/
  }

  annuler() {
    this.activeModal.close();
    this.toastService.showSuccess('L\'opération a été annulée.');
  }

  close() {
    this.activeModal.close();
  }

  handleFileSelected(files: IFile[]) {
    this.attachedFiles = files;
    this.parametrageForm.patchValue({ pieceJointeName: files.map(file => file.name).join(', ') });
  }
}
