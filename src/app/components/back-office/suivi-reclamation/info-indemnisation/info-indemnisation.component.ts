import {Component, OnInit} from '@angular/core';
import {FormItem} from "../../../../shared/components/form/form.component";
import {AccountData, SettlementData} from "../../../../models/releve-indemnite-data";

@Component({
  selector: 'app-info-indemnisation',
  templateUrl: './info-indemnisation.component.html',
  styleUrl: './info-indemnisation.component.scss'
})
export class InfoIndemnisationComponent implements OnInit{

  informationsGeneralItems!: FormItem[];
  modeReglementItems!: FormItem[];

  accountData: AccountData[] = [];
  settlementData: SettlementData[] = [];

  ngOnInit(): void {
    this.informationsGeneralItems = [
      {
        itemType: 'title',
        title: 'Informations génerales'
      },
      {
        itemType: 'field',
        placeholder: 'nDossier',
        type: 'text',
        value: "IDD/20082004",
        disabled: true,
      },
      {
        itemType: 'field',
        placeholder: 'mntIndemnite',
        type: 'text',
        value: "20 000",
        disabled: true,
      },

    ]

    this.modeReglementItems = [
      {
        itemType: 'title',
        title: 'Mode de règlement'
      },
      {
        itemType: 'field',
        placeholder: 'modeReglement',
        type: 'text',
        value: "Virement bancaire",
        disabled: true,
      },
      {
        itemType: 'field',
        placeholder: 'rib',
        type: 'text',
        value: "******** 5257",
        disabled: true,
      },

    ]

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

}
