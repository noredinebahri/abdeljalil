import { Component } from '@angular/core';
import {NavItem} from "../../../shared/components/responsive-navbar/responsive-navbar.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-centre-appel-tabs',
  templateUrl: './centre-appel-tabs.component.html',
  styleUrl: './centre-appel-tabs.component.scss'
})
export class CentreAppelTabsComponent {

  username: string = "Rahimi Mehdi";

  showTab : string = 'infos-deposant';



  constructor(private router :Router) {
  }

  customNavItems: NavItem[] = [
    {  label: 'Dossiers déposant  ', icon: 'assets/images/svg/dossier-deposant.svg',
      action: () => this.router.navigate(['/centre-appel'])},
    {
      label: 'Reclamation',
      icon: 'assets/images/svg/reclamation.svg',

      // subItems: [
      //   { label: 'Comptes rendu recus de la SGFG', icon: 'assets/images/icone/Compt recus.svg', action: () => console.log('Web Design clicked') },
      //   { label: 'SCV pour envois a la SGFG', icon: 'assets/images/icone/SCV envois.svg', action: () => console.log('Hosting clicked') }
      // ]
    },

    // {
    //   label: 'Langue',
    //   icon: 'assets/images/icone/langue.svg',
    //   subItems: [
    //     { label: 'العربية', icon: 'assets/images/icone/drapeau-maroc.svg', action: () => console.log('Hosting clicked') },
    //     { label: 'Français', icon: 'assets/images/icone/drapeau-france.svg', action: () => console.log('Web Design clicked') }
    //   ]
    // },

  ];

  customUserDropdownItems: NavItem[] = [
    { label: 'Votre Compte', icon: 'assets/images/icone/profile-button.svg', action: () => console.log('sd')},
    { label: 'Se Deconnecter', icon: 'assets/images/icone/desabonner.svg', action: () => console.log('sd') }
  ];
  previousState(): void {
    this.router.navigateByUrl('/centre-appel');
  }


}
