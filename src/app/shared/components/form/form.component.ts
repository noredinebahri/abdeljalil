import {
  AfterViewChecked,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {FormControl, FormGroup, ValidatorFn} from '@angular/forms';
import {PhoneNumberService} from "../../../services/phone/phone-number.service";
import {ToastService} from "../toast/toast.service";
import {StatusDossier} from "../../../enums/status-dossier";
import {CriticiteDossier} from "../../../enums/criticite-dossier";
import {IFile} from "../../../models/depot-exceptionnel";
import { ActionClickEvent, ActionConfig } from './form.config';


/**
 * Interface representing a form item, which can be various types of elements
 * such as input fields, buttons, titles, dropdowns, files, or badges.
 */
export interface FormItem {
  /**
   * Specifies the type of form item.
   * - 'field': An input field for text, numbers, etc.
   * - 'button': A clickable button to perform an action.
   * - 'title': A title or heading within the form.
   * - 'dropdown': A dropdown selection field.
   * - 'file': An area to display a file or more files of type IFile.
   * - 'badge': A badge to display status or other information.
   */
  itemType: 'field' | 'big-field' | 'button' | 'title' | 'dropdown' | 'file' | 'badge' | 'message' | 'date' | 'textarea' | 'responsive-textarea' | 'dropfile'|'select';

  /** Optional title of the form item, used primarily for titles and headings. */
  title?: string;

  /** Optional placeholder text to guide users on expected input for fields. */
  placeholder?: string;

  rows? :number;

  /** Optional type of the form field (e.g., 'text', 'number', 'email'). */
  type?: string;

  /** Optional default value of the form field, can be a string, number, or an array of IFile objects. */
  value?: string | number | IFile[] | null;

  /** Optional flag to indicate if the form item is disabled and non-interactive. */
  disabled?: boolean;

  /** Optional text to be displayed on buttons or other text-based elements. */
  text?: string;

  /** Optional action associated with the form item, can be a function or a predefined action string. */
  action?: (() => void) | string;

  /** Optional flag to indicate if the form item should take the full width of the form. */
  fullWidth?: boolean



  /** Optional array of validation functions to apply to the form field. */
  validators?: ValidatorFn[];

  /** Optional options for dropdown fields, each containing a value and a label. */
  options?: { value: string | number, label: string }[];

  /** Optional alignment of the button, (e.g., 'left', 'right'). */
  alignment?: string;

  /** Optional flag to indicate if the button should be outlined. */
  outlined?: boolean;

  /** Optional flag to indicate if the button is selected. */
  selected?: boolean;

  showTopSeparator?: boolean;
  showBottomSeparator?: boolean;

}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent <T extends { [key: string]: any }>  implements OnChanges, AfterViewChecked {

  @Input() formItems: FormItem[] = [];
  @Input() formItems2:  T[] = [];

  @Input() showSeparators: boolean = true;
  @Input() newRecordBtnLink?: () => void;


  @Output() formData = new EventEmitter<any>();
  @Output() actionClick: EventEmitter<ActionClickEvent<T>> = new EventEmitter<ActionClickEvent<T>>();
  @Output() consultFileEvent = new EventEmitter<IFile>();
  @Output() fileSelected: EventEmitter<File | null> = new EventEmitter<File | null>();

  @ViewChild('displayTextarea') textareaRef!: ElementRef<HTMLTextAreaElement>;

  form: FormGroup = new FormGroup({});
  formTitle: string = '';

  initialFormItems: FormItem[] = [];
  initialFormValues: any = {};
  countryCodes: { countryCode: string, dialCode: string }[] = [];

  constructor(
    private phoneNumberService: PhoneNumberService,

    private toastService : ToastService
  ) {}

  getOptions(options?: { label: string, value: any }[]): { label: string, value: any }[] | null {
    return options || null;
  }


  onConsultFile(file: IFile) {
    this.consultFileEvent.emit(file);
  }

  protected handleAction(action: ActionConfig, item: T): void {
    this.actionClick.emit({ action: action.label, item });
  }

  getFiles(value: string | number | IFile[] | undefined | null): IFile[] {
    if (Array.isArray(value)) {
      return value as IFile[];
    }
    return [];
  }
  isStringOrNumber(value: any): value is string | number {
    return typeof value === 'string' || typeof value === 'number';
  }



  ngOnChanges(changes: SimpleChanges) {
    if (changes['formItems'] && changes['formItems'].currentValue !== changes['formItems'].previousValue) {
      this.initializeForm();
    }
    this.loadCountryCodes();
  }
  loadCountryCodes() {
    this.countryCodes = this.phoneNumberService.getAllCountryCodes();
  }

  hasButtons(): boolean {
    return this.formItems.some(item => item.itemType === 'button');
  }


  handleFile(event: any) {

    const file = event.target.files[0] || null;
    this.fileSelected.emit(file);
  }



  initializeForm() {
    // Initialize form items
    if (this.initialFormItems.length === 0) {
      this.initialFormItems = [...this.formItems];
      this.initialFormValues = this.extractInitialFormValues();
    }
    const group: { [key: string]: FormControl } = {};
    this.formItems.forEach(item => {
      if (item.itemType === 'title') {
        this.formTitle = item.title || '';
        return;
      }
      this.constructFormControl(group, item);
    });

    this.form = new FormGroup(group);
  }
  getBadgeClass(status: string | number | undefined): string {
    if (!status) {
      return 'badge';
    }
    switch (status) {
      case StatusDossier.EN_COURS:
        return 'badge En-cours';
      case StatusDossier.NOUVELLE_DEMANDE:
        return 'badge Nouvelle-demande';
      case StatusDossier.EN_ATTENTE_DE_COMPLEMENT:
        return 'badge En-attente';
      case StatusDossier.TRAITEE:
      case StatusDossier.APPROUVE:
        return 'badge Traitée';
      case StatusDossier.CLOTUREE:
        return 'badge Clôturée';
      case CriticiteDossier.CRITIQUE:
        return 'badge Critique';
      case CriticiteDossier.ELEVEE:
        return 'badge Élevée';
      case CriticiteDossier.FAIBLE:
      case StatusDossier.BROUILLON:
        return 'badge Faible';
      default:
        return 'badge';
    }
  }

  private constructFormControl(group: { [key: string]: FormControl }, item: FormItem) {
    if (item.placeholder && item.type !== 'badge') {
      if (item.type === 'mobile') {
        this.addPhoneControls(group, item);
      } else {
        this.addGenericControl(group, item);
      }
    }
  }


  private addPhoneControls(group: { [key: string]: FormControl }, item: FormItem) {
    const phoneParts = this.splitPhoneNumber(item.value?.toString() || '');
    group[`${item.placeholder}_countryCode`] = new FormControl({
      value: phoneParts.countryCode,
      disabled: item.disabled || false
    }, item.validators || []);

    group[`${item.placeholder}_phoneNumber`] = new FormControl({
      value: phoneParts.phoneNumber,
      disabled: item.disabled || false
    }, item.validators || []);

  }

  private addGenericControl(group: { [key: string]: FormControl }, item: FormItem) {
    if (typeof item.placeholder === 'string') {
      group[item.placeholder] = new FormControl({
        value: item.value || '',
        disabled: item.disabled || false
      }, item.validators || []);
    }
  }

  private extractInitialFormValues(): any {
    const values: any = {};
    this.formItems.forEach(item => {
      if (item.type === 'mobile') {
        const { countryCode, phoneNumber } = this.splitPhoneNumber(item.value?.toString() || '');
        values[`${item.placeholder}_countryCode`] = countryCode;
        values[`${item.placeholder}_phoneNumber`] = phoneNumber;
      } else if (item.placeholder) {
        values[item.placeholder] = item.value;
      }
    });
    return values;
  }

  splitPhoneNumber(fullNumber: string): { countryCode: string, phoneNumber: string } {
    const match = fullNumber.match(/^(\+\d{1,3})\s*(\d.*)$/);
    return match ? { countryCode: match[1], phoneNumber: match[2].trim() } : { countryCode: '', phoneNumber: '' };
  }


  onSubmit(action:string) {
    // Check if the form is invalid
    if (this.form.invalid) {
      this.toastService.showError('Veuillez remplir les champs manquants');
      this.form.markAllAsTouched();
      return;
    }

    const formValues = { ...this.form.value };
    let allNumbersValid = true;

    // Validate phone numbers and handle them separately
    this.formItems.forEach(item => {

      if (item.type === 'mobile') {
        const countryCode = formValues[item.placeholder + '_countryCode'].replace(/\D/g, '');
        const phoneNumber = formValues[item.placeholder + '_phoneNumber'].replace(/\D/g, '');

        if (this.phoneNumberService.validatePhoneNumber(phoneNumber, countryCode)) {
          formValues[item.placeholder!] = `${countryCode} ${phoneNumber}`;
        } else {
          allNumbersValid = false;
          const controlName = item.placeholder + '_phoneNumber';
          this.form.get(controlName)?.setErrors({ invalidPhoneNumber: true });
        }


        delete formValues[item.placeholder + '_countryCode'];
        delete formValues[item.placeholder + '_phoneNumber'];
      }
    });

    // Emit form data if all phone numbers are valid
    if (allNumbersValid) {
      this.formData.emit(formValues);
      this.closeForm();
    } else {
      this.form.markAllAsTouched();
      this.toastService.showError('Le formulaire contient des erreurs. Veuillez vérifier les champs et réessayer.');
    }
  }



  handleButtonAction(action?: (() => void) | string) {


    if (typeof action === 'function') {
      action();
      return;
    }
    if (typeof action !== 'string') {
      return;
    }
    switch (action) {
      case 'enableForm':
        this.enableFormAction();
        break;
      case 'annuler':
        this.cancelAction();
        break;
      case 'enregistrer':
      case 'Modifier':
        if(this.form.valid){
          this.onSubmit(action);
        }
        break;
      default:
        this.defaultAction(action);
        break;
    }
  }

  private enableFormAction() {
    this.form.enable();

    const newButtons: FormItem[] = [
      {
        itemType: 'button',
        alignment: 'left',
        text: 'Annuler',
        selected: false,
        outlined: true,
        action: 'annuler'

      },
      {
        itemType: 'button',
        alignment: 'right',
        text: 'Enregistrer',
        action: 'enregistrer',
        outlined: false,
        selected: true
      },
    ];

    this.formItems = this.formItems.filter(item => item.action !== 'enableForm').concat(newButtons);
  }

  private closeForm() {
    const oldButtons = this.initialFormItems.filter(item => item.itemType === 'button');
    this.formItems = this.formItems.filter(item => item.itemType !== 'button').concat(oldButtons);
    this.form.disable();
  }

  private cancelAction() {

    this.formItems = [...this.initialFormItems];
    this.form.reset(this.initialFormValues);
    this.form.disable();
  }



  private defaultAction(action: string) {
    this.formItems.find(item => item.action === action);
  }




  loadData() {
    throw new Error('Method not implemented.');
  }

  private adjustTextareaHeight(): void {
    if (this.textareaRef && this.textareaRef.nativeElement) {
      const textarea = this.textareaRef.nativeElement;
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight + 'px';
    }
  }

  ngAfterViewChecked(): void {
    this.adjustTextareaHeight();
  }

}
