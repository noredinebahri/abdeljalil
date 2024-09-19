import { Injectable, TemplateRef } from '@angular/core';
import { Toast } from './toast';

@Injectable({ providedIn: 'root' })
export class ToastService {

  public toasts: Toast[] = [];
  showSuccess(message: string): void {
    this.show(message, { classname: 'bg-success text-light', delay: 5000, autohide: true, progressWidth: 100 });
  }

  showError(message: string): void {
    this.show(message, { classname: 'bg-danger text-light', delay: 5000, autohide: true , progressWidth: 100});
  }

  showInfo(message: string): void {
    this.show(message, { classname: 'bg-info text-light', delay: 5000, autohide: true , progressWidth: 100});
  }

  showWarning(message: string): void {
    this.show(message, { classname: 'bg-warning text-light', delay: 5000, autohide: true , progressWidth: 100});
  }

  private show(textOrTpl: string | TemplateRef<any>, options: any = {}): void {
    const toast = { textOrTpl, ...options };
    this.toasts.push(toast);
    if (toast.autohide) {
      this.startProgress(toast);
    }
  }

  remove(toast: any): void {
    this.toasts = this.toasts.filter(t => t !== toast);
  }

  clear(): void {
    this.toasts = [];
  }
  private startProgress(toast: any): void {
    const interval = 50; // Update every 50ms
    const step = (interval / toast.delay) * 100; // Calculate width decrease per step

    const progressInterval = setInterval(() => {
      toast.progressWidth -= step;
      if (toast.progressWidth <= 0) {
        this.remove(toast);
        clearInterval(progressInterval);
      }
    }, interval);
  }

}
