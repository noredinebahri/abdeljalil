export interface ColumnConfig {
  field: string;
  header: string;
  sortable?: boolean;
  style?: string;
  type?: 'text' | 'number' | 'badge' | 'link' | 'select' | 'date' | 'decimal' | 'file';
  options?: { value: string, label: string }[];
}

export interface FilterField {
  name: string;
  type: 'text' | 'select' | 'date' | 'number'|'date-range';
  placeholder: string;
  style?: string;
  options?: { label: string, value: any }[];
}

export interface ActionConfig {
  label: string;
  action: string;
  icon?: string;
  fieldCondition?: string,
  condition?: any
}

export interface ActionClickEvent<T> {
  action: string;
  item: T;
}
