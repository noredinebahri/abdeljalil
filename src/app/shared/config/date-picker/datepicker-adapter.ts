import { Injectable } from '@angular/core';
import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import moment from 'moment';
import {INPUT_DATE_FORMAT} from "../../constants/shared.constant";

@Injectable()
export class CustomDateParserFormatter extends NgbDateParserFormatter {
  readonly DT_FORMAT = INPUT_DATE_FORMAT;

  parse(value: string): NgbDateStruct | null {
    if (value) {
      const mdt = moment(value, this.DT_FORMAT);
      return { year: mdt.year(), month: mdt.month() + 1, day: mdt.date() };
    }
    return null;
  }

  format(date: NgbDateStruct | null): string {
    if (date) {
      const mdt = moment({ year: date.year, month: date.month - 1, day: date.day });
      return mdt.isValid() ? mdt.format(this.DT_FORMAT) : '';
    }
    return '';
  }
}
