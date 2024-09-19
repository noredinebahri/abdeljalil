import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface FilterField {
  name: string;
  type: 'text' | 'select' | 'date';
  placeholder: string;
  options?: { label: string, value: any }[];
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Input() filterFields: FilterField[] = [];
  @Output() filterChanged = new EventEmitter<any>();

  filters: { [key: string]: any } = {};

  applyFilter() {
    this.filterChanged.emit(this.filters);
  }

  getOptions(options?: { label: string, value: any }[]): { label: string, value: any }[] | null {
    return options || null;
  }
}
