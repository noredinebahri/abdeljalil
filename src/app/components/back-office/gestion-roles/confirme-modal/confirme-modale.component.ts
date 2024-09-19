import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";
import { ToastService } from 'src/app/shared/components/toast/toast.service';

@Component({
  selector: 'app-confirme-modal',
  templateUrl: './confirme-modale.component.html',
  styleUrl: './confirme-modale.component.scss'
})
export class ConfirmeModaleComponent {
  @Input() isReactivation: boolean = false;
  form: FormGroup = new FormGroup({});
  isSubmitted:boolean  = false;


  constructor(public activeModal: NgbActiveModal,private fb: FormBuilder, private router: Router,
    private toastService:ToastService
              ) {
    this.form = this.fb.group({
      Motif: [null]
    });
  }



  options = [
    { value: 'option1', label: 'referentiel.option1' },
    { value: 'option2', label: 'referentiel.option2' }
  ];

  save() {
    if(this.form.valid){
      this.isSubmitted = true;
    }
  }
  close(form?: FormGroup) {
    this.activeModal.close(form);
  }
  back(){
    this.isSubmitted = false;
  }
  cancel() {
    this.activeModal.close();
  }
  confirm(){
    this.close(this.form);
    this.router.navigate(['/gestion-roles/role'], {
      state: {
        monochrome: true,
        disableToggles: true,
        // hideToggles: true
      }
    });
    this.toastService.showSuccess('Le rôle a été activé avec succès.');

  }



}
