import {Component, OnInit} from '@angular/core';
import {FormItem} from "../../../../shared/components/form/form.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {
  AffectationReclamationModalComponent
} from "../affectation-reclamation-modal/affectation-reclamation-modal.component";
import {ReponseReclamationModalComponent} from "../reponse-reclamation-modal/reponse-reclamation-modal.component";

@Component({
  selector: 'app-info-reclamation',
  templateUrl: './info-reclamation.component.html',
  styleUrl: './info-reclamation.component.scss'
})
export class InfoReclamationComponent implements OnInit{
  reclamationItems!: FormItem[];
  statusArray = [
    { date: '18/10/2023 00:00', text: 'Réclamation en cours de traitement.' },
    { date: '18/10/2023 00:00', text: 'Réclamation créée.' , active: true},
  ];

  constructor(
    private modalService: NgbModal,
  ) {
  }
  ngOnInit(): void {
    this.reclamationItems = [
      {
        itemType: 'title',
        title: 'Détails de la réclamation'
      },
      {
        itemType: 'badge',
        placeholder: 'criticite',
        type: 'badge',
        value: 'EN_COURS',
        disabled: true,
      },
      {
        itemType: 'field',
        placeholder: 'natureReclamation',
        type: 'text',
        value: "Montant d’indemnisation incorrect ",
        disabled: true,
      },
      {
        itemType: 'field',
        placeholder: 'provenance',
        type: 'text',
        value: "En ligne via l'espace déposant",
        disabled: true,
      },

      {
        itemType: 'responsive-textarea',
        placeholder: 'message',
        value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non purus non eros ultricies blandit." +
          " Vivamus sit amet diam diam. Proin nec egestas justo, sed molestie tellus." +
          " Vestibulum tempus dui et dolor pellentesque lobortis." +
          " Nulla vestibulum vestibulum condimentum. Sed a ornare justo, eget rhoncus arcu." +
          " Aenean eget ullamcorper tortor, sit amet vehicula augue. Ut eu convallis mi, in semper elit.",
        disabled: true,
        fullWidth: true,
      },

      {
        itemType: 'file',
        placeholder: 'pieceJointes',
        value: [
          { name: 'Document1.pdf', size: '1.2', progress: 100, uploadComplete: true, url: 'path/to/document1.pdf', fileType: 'pdf' },
        ],
      },

      {
        itemType: 'button',
        text: 'Affecter',
        alignment: 'left',
        outlined : true,
        action : () => { this.affecterReclamation() },
      },
      {
        itemType: 'button',
        text: 'Répondre',
        alignment: 'right',
        action : () => { this.repondreReclamation() },
      },

    ]
  }

  private affecterReclamation() {
    const modalRef = this.modalService.open(AffectationReclamationModalComponent, {size: 'lg'});
  }

  private repondreReclamation() {
    const modalRef = this.modalService.open(ReponseReclamationModalComponent, {size: 'lg'});
  }
}
