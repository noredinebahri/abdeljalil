import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {TranslateService} from "@ngx-translate/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DepotExceptionnelService} from "../../../../services/deposant/depot-exceptionnel.service";
import {ToastService} from "../../../../shared/components/toast/toast.service";
import {Router} from "@angular/router";
import {dateValidator} from "../../../../shared/validators/dateValidator";
import {natureDepot} from "../../../../enums/nature-depot";
import {UniteOrganisationnelle} from "../../../../enums/unite-organisationnelle";

@Component({
  selector: 'app-affectation-reclamation-modal',
  templateUrl: './affectation-reclamation-modal.component.html',
  styleUrl: './affectation-reclamation-modal.component.scss'
})
export class AffectationReclamationModalComponent implements OnInit {
  affectationForm: FormGroup;
  unitesOrganisationelles: any[] = [];
  constructor(
    public activeModal: NgbActiveModal,
    protected router: Router,
    private formBuilder: FormBuilder,
    private translateService: TranslateService,
    private toastService: ToastService
  ) {
    this.affectationForm = this.formBuilder.group({
      uniteOrganisationelle: ['', Validators.required],
      commentaire: [''],
    });
  }

  ngOnInit(): void {
    this.translateService.get(['enum.uniteOrganisationelle']).subscribe((translations) => {
      Object.values(UniteOrganisationnelle).forEach((value) => {
        this.unitesOrganisationelles.push({ code: value, libelle: translations['enum.uniteOrganisationelle'][value] });
      });
    });
  }

  save(){
    this.affectationForm.markAllAsTouched();
    this.affectationForm.updateValueAndValidity();
    if (this.affectationForm.valid) {
      this.toastService.showSuccess('La réclamation a bien été affectée à l’établissement centre d’appel.');
      this.activeModal.close();
    }
  }
  close() {
    this.activeModal.close();
  }

  isInvalid(controlName: string): boolean {
    const control = this.affectationForm.get(controlName);
    return control ? control.invalid && (control.dirty || control.touched) : false;
  }




}
