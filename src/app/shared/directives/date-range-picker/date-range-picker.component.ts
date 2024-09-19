import { Component, forwardRef, Input, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';
import { CustomDatepickerI18n, I18n } from "../../config/date-picker/date-picker-language";
import dayjs, { Dayjs } from 'dayjs';

@Component({
  selector: 'app-date-range-picker',
  templateUrl: './date-range-picker.component.html',
  styleUrls: ['./date-range-picker.component.scss'],
  providers: [
    I18n,
    {
      provide: NgbDatepickerI18n,
      useClass: CustomDatepickerI18n
    },
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateRangePickerComponent),
      multi: true
    }
  ]
})
export class DateRangePickerComponent {
  @Input() placeholder: string = '';

  dropsDown = 'down';
  opens = 'right';

  selectedSimpleCalendarTimeUpRight: any;
  invalidDates: Dayjs[] = [];

  localeTime = {
    firstDay: 1,
    startDate: dayjs().startOf('day'),
    endDate: dayjs().endOf('day'),
    format: 'DD/MM/YYYY',
    applyLabel: 'Appliquer',
    cancelLabel: 'Annuler',
    fromLabel: 'From',
    toLabel: 'To',
  };

  tooltips = [
    { date: dayjs(), text: 'Today is just unselectable' },
    { date: dayjs().add(2, 'days'), text: 'Yeeeees!!!' },
  ];

  constructor(private elRef: ElementRef) {}

  isTooltipDate = (m: Dayjs) => {
    const tooltip = this.tooltips.find((tt) => tt.date.isSame(m, 'day'));
    return tooltip ? tooltip.text : false;
  };

  isInvalidDate = (m: Dayjs) => {
    return this.invalidDates.some((d) => d.isSame(m, 'day'));
  };

  isCustomDate = (date: Dayjs) => {
    return date.month() === 0 || date.month() === 6 ? 'mycustomdate' : false;
  };

  datesUpdatedRange($event: Object) {
    console.log('range', $event);
  }

  adjustPickerPosition(event: MouseEvent) {
    const inputEl = this.elRef.nativeElement.querySelector('input');
    const inputRect = inputEl.getBoundingClientRect();

    if (window.innerWidth - inputRect.right < 300) { 
      this.opens = 'left';
    } else {
      this.opens = 'right';
    }
  }
}
