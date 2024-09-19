import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() text: string | undefined;
  @Input() type: 'primary' | 'secondary' = 'primary';
  @Input() disabled: boolean = false;
  @Input() selected?: boolean = false;
  @Input() outlined?: boolean = false;
  @Input() class: string = '';
  @Input() typeButton: string = 'button';
  @Input() buttonBolor: string | undefined;


  ngOnChanges(changes: SimpleChanges) {
    if (changes['color']) {
      console.log('Button color changed:', this.buttonBolor);
    }
  }

  

}
