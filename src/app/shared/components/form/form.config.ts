
export interface FilterField {
  name: string;
  type: 'text' | 'select' | 'date';
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

export interface FormItem {
  title?: string;
  itemType: string;
  placeholder?: string;
  type?: string;
  value?: any;
  disabled?: boolean;
  alignment?: string;
  text?: string;
  action?: string; 

}

