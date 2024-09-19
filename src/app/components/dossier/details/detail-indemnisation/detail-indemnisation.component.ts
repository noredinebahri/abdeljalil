import { Component } from '@angular/core';
import {FormItem} from "../../../../shared/components/form/form.component";
import {Validators} from "@angular/forms";

@Component({
  selector: 'app-detail-indemnisation',
  templateUrl: './detail-indemnisation.component.html',
  styleUrl: './detail-indemnisation.component.scss'
})
export class DetailIndemnisationComponent {

  infosGenerales: FormItem[] = [
    {
      itemType: 'title',
      title: 'Détails indemnisation'
    },
    {
      itemType: 'field',
      placeholder: "montantIndemnite",
      type: 'text',
      value: '20 000',
      disabled: true,
    },
    {
      itemType: 'field',
      placeholder: 'modeReglement',
      type: 'text',
      value: 'Virement bancaire',
      disabled: true,
    },
    {
      itemType: 'field',
      placeholder: "rib",
      type: 'text',
      value: '******** 5257',
      disabled: true,
    }
  ];
  modeReglement: FormItem[] = [
    {
      itemType: 'title',
      title: 'Mode de règlement'
    },
    {
      itemType: 'field',
      placeholder: 'modeReglement',
      type: 'text',
      value: 'Virement bancaire',
      disabled: true,
      validators: [Validators.required, Validators.minLength(3)]
    },


    {
      itemType: 'field',
      placeholder: "rib",
      type: 'text',
      value: '123 456 789112233445 56',
      disabled: true,
      validators: [Validators.required, Validators.maxLength(50)]
    }
  ];

}
