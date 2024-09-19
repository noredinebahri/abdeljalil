import {Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
  selector: 'app-dossier-card',
  templateUrl: './dossier-card.component.html',
  styleUrls: ['./dossier-card.component.scss']
})
export class DossierCardComponent {

  @Input() imagePath: string | undefined;
  @Input() iconPath: string | undefined;
  @Input() title: string | undefined;
  @Input() description: string | undefined;
  @Input() content: string | undefined;
  @Input() typePersonne: string | undefined;
  @Input() backgroundTypPersonne: string | undefined;
  @Input() backgroundColor: 'light' | 'dark' = 'light';
  @Input() selected: boolean = false; // Accept the selected state as input

  @Output() selectCard = new EventEmitter<void>(); // Emit an event when the card is clicked

  onCardClick() {
    this.selectCard.emit();
  }

  constructor() { }



}
