import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";
import {SharedService} from "../../../shared/shared.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NavItem} from "../../../shared/components/responsive-navbar/responsive-navbar.component";
import {VosDossierModalComponent} from "../../deposant/vos-dossier-modal/vos-dossier-modal.component";

@Component({
  selector: 'app-main-adherent',
  templateUrl: './main-adherent.component.html',
  styleUrl: './main-adherent.component.scss'
})
export class MainAdherentComponent {
  openIndex: number | null = null;
  private hideNavbarRoutesAdherent = ['/adherent'];

  constructor(private router: Router, private translateService: TranslateService, private sharedService: SharedService,private modalService: NgbModal) {
  }
  customNavItemsAdherent: NavItem[] = [
    { label: 'menu.reclamations', icon: 'assets/images/icone/reclamation.svg', action: () => this.router.navigate(['adherent/reclamations'])},
    { label: 'menu.depotExceptionnels', icon: 'assets/images/icone/file-info.svg', action: () => this.router.navigate(['adherent/depot-exceptionnels'])},
    { label: 'menu.compteRendu', icon: 'assets/images/icone/simple-file.svg', action: () => this.router.navigate(['adherent/compte-rendu'])},
  ];
  customUserDropdownItemsAdherent: NavItem[] = [
    { label: 'Votre Compte', icon: 'assets/images/icone/profile-button.svg', action: () => this.votreCompt() },
    { label: 'Se Deconnecter', icon: 'assets/images/icone/desabonner.svg', action: () => this.deconnecter() }
  ];
  usernameAdherent = 'El Ayachi Amine';

  vosDossier() {
    this.openCloturerModal();
  }

  openCloturerModal(){
    const modalRef = this.modalService.open(VosDossierModalComponent, { size: 'lg', backdrop: 'static' });
    modalRef.result.then((status) => {
      if (status) {
        //
      }
    }, () => {});
  }

  votreCompt() {
    if (this.openIndex !== null) {
      this.switchArrow(this.openIndex, false);
      this.openIndex = null;
    }
    this.openIndex = null;
    this.router.navigate(['/utilisateurs']).then(() => {
    }).catch((err) => {
      console.error('Navigation error:', err);
    });

  }
  switchArrow(index: number, isOpen: boolean): void {
    const arrowIcon = document.getElementById(`arrow${index}`);
    if (arrowIcon) {
      if (isOpen) {
        arrowIcon.classList.add('up');
      } else {
        arrowIcon.classList.remove('up');
      }
    }
  }

  deconnecter(): void {
    this.openIndex = null;
    this.router.navigate(['/demarrage']).then(() => {
    }).catch((err) => {
      console.error('Navigation error:', err);
    });

  }

}
