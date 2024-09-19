import {Component, OnInit, Renderer2} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {Router} from "@angular/router";
import {ValidateReglementModalComponent} from "./validate-reglement-modal/validate-reglement-modal.component";
import {TranslateService} from "@ngx-translate/core";
import {SharedService} from "../../../../shared/shared.service";

@Component({
  selector: 'app-details-indemnisation',
  templateUrl: './details-indemnisation.component.html',
  styleUrls: ['./details-indemnisation.component.scss']
})
export class DetailsIndemnisationComponent implements OnInit{
symbol: string = 'MAD';
  cards = [
    {
      title: 'deposant.details.modeReglements.virementBancaire.title',
      description: 'deposant.details.modeReglements.virementBancaire.text',
      toggleState: false,
      customClass: ['light-theme', 'mt-0'],
      iconPath: 'assets/images/svg/virement.svg'
    },
    {
      title: 'deposant.details.modeReglements.miseDisposition.title',
      description: 'deposant.details.modeReglements.miseDisposition.text',
      toggleState: false,
      customClass: ['light-theme'],
      iconPath: 'assets/images/svg/MiseDisposition.svg'
    }
  ];


  popupSteps = [
    {
      title: 'METTEZ À JOUR VOS COORDONNÉES',
      message: 'Assurez-vous que vos coordonnées de contact sont à jour en accédant à votre compte. Cela nous aidera à vous contacter rapidement si nécessaire.'
    },
    {
      title: 'NOTE IMPORTANT',
      message: 'Noter qu\'une fois déconnecté, vos coordonnées de contact ne seront plus modifiables.'
    }
  ];

  showModal: boolean = false;
  isCardButtonDisabled: boolean = true;


  constructor(
      private sharedService:SharedService,
      private modalService: NgbModal,
      private renderer: Renderer2,
      private router: Router
  ) {}

  ngOnInit(): void {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { grayscale: boolean, showModal: boolean };
    if (state?.showModal) {
      this.showModal = true;
    }

    if (this.showModal) {
      this.renderer.addClass(document.body, 'grayscale');
    }
   this.sharedService.currencySymbol.subscribe({next: symbol => this.symbol = symbol});
  }




  handleClose() {
    this.showModal = false;
    this.renderer.removeClass(document.body, 'grayscale');
  }
  handleFinish() {
    localStorage.setItem('popupFinished', 'true');
    this.showModal = false;
  }

  toggleCard(index: number) {
    this.cards.forEach((card, i) => {
      if (i !== index) {
        card.toggleState = false;
        card.customClass = ['light-theme'];
      }
    });

    this.cards[index].toggleState = !this.cards[index].toggleState;
    this.cards[index].customClass = this.cards[index].toggleState ? ['dark-theme'] : ['light-theme'];

    this.isCardButtonDisabled = !this.cards.some(card => card.toggleState);
  }

  openModal(contentType: string) {
    const modelRef = this.modalService.open(ValidateReglementModalComponent, { size: 'lg', backdrop: 'static' });
    modelRef.componentInstance.content = contentType;
  }
  navigateToReleveIndemnite(): void {
    this.router.navigate(['/deposant/releve-indemnite']);
  }

  navigateToEtatDossier() {
    this.router.navigate(['/deposant/etat-dossier'])
  }
}
