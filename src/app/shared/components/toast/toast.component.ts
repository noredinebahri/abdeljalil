/* eslint-disable  @typescript-eslint/no-explicit-any */

import {Component, TemplateRef} from '@angular/core';
import { ToastService } from './toast.service';


@Component({
  selector: 'app-toasts',
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss',
  host: {'[class.ngb-toasts]': 'true'}
})
export class ToastComponent{
  constructor(public toastService: ToastService) {}

  isTemplate(toast: any) { return toast.textOrTpl instanceof TemplateRef; }

}
