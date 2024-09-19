import { Component } from '@angular/core';
import {NavItem} from "../../shared/components/responsive-navbar/responsive-navbar.component";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-centre-appele',
  templateUrl: './centre-appele.component.html',
  styleUrl: './centre-appele.component.scss'
})
export class CentreAppeleComponent {

  isFormValid: boolean = false;

  checkFormValidity(form: any): void {
    this.isFormValid = Object.keys(form.controls).some(key => form.controls[key].value);
  }



  constructor(
    private router: Router,
  ) {
  }

  // deposantType: string = '';
  username = 'Rahimi Mehdi';
  resetForm(form: NgForm) {
    form.resetForm();

  }
  customUserDropdownItems: NavItem[] = [
    { label: 'Votre Compte', icon: 'assets/images/icone/profile-button.svg', action: () => console.log('sd')},
    { label: 'Se Deconnecter', icon: 'assets/images/icone/desabonner.svg', action: () => console.log('sd') }
  ];

  customNavItems: NavItem[] = [
    {  label: 'Dossiers déposant  ', icon: 'assets/images/svg/dossier-deposant.svg',
      action: () => this.router.navigate(['/centre-appel'])},
    {label: 'Reclamation', icon: 'assets/images/svg/reclamation.svg' ,action: () => this.router.navigate(['/agent-payeur']),
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




  Onsearch(form: NgForm){
    if (form.valid) {
      const criteria = form.value;
      this.router.navigate(['/centre-appel/details/infos-deposant'])
      console.log('Search criteria:', criteria);
    }
  }



}
