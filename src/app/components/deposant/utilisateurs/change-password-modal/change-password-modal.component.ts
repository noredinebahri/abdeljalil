import {Component, Input} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {passwordMatchValidator} from "./password-match.validator";
import {OsPatternValidators} from "../../../../shared/components/form/os-utils/os-pattern-validators";




@Component({
  selector: 'app-change-password-modal',
  templateUrl: './change-password-modal.component.html',
  styleUrl: './change-password-modal.component.scss'
})
export class ChangePasswordModalComponent {
  @Input() content: string | undefined;



  changePasswordForm = new FormGroup({
    currentPassword: new FormControl('', [Validators.required]),
    newPassword: new FormControl('', [
      Validators.required,
      Validators.pattern(OsPatternValidators.passwordRegex)
    ]),
    confirmPassword: new FormControl('', [Validators.required])
  }, { validators: passwordMatchValidator });

  constructor(public activeModal: NgbActiveModal) {}

  onSubmit() {
    if (this.changePasswordForm.valid) {
      console.log('Password change form submitted', this.changePasswordForm.value);
      this.activeModal.close('Submit click');
    }
  }

  onCancel() {
    this.activeModal.dismiss('cancel');
  }

  togglePasswordVisibility(controlName: string) {
    const input = document.querySelector(`input[formControlName=${controlName}]`) as HTMLInputElement;
    const icon = input.nextElementSibling as HTMLElement;
    if (input.type === 'password') {
      input.type = 'text';
      icon.classList.remove('bi-eye-slash');
      icon.classList.add('bi-eye');
    } else {
      input.type = 'password';
      icon.classList.remove('bi-eye');
      icon.classList.add('bi-eye-slash');
    }
  }

  protected readonly onsubmit = onsubmit;
}
