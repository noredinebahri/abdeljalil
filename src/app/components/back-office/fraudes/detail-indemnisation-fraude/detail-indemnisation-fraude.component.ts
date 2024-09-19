import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormItem } from 'src/app/shared/components/form/form.component';
import { OsPatternValidators } from 'src/app/shared/components/form/os-utils/os-pattern-validators';


interface AccountData {
  label: string |null;
  accountNumber: string |null;
  balance: number |null;
  baseIndemnisation: number |null;
}
interface SettlementData {
  description: string |null;
  amount: number |null;
  indemnisation: number;
}
@Component({
  selector: 'app-detail-indemnisation-fraude',
  templateUrl: './detail-indemnisation-fraude.component.html',
  styleUrl: './detail-indemnisation-fraude.component.scss'
})
export class DetailIndemnisationFraudeComponent {
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

  coordonneesContact: FormItem[] = [
    {
      itemType: 'title',
      title: 'Informations d\'indemnisation'
    },
    {
      itemType: 'field',
      placeholder: 'montantTotalIndemnisation',
      type: 'text',
      value: '20 000',
      disabled: true,
    },
    {
      itemType: 'field',
      placeholder: 'montantVerseEnAvance',
      type: 'text',
      value: '10 000',
      disabled: true,

    },
    {
      itemType: 'field',
      placeholder: 'montantQuiRestVerse',
      type: 'text',
      value: '10 000',
      disabled: true,
    },
    // {
    //   itemType: 'field',
    //   placeholder: 'Mobile',
    //   type: 'mobile',
    //   value: '00212 612345678',
    //   disabled: true,
    //   options: [
    //     { value: '00212', label: 'Morocco (+212)' },
    //     { value: '001', label: 'USA (+1)' },
    //     { value: '044', label: 'UK (+44)' }
    //   ],
    //   validators: [Validators.required]
    // },
  ];
  modeDeregelement: FormItem[] = [
    {
      itemType: 'title',
      title: 'fraude.detail.title'
    },
    {
      itemType: 'field',
      placeholder: 'modeDeReglement',
      type: 'text',
      value: 'Bd de La Mecque',
      disabled: true,
    },
    {
      itemType: 'field',
      placeholder: 'rib',
      value: "12349 54367 1546789025",

      disabled: true,
    },
   
  ];


}
