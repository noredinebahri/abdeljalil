import { Component, OnInit } from '@angular/core';
import {NavItem} from "../../responsive-navbar/responsive-navbar.component";
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";
import {TranslateService} from "@ngx-translate/core";
import {LANGUAGE} from "../../../../enums/language";
import {SharedService} from "../../../shared.service";
import {VosDossierModalComponent} from "../../../../components/deposant/vos-dossier-modal/vos-dossier-modal.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  showNavbarDeposant = true;
  showNavbarAdherent = true;
  showNavbarAgentPayeur = true;
  showNavbarCentreAppel = true;
  showNavbarBackOffice = true;
  openIndex: number | null = null;

  private hideNavbarRoutesDeposant = ['/deposant','utilisateurs','detail-depot','detail-representant','detail-heritier','detail-compte-bancaire','notifications','detail-reclamations'];
  private hideNavbarRoutesAdherent = ['/adherent'];
  private hideNavbarRoutesAgentPayeur = ['/agent-payeur'];
  private hideNavbarRoutesCentreAppel = ['/centre-appel'];
  private hideNavbarRoutesBakcOffice = ['/back-office'];

  constructor(private router: Router, private translateService: TranslateService, private sharedService: SharedService,private modalService: NgbModal) {
    this.router.events.pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event) => {
      this.showNavbarDeposant = this.hideNavbarRoutesDeposant.some(route => event.urlAfterRedirects.includes(route));
      this.showNavbarAdherent = this.hideNavbarRoutesAdherent.some(route => event.urlAfterRedirects.includes(route));
      this.showNavbarAgentPayeur = this.hideNavbarRoutesAgentPayeur.some(route => event.urlAfterRedirects.includes(route));
      this.showNavbarCentreAppel = this.hideNavbarRoutesCentreAppel.some(route => event.urlAfterRedirects.includes(route));
      this.showNavbarBackOffice = this.hideNavbarRoutesBakcOffice.some(route => event.urlAfterRedirects.includes(route));
    });
  }

  customNavItemsDeposant: NavItem[] = [
    // {  label: 'Réclamation  ', icon: 'assets/images/icone/reclamation-button.svg', subItems: [
    //     { label: 'Comptes rendu recus de la SGFG', icon: 'assets/images/icone/navbar button.svg', action: () => console.log('Hosting clicked')},
    //     { label: 'SCV pour envois a la SGFG', icon: 'assets/images/icone/navbar button.svg', action: () => console.log('Hosting clicked') }
    //   ] },
    { label: 'menu.accueil', icon: 'assets/images/icone/acceuil.svg', action: () => this.router.navigate(['/deposant/details'])},
    // {
    //   label: 'SCV & C.R ',
    //   icon: 'assets/images/icone/SCV & C.R.-button.svg',
    //   subItems: [
    //     { label: 'Comptes rendu recus de la SGFG', icon: 'assets/images/icone/Compt recus.svg', action: () => console.log('Web Design clicked') },
    //     { label: 'SCV pour envois a la SGFG', icon: 'assets/images/icone/SCV envois.svg', action: () => console.log('Hosting clicked') }
    //   ]
    // },
    { type:'notification', label: 'menu.notification.title', icon: 'assets/images/icone/notification-button.svg',
      subItemsNotif: [
        {
          lus: false,
          iconNotif: 'assets/images/icone/notif-example.svg',
          titleNotif: 'courrier postal',
          date: '18/10/2023',
          action: () => console.log('Comptes rendu recus de la SGFG clicked')
        },
        {
          lus: false,
          iconNotif: 'assets/images/icone/notif-example.svg',
          titleNotif: 'courrier postal',
          date: '18/10/2023',
          action: () => console.log('Comptes rendu recus de la SGFG clicked')
        },
        {
          lus: false,
          iconNotif: 'assets/images/icone/notif-example.svg',
          titleNotif: 'courrier postal',
          date: '18/10/2023',
          action: () => console.log('Comptes rendu recus de la SGFG clicked')
        },
        {
          lus: false,
          iconNotif: 'assets/images/icone/notif-example.svg',
          titleNotif: 'courrier postal',
          date: '18/10/2023',
          action: () => console.log('Comptes rendu recus de la SGFG clicked')
        },
        {
          lus: false,
          iconNotif: 'assets/images/icone/notif-example.svg',
          titleNotif: 'courrier postal',
          date: '18/10/2023',
          action: () => console.log('Comptes rendu recus de la SGFG clicked')
        },
        {
          lus: false,
          iconNotif: 'assets/images/icone/notif-example.svg',
          titleNotif: 'courrier postal',
          date: '18/10/2023',
          action: () => console.log('Comptes rendu recus de la SGFG clicked')
        },
        {
          lus: false,
          iconNotif: 'assets/images/icone/notif-example.svg',
          titleNotif: 'Email',
          date: '18/10/2023',
          action: () => console.log('Comptes rendu recus de la SGFG clicked')
        },
        {
          lus: true,
          iconNotif: 'assets/images/icone/sms-icone.svg',
          titleNotif: 'SMS',
          date: '19/10/2023',
          notifText:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry ',
          action: () => console.log('SCV pour envois a la SGFG clicked')
        }
          ,
          {
              lus: true,
              iconNotif: 'assets/images/icone/sms-icone.svg',
              titleNotif: 'SMS',
              date: '19/10/2023',
              notifText:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry ',
              action: () => console.log('SCV pour envois a la SGFG clicked')
          },
          {
              lus: true,
              iconNotif: 'assets/images/icone/sms-icone.svg',
              titleNotif: 'SMS',
              date: '19/10/2023',
              notifText:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry ',
              action: () => console.log('SCV pour envois a la SGFG clicked')
          },
          {
              lus: true,
              iconNotif: 'assets/images/icone/sms-icone.svg',
              titleNotif: 'SMS',
              date: '19/10/2023',
              notifText:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry ',
              action: () => console.log('SCV pour envois a la SGFG clicked')
          }
      ],
      action: () => console.log('Contact clicked')
    },
    {
      label: 'Langue',
      icon: 'assets/images/icone/langue.svg',
      subItems: [
        { label: 'العربية',
          // icon: 'assets/images/icone/drapeau-maroc.svg',
          action: () => {
          this.translateService.setDefaultLang(LANGUAGE.AR);
          this.translateService.use(LANGUAGE.AR);
          this.sharedService.setCurrencySymbol();
        } },
        { label: 'Français',
          // icon: 'assets/images/icone/drapeau-france.svg',
          action: () => {
          this.translateService.setDefaultLang(LANGUAGE.FR);
          this.translateService.use(LANGUAGE.FR);
          this.sharedService.setCurrencySymbol();
        } }
      ]
    },

  ];
  customNavItemsAdherent: NavItem[] = [

    { label: 'menu.reclamations', icon: 'assets/images/icone/reclamation.svg', action: () => this.router.navigate(['adherent/reclamations'])},
    { label: 'menu.depotExceptionnels', icon: 'assets/images/icone/file-info.svg', action: () => this.router.navigate(['adherent/depot-exceptionnels'])},
    { label: 'menu.compteRendu', icon: 'assets/images/icone/simple-file.svg', action: () => this.router.navigate(['adherent/compte-rendu'])},



  ];

  customUserDropdownItemsDeposant: NavItem[] = [
    { label: 'Votre compte', icon: 'assets/images/icone/profile-button.svg', action: () => this.votreCompt() },
    { label: 'Vos dossiers', icon: 'assets/images/icone/dossier-user.svg', action: () => this.vosDossier() },
    { label: 'Se déconnecter', icon: 'assets/images/icone/desabonner.svg', action: () => this.deconnecter() }
  ];

  customUserDropdownItemsAdherent: NavItem[] = [
    { label: 'Votre Compte', icon: 'assets/images/icone/profile-button.svg', action: () => this.votreCompt() },
    { label: 'Se deconnecter', icon: 'assets/images/icone/desabonner.svg', action: () => this.deconnecter() }
  ];

  customUserDropdownCentreAppel: NavItem[] = [
    { label: 'Votre compte', icon: 'assets/images/icone/profile-button.svg', action: () => console.log('sd')},
    { label: 'Se deconnecter', icon: 'assets/images/icone/desabonner.svg', action: () => console.log('sd') }
  ];

  customNavItemsCentreAppel: NavItem[] = [
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

  usernameDeposant = 'El Ayachi Mohammed';
  usernameAdherent = 'El Ayachi Amine';
  usernameAgentPayeur = 'Bennani Maryame';
  usernameCentreAppel = 'Rahimi Mehdi';

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
    this.router.navigate(['/login']).then(() => {
    }).catch((err) => {
      console.error('Navigation error:', err);
    });

  }

  ngOnInit(): void {
  }



}
