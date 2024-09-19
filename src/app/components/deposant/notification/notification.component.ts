import { Component } from '@angular/core';
import {NotificationItem} from "../../../shared/components/responsive-navbar/responsive-navbar.component";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent {

  public openMoreDropdownIndex: number | null = null;
  itemsPerPage: number = 6;
  currentPage: number = 0;
  pagedNotifications: NotificationItem[] = [];

  notificationItems: NotificationItem[] = [
    {
      lus: false,
      iconNotif: 'assets/images/icone/notif-example.svg',
      titleNotif: 'Courier Postale',
      date: '18/10/2023',
      action: () => console.log('Comptes rendu recus de la SGFG clicked')
    },
    {
      lus: false,
      iconNotif: 'assets/images/icone/notif-example.svg',
      titleNotif: 'Courier Postale',
      date: '18/10/2023',
      action: () => console.log('Comptes rendu recus de la SGFG clicked')
    },
    {
      lus: false,
      iconNotif: 'assets/images/icone/notif-example.svg',
      titleNotif: 'Courier Postale',
      date: '18/10/2023',
      action: () => console.log('Comptes rendu recus de la SGFG clicked')
    },
    {
      lus: false,
      iconNotif: 'assets/images/icone/notif-example.svg',
      titleNotif: 'Courier Postale',
      date: '18/10/2023',
      action: () => console.log('Comptes rendu recus de la SGFG clicked')

    },
    {
      lus: false,
      iconNotif: 'assets/images/icone/notif-example.svg',
      titleNotif: 'Courier Postale',
      date: '18/10/2023',
      action: () => console.log('Comptes rendu recus de la SGFG clicked')
    },
    {
      lus: true,
      iconNotif: 'assets/images/icone/sms-icone.svg',
      titleNotif: 'SMS',
      date: '19/10/2023',
      notifText:'Vous avez recu un virement de 40000dh',
      action: () => console.log('SCV pour envois a la SGFG clicked')
    }, {
      lus: true,
      iconNotif: 'assets/images/icone/sms-icone.svg',
      titleNotif: 'SMS',
      date: '19/10/2023',
      notifText:'loremloertnhgzenjknfhriuetgbvqleh gtvqlehgqlrhsgyebvjhergtfbugtfbqjgtbfah(kg vu',
      action: () => console.log('SCV pour envois a la SGFG clicked')
    }, {
      lus: true,
      iconNotif: 'assets/images/icone/sms-icone.svg',
      titleNotif: 'SMS',
      date: '19/10/2023',
      notifText:'loremloertnhgzenjknfhriuetgbvqleh gtvqlehgqlrhsgyebvjhergtfbugtfbqjgtbfah(kg vu',
      action: () => console.log('SCV pour envois a la SGFG clicked')
    },

  ];


  toggleMoreDropdown(index: number): void {
    this.openMoreDropdownIndex = this.openMoreDropdownIndex === index ? null : index;
  }

  markAsRead(notifItem: NotificationItem): void {
    // notifItem.lus = true;
    // notifItem.showMoreOptions = false;
  }

  deleteNotification(notifItem: NotificationItem): void {
    this.notificationItems = this.notificationItems.filter(item => item !== notifItem);
  }


  goBack() {
    window.history.back();
  }
  updatePagedNotifications(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.pagedNotifications = this.notificationItems.slice(startIndex, endIndex);
  }
  handlePageChange(page: number): void {
    this.currentPage = page;
    this.updatePagedNotifications();
  }
}
