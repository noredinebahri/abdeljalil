import {Component, EventEmitter} from '@angular/core';
import {Router} from "@angular/router";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {StatusDossier} from "../../../enums/status-dossier";

@Component({
  selector: 'app-vos-dossier-modal',
  templateUrl: './vos-dossier-modal.component.html',
  styleUrl: './vos-dossier-modal.component.scss'
})
export class VosDossierModalComponent {
  selectedCard: any;
  goBack = new EventEmitter<void>();
  selectCard = new EventEmitter<any>();
  submitForm = new EventEmitter<void>();
  cardInfo = [
    {
      title: 'Benbrahim Mohammed',
      description: 'AB-14022024',
      imagePath: 'assets/images/svg/dossier-card.svg',
      content: 'Personne Physique',
      iconPath: 'assets/images/icone/icone dossier-card.svg',
      typePersonne: 'Titulaire',
      backgroundColor: 'light',
      backgroundTypPersonne: 'type1'
    },
    {
      title: 'Omnidata',
      description: 'AB-14022024',
      imagePath: 'assets/images/svg/dossier-card.svg',
      content: 'Personne Morale\u00A0\u00A0\u00A0',
      iconPath: 'assets/images/icone/icone dossier-card.svg',
      typePersonne: 'Représentant légal ',
      backgroundColor: 'light',
      backgroundTypPersonne: 'type1'
    },
    {
      title: 'Benbrahim Salwa',
      description: 'AB-14022024',
      imagePath: 'assets/images/svg/dossier-card.svg',
      content: 'Personne Physique',
      iconPath: 'assets/images/icone/icone dossier-card.svg',
      typePersonne: 'Représentant légal',
      backgroundColor: 'light',
      backgroundTypPersonne: 'type1'
    },
  ];

  constructor(public activeModal: NgbActiveModal, private router: Router) {}

  onSubmit() {
    this.submitForm.emit(this.selectedCard);
    this.router.navigate(['/deposant/details'], {state: {grayscale: true, showModal: true}});
  }

  onSelectCard(card: never) {
    this.selectCard.emit(card);
  }
  cancel(){
    this.activeModal.dismiss({ action: 'back'});
  }
  close() {
    this.activeModal.close();
  }
  acceder() {
    this.activeModal.close();
    this.router.navigate(['/deposant/details']);
  }

}
