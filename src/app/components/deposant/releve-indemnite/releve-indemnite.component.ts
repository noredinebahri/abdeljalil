import {Component, OnInit, Renderer2} from '@angular/core';
import {Router} from "@angular/router";
import {AccountData, SettlementData} from "../../../models/releve-indemnite-data";




@Component({
  selector: 'app-releve-indemnite',
  templateUrl: './releve-indemnite.component.html',
  styleUrl: './releve-indemnite.component.scss'
})
export class ReleveIndemniteComponent implements OnInit {
  accountData: AccountData[] = [];
  settlementData: SettlementData[] = [];
  constructor(
      private router: Router
  ) {}
  ngOnInit(): void {

    this.accountData = [
      {
        label: 'Compte chèque',
        accountNumber: 'FR000000000000000000000000000000BN',
        balance: 200000000,
        baseIndemnisation: 200000000.00
      },
      {
        label: 'Base d’indemnisation calculée le 1 déc. 2017',
        accountNumber: null,
        balance: 0,
        baseIndemnisation: 200000000.00
      }
    ];

    this.settlementData = [
      {
        description: 'Règlement final effectué le 1 déc. 2017',
        amount: 0,
        indemnisation: 200000000.00
      },
      {
        description: 'Total des règlements effectués sur ce dossier depuis le début de l’indemnisation au 1 déc. 2017',
        amount: 0,
        indemnisation: 200000000.00
      }
    ];
  }
  goBack() {
    window.history.back();


  }


}
