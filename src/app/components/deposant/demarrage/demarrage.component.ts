import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {NavItem} from "../../../shared/components/responsive-navbar/responsive-navbar.component";

@Component({
  selector: 'app-demarrage',
  templateUrl: './demarrage.component.html',
  styleUrl: './demarrage.component.scss'
})
export class DemarrageComponent implements OnInit{

  languageForm: FormGroup;
  currentStep = 1;
  selectedCard: any = null;
  username:string="El Ayachi Mohammed"

  constructor(private fb: FormBuilder, private router: Router) {
    this.languageForm = this.fb.group({
      language: ['fr']
    });
  }

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
      content: 'Personne Morale',
      iconPath: 'assets/images/icone/icone dossier-card.svg',
      typePersonne: 'Titulaire',
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
      backgroundTypPersonne: 'type2'
    },
  ];
  customNavItems: NavItem[] = [
    // {  label: 'Réclamation  ', icon: 'assets/images/icone/reclamation-button.svg', subItems: [
    //     { label: 'Comptes rendu recus de la SGFG', icon: 'assets/images/icone/navbar button.svg', action: () => console.log('Hosting clicked')},
    //     { label: 'SCV pour envois a la SGFG', icon: 'assets/images/icone/navbar button.svg', action: () => console.log('Hosting clicked') }
    //   ] },
    // {
    //   label: 'SCV & C.R ',
    //   icon: 'assets/images/icone/SCV & C.R.-button.svg',
    //   subItems: [
    //     { label: 'Comptes rendu recus de la SGFG', icon: 'assets/images/icone/Compt recus.svg', action: () => console.log('Web Design clicked') },
    //     { label: 'SCV pour envois a la SGFG', icon: 'assets/images/icone/SCV envois.svg', action: () => console.log('Hosting clicked') }
    //   ]
    // },

    // {
    //   label: 'Langue',
    //   icon: 'assets/images/icone/langue.svg',
    //   subItems: [
    //     { label: 'العربية', icon: 'assets/images/icone/drapeau-maroc.svg', action: () => console.log('Hosting clicked') },
    //     { label: 'Français', icon: 'assets/images/icone/drapeau-france.svg', action: () => console.log('Web Design clicked') }
    //   ]
    // },

  ];

  handleSecondStepSubmit(event: any) {
  //  this.router.navigate(['/deposant/details'] ,  { state: { applyGrayscale: true } });
  }
  goToNextStep() {
    this.currentStep++;
  }
  goToPreviousStep() {
    this.currentStep--;
  }
  onSubmit() {
    const selectedLanguage = this.languageForm.get('language')?.value;
    console.log('Selected Language:', selectedLanguage);
    // Implement further logic based on the selected language
  }
  selectCard(card: any) {
    this.selectedCard = card;
  }


  ngOnInit(): void {
  }
}
