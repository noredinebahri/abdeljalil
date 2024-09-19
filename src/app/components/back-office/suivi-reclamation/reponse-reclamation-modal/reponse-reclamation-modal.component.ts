import { Component } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastService} from "../../../../shared/components/toast/toast.service";
import {IFile} from "../../../../models/depot-exceptionnel";

@Component({
  selector: 'app-reponse-reclamation-modal',
  templateUrl: './reponse-reclamation-modal.component.html',
  styleUrl: './reponse-reclamation-modal.component.scss'
})
export class ReponseReclamationModalComponent {
  reponseForm: FormGroup;
  isSubmitted: boolean = false;

  private attachedFiles: IFile[] = [];
  constructor(
    public activeModal: NgbActiveModal,
    protected router: Router,
    private formBuilder: FormBuilder,
    private toastService: ToastService
  ) {
    this.reponseForm = this.formBuilder.group({
      message: ['', Validators.required],
      pieceJointe: [''],
    });
  }

  confirmer() {
    this.reponseForm.markAllAsTouched();
    this.reponseForm.updateValueAndValidity();
    if (this.reponseForm.valid) {
      console.log(this.reponseForm.value.message);
      this.isSubmitted = true;
    }
  }
  save(){
    this.close();
    this.toastService.showSuccess('La réponse a bien été enregistrée.');
  }

  retour() {
    this.isSubmitted = false;
  }

  close() {
    this.activeModal.close();
  }

  isInvalid(controlName: string): boolean {
    const control = this.reponseForm.get(controlName);
    return control ? control.invalid && (control.dirty || control.touched) : false;
  }

  handleFileSelected(files: IFile[]) {
    this.attachedFiles = files;
    this.reponseForm.patchValue({ pieceJointeName: files.map(file => file.name).join(', ') });
  }

}
