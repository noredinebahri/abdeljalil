import { Component, EventEmitter, input, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { TranslateService } from "@ngx-translate/core";
import { Router } from "@angular/router";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ToastService } from "../../../../shared/components/toast/toast.service";
import { FormItem } from "../../../../shared/components/form/form.component";

@Component({
  selector: 'app-update-modal',
  templateUrl: './update-modal.component.html',
  styleUrl: './update-modal.component.scss'
})
export class UpdateModalComponent implements OnInit {
  @Input() isSubmitted: boolean = false;
  @Input() formItems: FormItem[] = [];
  @Input() title: string = '';
  @Input() action: string = '';


  @Output() confirmUpdate = new EventEmitter<void>();


  form: FormGroup = new FormGroup({});
  initialFormItems: FormItem[] = [];
  initialFormValues: any = {};
  constructor(public activeModal: NgbActiveModal, private translateService: TranslateService,
    private router: Router, private formBuilder: FormBuilder, private toastService: ToastService) { }

  ngOnInit() {
    this.initializeForm();
  }



  isReferentiel(): boolean {
    return !this.isCompagneIndemnisation();
  }

  
  isCompagneIndemnisation(): boolean {
    if (this.title === 'indemnisation.updateTitle' || this.title === 'indemnisation.title') {
      return true;
    }
    return false;
  }
  
  isUpdateMethode() {
    return this.action === 'modifier';
  }

  initializeForm() {
    // Initialize form items
    if (this.initialFormItems.length === 0) {
      this.initialFormItems = [...this.formItems];
      this.initialFormValues = this.extractInitialFormValues();
    }
    const group: { [key: string]: FormControl } = {};
    this.formItems.forEach(item => {
      this.constructFormControl(group, item);
    });

    this.form = new FormGroup(group);
    console.log("formItem :", this.formItems)
  }
  private extractInitialFormValues(): any {
    const values: any = {};
    this.formItems.forEach(item => {
      if (item.placeholder)
        values[item.placeholder] = item.value;
    });
    return values;
  }
  private constructFormControl(group: { [key: string]: FormControl }, item: FormItem) {
    if (item.placeholder && item.type !== 'badge') {
      this.addGenericControl(group, item);
    }
  }
  private addGenericControl(group: { [key: string]: FormControl }, item: FormItem) {
    if (typeof item.placeholder === 'string') {
      group[item.placeholder] = new FormControl({
        value: item.value || '',
        disabled: item.disabled || false
      }, item.validators || []);
    }
  }
  close(form?: FormGroup) {
    this.activeModal.close(form);
  }

  cancel() {
    this.activeModal.close();
  }


  confirm() {
    this.confirmUpdate.emit();
    this.close(this.form);
  }
  back() {
    this.isSubmitted = false;
  }
  save() {
    if (this.form.valid) {
      this.isSubmitted = true;
    }
    // this.saveData(StatusDossier.EN_COURS);
  }
}
