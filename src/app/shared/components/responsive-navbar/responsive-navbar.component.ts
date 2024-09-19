import { Component, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import {SharedService} from "../../shared.service";

export interface NavItem {
  label: string;
  icon?: string;
  subItems?: NavItem[];
  subItemsNotif?: NotificationItem[];
  type?: string;
  action?: () => void;
}

export interface NotificationItem {
  lus?: boolean;
  iconNotif?: string;
  titleNotif?: string;
  date?: string;
  isButton?: boolean;
  notifText?: string;
  styleNonLus?: boolean;
  action?: () => void;
}

@Component({
  selector: 'app-responsive-navbar',
  templateUrl: './responsive-navbar.component.html',
  styleUrls: ['./responsive-navbar.component.scss']
})
export class ResponsiveNavbarComponent implements OnInit, OnDestroy {
  @Input() navItems: NavItem[] = [];
  @Input() userDropdownItems: NavItem[] = [];
  @Input() username: string = 'Guest';
  @Input() showClosSidebar: boolean  = false;

  openIndex: number | null = null;
  dropdownStyles: any = {};
  public openMoreDropdownIndex: number | null = null;
  isMobile: boolean | undefined;
  isCollapsed = true;
  showUserDropdown = false;
  isSidebarOpen: boolean = true;


  constructor(
    private router: Router,
    private translateService: TranslateService,
    private modalService: NgbModal,
    private sharedService: SharedService
  ) {}

  ngOnInit() {
    this.onResize();
    document.addEventListener('click', this.closeDropdowns.bind(this));
  }

  ngOnDestroy(): void {
    document.removeEventListener('click', this.closeDropdowns.bind(this));
  }
  onCloseSidebar(){
    this.isSidebarOpen = !this.isSidebarOpen;
    this.sharedService.setOpenSidebar(this.isSidebarOpen);
  }

  // openCloturerModal() {
  //   const modalRef = this.modalService.open(VosDossierModalComponent, { size: 'lg', backdrop: 'static' });
  //   modalRef.result.then((status) => {
  //     if (status) {
  //       //
  //     }
  //   }, () => {});
  // }

  closeDropdowns(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (this.openIndex !== null && !target.closest('.navbar') && !target.closest('.dropdown') && !target.closest('.notification') && !target.closest('.static-button')) {
      this.switchArrow(this.openIndex, false);
      this.openIndex = null;
    }
    if (this.showUserDropdown) {
      this.switchArrow(this.navItems.length, false);
    }
    this.showUserDropdown = false;
  }


  @HostListener('window:resize')
  onResize(): void {
    this.isMobile = window.innerWidth < 1004;
  }

  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed;
    const navbarToggler = document.querySelector('.navbar-toggler') as HTMLElement;
    if (navbarToggler) {
      if (this.isCollapsed) {
        navbarToggler.classList.add('collapsed');
      } else {
        navbarToggler.classList.remove('collapsed');
      }
    } else {
      console.error('Navbar toggler element not found!');
    }
  }

  handleClick(action?: () => void, event?: MouseEvent): void {
    if (action) {
      action();
    }
    if (event) {
      event.stopPropagation();
      this.closeDropdowns(event);
    }
    if (this.openIndex !== null) {
      this.switchArrow(this.openIndex, false);
      this.openIndex = null;
    }
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

  toggleDropdown(index: number, event: MouseEvent, item: NavItem): void {
    event.stopPropagation();

    if (item.action && !item.subItems && item.type !== 'notification') {
      item.action();
      this.collapseNavbar();
      return;
    }

    if (this.isMobile && item.type === 'notification') {
      this.handleMobileNotificationDropdown(item.type === 'notification');
      this.collapseNavbar();
      return;
    }

    const isCurrentlyOpen = this.openIndex === index;
    if (this.openIndex !== null && this.openIndex !== index) {
      this.switchArrow(this.openIndex, false);
    }

    this.openIndex = isCurrentlyOpen ? null : index;
    this.switchArrow(index, !isCurrentlyOpen);
  }

  handleMobileNotificationDropdown(isNotificationButton: boolean): void {
    if (isNotificationButton) {
      this.router.navigate(['/notifications']).then(() => {
      }).catch((err) => {
        console.error('Navigation error:', err);
      });
    }
  }

  collapseNavbar(): void {
    this.isCollapsed = true;
    this.updateTogglerState();
  }

  updateTogglerState(): void {
    const navbarToggler = document.querySelector('.navbar-toggler') as HTMLElement;
    if (navbarToggler) {
      navbarToggler.classList.add('collapsed');
    }
  }

  toggleProfileDropdown(event: MouseEvent): void {
    event.stopPropagation();
    this.showUserDropdown = !this.showUserDropdown;
    const profileIndex = this.navItems.length; // Assume the profile dropdown arrow has an index equal to navItems length
    this.switchArrow(profileIndex, this.showUserDropdown);
  }

  toggleMoreDropdown(index: number, event: MouseEvent): void {
    event.stopPropagation();
    if (this.openMoreDropdownIndex === index) {
      this.openMoreDropdownIndex = null;
    } else {
      this.openMoreDropdownIndex = index;
    }
  }

  voirTous(): void {
    if (this.openIndex !== null) {
      this.switchArrow(this.openIndex, false);
      this.openIndex = null;
    }
    this.router.navigate(['/notifications']).then(() => {
    }).catch((err) => {
      console.error('Navigation error:', err);
    });
  }

  // vosDossier() {
  //   this.openCloturerModal();
  // }


  // deconnecter(): void {
  //   this.openIndex = null;
  //   this.router.navigate(['/demarrage']).then(() => {
  //   }).catch((err) => {
  //     console.error('Navigation error:', err);
  //   });
  // }
}
