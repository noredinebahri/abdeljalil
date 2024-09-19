import { Component } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

import {ConfirmeModaleComponent} from "../confirme-modal/confirme-modale.component";

@Component({
  selector: 'app-trace-role',
  templateUrl: './trace-role.component.html',
  styleUrl: './trace-role.component.scss'
})
export class TraceRoleComponent {

  constructor(private modalService: NgbModal,) {
  }

  isEnabled: boolean = true;
  isDisabled: boolean = false;

  example1 = [
    {
      date: '2024/06/03 12:30',
      text: 'Status 3',
      active: true,
      isResponseCard: true,
      responseCardData: {
        header: 'Rôle créé',
        iconPath: "assets/images/svg/purple-icon-info.svg",
        title: '',
        content: 'Par : Bennani Marayame',
        theme: 'purple',
        disabled: true,
      }
    },

  ];

  confirmDesactiver() {
    const modalRef = this.modalService.open(ConfirmeModaleComponent, {size: 'lg', backdrop: 'static'});

  }
  confirmReactiver() {
    const modalRef = this.modalService.open(ConfirmeModaleComponent, {size: 'lg', backdrop: 'static'});

  }

}
