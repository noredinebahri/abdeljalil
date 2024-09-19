import {Component, Input} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-navbar-button',
  templateUrl: './navbar-button.component.html',
  styleUrl: './navbar-button.component.scss'

})
export class NavbarButtonComponent {

  @Input() isDropdown: boolean = false;
  @Input() iconPath: string | undefined;
  @Input() label: string | undefined;
  @Input() backgroundColor: string | undefined;
  isOpen: boolean = false; // Controls the visibility of the dropdown list

  toggleDropdown(): void {
    this.isOpen = !this.isOpen; // Toggle dropdown open/close
  }


}
