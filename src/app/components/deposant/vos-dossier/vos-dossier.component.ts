import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-vos-dossier',
  templateUrl: './vos-dossier.component.html',
  styleUrl: './vos-dossier.component.scss'
})
export class VosDossierComponent {
  @Input() cardInfo: any[] = [];
  @Input() selectedCard: any;
  @Output() goBack = new EventEmitter<void>();
  @Output() selectCard = new EventEmitter<any>();
  @Output() submitForm = new EventEmitter<void>();

  constructor(private router: Router) {}
  onSubmit() {
    this.submitForm.emit(this.selectedCard);
    console.log('Navigating to target page with grayscale state');
    this.router.navigate(['/deposant/details'], { state: { grayscale: true, showModal: true } });
  }

  onGoBack() {
    this.goBack.emit();
  }
  onSelectCard(card: any) {
    this.selectCard.emit(card);
  }

}
