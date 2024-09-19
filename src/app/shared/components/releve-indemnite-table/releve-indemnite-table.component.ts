import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {AccountData, SettlementData} from "../../../models/releve-indemnite-data";

@Component({
  selector: 'app-releve-indemnite-table',
  templateUrl: './releve-indemnite-table.component.html',
  styleUrl: './releve-indemnite-table.component.scss'
})
export class ReleveIndemniteTableComponent {
  @Input() title?: string ;
  @Input() accountData: AccountData[] = [];
  @Input() settlementData: SettlementData[] = [];
  @Input() isSuiviReclamation = false;
  constructor(
    private router: Router
  ) {}
  goBack() {
    window.history.back();
  }
}
