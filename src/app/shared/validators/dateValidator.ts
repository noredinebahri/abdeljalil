import { AbstractControl, ValidationErrors } from '@angular/forms';
import moment from 'moment';
import {INPUT_DATE_FORMAT} from "../constants/shared.constant";

export function dateValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  if (!value) return null;
  const isValid = moment(value, INPUT_DATE_FORMAT, true).isValid();
  return isValid ? null : { invalidDate: 'Invalid date format, should be DD/MM/YYYY' };
}
