import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-indice-popup',
  templateUrl: './indice-popup.component.html',
  styleUrl: './indice-popup.component.scss'
})
export class IndicePopupComponent {
  @Input() steps: { title: string, message: string }[] = [];
  @Output() close = new EventEmitter<void>();
  @Output() finish = new EventEmitter<void>();
  currentStep: number = 0;

  onNext() {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
    } else {
      this.finish.emit();
    }
  }

  onRollback() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }
}
