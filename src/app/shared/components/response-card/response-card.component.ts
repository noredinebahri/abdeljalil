import {Component, input, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-response-card',
  templateUrl: './response-card.component.html',
  styleUrl: './response-card.component.scss'
})
export class ResponseCardComponent implements OnInit {

  @Input() header: string = '';
  @Input() iconPath: string = ''; // Path to the icon image
  @Input() title: string = '';
  @Input() content: string = '';
  @Input() theme: '' | 'red' | 'purple' | 'orange' ="";
  @Input() disabled: boolean = false;
  @Input() link: string = '';
  @Input() linkText: string = '';
  @Input() buttonText: string = '';
  @Input() buttons: { text: string, action: () => void ,outlined:boolean,buttonBolor:string}[] = [];
  @Input() buttonBolor:string = '';

  color1: string = "";
  onButtonClick(action: () => void) {
    action();
  }

  ngOnInit(): void {
    this.color1 = this.buttons[0].buttonBolor;
  }

}
