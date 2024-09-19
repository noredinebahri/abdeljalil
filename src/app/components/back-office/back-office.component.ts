import { Component, OnInit } from '@angular/core';
import { NavItem } from "../../shared/components/responsive-navbar/responsive-navbar.component";
import { SharedService } from "../../shared/shared.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-back-office',
  templateUrl: './back-office.component.html',
  styleUrl: './back-office.component.scss'
})
export class BackOfficeComponent implements OnInit {
  usernameAdherent = 'El Ayachi Amine';
  customUserDropdownItemsBackoffice: NavItem[] = [
    { label: 'Votre Compte', icon: 'assets/images/icone/profile-button.svg', action: () => this.votreCompt() },
    { label: 'Se Deconnecter', icon: 'assets/images/icone/desabonner.svg', action: () => this.deconnecter() }
  ];

  isSidebarOpen: boolean = true;
  colapsOpen: boolean = false;

  sidebarElements:
    {
      label: string, icon: string,
      items?: { label: string, action?: () => void }[],
      action?: () => void
    }[] = [
      { label: "Accueil", icon: "assets/images/icone/acceuil-2.svg" },
      { label: "Comptes rendus du prog. de contrôle", icon: "assets/images/icone/search.svg", action: () => console.log("bitton clicked") },

      { label: "Comptes rendus du prog. d'intégration", icon: "assets/images/icone/list-star.svg" },
      { label: "Dossiers déposants", icon: "assets/images/icone/dossier.svg" },
      { label: "Dépôts exceptionnels", icon: "assets/images/icone/file-time.svg" },
      { label: "Suivi des réclamations", icon: "assets/images/icone/clock.svg", action: () => this.router.navigate(["back-office/suivi-reclamation"])  },
      { label: "Fraudes", icon: "assets/images/icone/user-warrning.svg", action: () => this.toRefraude() },
      { label: "Instructions de paiement", icon: "assets/images/icone/book.svg", action: () => this.toGestionInstructionPaiement() },
      { label: "Suivi des réglements", icon: "assets/images/icone/file-search.svg" },
      {
        label: "Administration", icon: "assets/images/icone/user-setting.svg", items: [
          { label: "Référentiels", action: () => this.toReferentiel() },
          { label: "Paramétrage" },
          { label: "Gestion des campagnes d'indemnisation", action: () => this.toGestionCampagnesIndemnisation() },
          { label: "Gestion des utilisateurs", action: () => this.toGestionUtilisateurs() },
          { label: "Gestion des rôles", action: () => this.toGestionRoles() },
          { label: "Piste d'audit", action: () => this.toGestionTraces()}]
      },

    ];
  constructor(private sharedService: SharedService, private router: Router) {
  }





  ngOnInit() {
    this.sharedService.openSidebar.subscribe({
      next: (value) => {
        this.isSidebarOpen = value;
      }
    });
  }

  openOrCloseColapse() {
    this.colapsOpen = !this.colapsOpen;
  }
  votreCompt() {
    this.router.navigate(["gestion-compte"])
  }
  deconnecter() { }

  toGestionRoles() {
    this.router.navigate(["role-list"])
  }
  toReferentiel() {
    this.router.navigate(["back-office/referentiel"])
  }
  toGestionCampagnesIndemnisation() {
    this.router.navigate(["/back-office/indemnisation"])
  }
  toGestionUtilisateurs() {
    this.router.navigate(["back-office/gestion-utilisateur"])
  }
  toGestionInstructionPaiement() {
    this.router.navigate(["back-office/gestion-instruction-payment/suivi-bloc-instruction-paiment"])
  }
  toRefraude() {
    this.router.navigate(["/back-office/dossiers-frauduleux"])
  }
  toGestionTraces() {
    this.router.navigate(["/back-office/gestion-trace"])
  }

}
