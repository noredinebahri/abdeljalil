export interface ModalDialog {
  title: string;
  message: string;
  showCancelIcon: boolean;
  showCancelBtn: boolean;
  cancel?: string;
  confirm?: string;
}