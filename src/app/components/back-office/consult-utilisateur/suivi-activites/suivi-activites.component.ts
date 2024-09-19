import { Component } from '@angular/core';
import { ConfirmeModaleComponent } from '../../gestion-roles/confirme-modal/confirme-modale.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-suivi-activites',
  templateUrl: './suivi-activites.component.html',
  styleUrl: './suivi-activites.component.scss'
})
export class SuiviActivitesComponent {


  constructor(private modalService: NgbModal) {
  }
  isEnabled: boolean = true;
  isDisabled: boolean = false;
  goBack() {
    window.history.back();
  }

  statusArray = [
    { date: "", text: 'Dossier créé.' },
    {
      date: '2024/06/03 12:30',
      text: 'Status 3',
      active: true,
      isResponseCard: true,
      responseCardData: {
        header: 'Dossier gélé',
        iconPath:"assets/images/svg/orange-icon-info.svg",
        title: 'Commentaire de la suspicion Lorem ipsum dolor sit amet consecteur adipiscin elit',
        content: 'Par : Bennani Marayame',
        theme: 'orange',
        disabled: false,
        buttonText:"Qualifiez-vous ce dossier frauduleux ?"
      }
    },
    { date: '18/10/2023', text: 'Indemnisation calculée.' },
    { date: '18/10/2023', text: 'Règlement en cours de traitement.' }
  ];

  openModal() {
  }

  confirmDesactiver() {
    const modalRef = this.modalService.open(ConfirmeModaleComponent, {size: 'lg', backdrop: 'static'});

  }
  confirmReactiver() {
    const modalRef = this.modalService.open(ConfirmeModaleComponent, {size: 'lg', backdrop: 'static'});

  }


}
