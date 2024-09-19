/* eslint-disable  @typescript-eslint/no-explicit-any */

import { TemplateRef } from "@angular/core";

export interface Toast {
  textOrTpl: string | TemplateRef<any>;
  classname: string;
  delay: number;
  autohide: boolean;
  progressWidth?: number;
}
export interface ToastOption {
  classname: string;
  delay: number;
  autohide: boolean;
  progressWidth?: number;
}
