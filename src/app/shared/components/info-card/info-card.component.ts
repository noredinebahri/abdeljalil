import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.scss'
})
export class InfoCardComponent {
  @Input() iconPath: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() toggleState: boolean = false;
  @Input() customClass : string | string[] | undefined;
  @Input() disabled: boolean = false;

  @Output() toggleChange: EventEmitter<boolean> = new EventEmitter<boolean>();


}
