import { Component, forwardRef, ViewChild, ElementRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {NgbDateStruct, NgbDateParserFormatter, NgbDatepickerI18n} from '@ng-bootstrap/ng-bootstrap';
import {CustomDatepickerI18n, I18n} from "../../config/date-picker/date-picker-language";


@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  providers: [
    I18n,
    {
      provide: NgbDatepickerI18n,
      useClass: CustomDatepickerI18n
    },
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatePickerComponent),
      multi: true
    }
  ]
})
export class DatePickerComponent implements ControlValueAccessor {
  model?: NgbDateStruct | null;
  @ViewChild('selectedDate', { static: false }) selectedDate?: ElementRef;
  @Input() placeholder: string = ''; // Accept placeholder as input

  constructor(private ngbDateParserFormatter: NgbDateParserFormatter) {}

  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: string): void {
    if (value) {
      this.model = this.ngbDateParserFormatter.parse(value);
      if (this.selectedDate && this.model) {
        this.selectedDate.nativeElement.value = this.ngbDateParserFormatter.format(this.model);
      }
    } else {
      this.model = undefined;
      if (this.selectedDate) {
        this.selectedDate.nativeElement.value = '';
      }
    }
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  onDateSelect(date: NgbDateStruct) {

    this.model = date;
    const selectedDate = this.ngbDateParserFormatter.format(date);
    this.onChange(selectedDate);
    this.onTouched();
    if (this.selectedDate) {
      this.selectedDate.nativeElement.value = selectedDate;
    }
  }

  setDisabledState?(isDisabled: boolean): void {
    // Optionally implement this if you want to disable your component
  }
}
