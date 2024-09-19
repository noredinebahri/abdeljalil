import {Component, OnInit} from '@angular/core';
import {FormItem} from "../../../../../shared/components/form/form.component";

@Component({
  selector: 'app-detail-indemnisation-ap',
  templateUrl: './detail-indemnisation-ap.component.html',
  styleUrl: './detail-indemnisation-ap.component.scss'
})
export class DetailIndemnisationApComponent implements OnInit{

  informationsGeneralItems!: FormItem[];
  modeReglementItems!: FormItem[];

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
  }

}
