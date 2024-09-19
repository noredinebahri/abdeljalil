import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { Trace } from 'src/app/models/trace';
import { FormItem } from 'src/app/shared/components/form/form.component';
import { ActionConfig, ColumnConfig } from 'src/app/shared/components/table/table.config';

@Component({
  selector: 'app-consult-trace',
  templateUrl: './consult-trace.component.html',
  styleUrl: './consult-trace.component.scss'
})
export class ConsultTraceComponent {

  infosGeneral: FormItem[] = [
    {
      itemType: 'title',
      title: 'Informations générales'
    },
    {
      itemType: 'field',
      placeholder: 'idElement',
      type: 'text',
      value: 'FYEV5E857',
      disabled: true,
    },


    {
      itemType: 'field',
      placeholder: 'typeOperation',
      type: 'text',
      value: 'type opération',
      disabled: true,
    },
    {
      itemType: 'field',
      placeholder: 'element',
      type: 'text',
      value: 'element de test',
      disabled: true,
      validators: [Validators.required]
    },
    {
      itemType: 'field',
      placeholder: 'dateOperation',
      type: 'text',
      value: '15/04/2020',
      disabled: true,
      validators: [Validators.required]
    },
    {
      itemType: 'field',
      placeholder: 'responsableOperation',
      type: 'text',
      value: 'resposable opération',
      disabled: true,
      validators: [Validators.required]
    }
  ];

  goBack() {
    window.history.back();
  }

  columns: ColumnConfig[] = [
    { field: 'Champ', header: 'deposant.gestionTrace.table.details.champ', type: 'text'},
    { field: 'Ancienne valeur', header: 'deposant.gestionTrace.table.details.ancienneValeur', type: 'text'},
    { field: 'Nouvelle valeur', header: 'deposant.gestionTrace.table.details.nouvelleValeur', type: 'text'},
  ];


  

  tableData: Trace[] = [
    {
      typeOperation: 'test',
      element: 'string',
      dateOperation: 'string',
      responsableOperation: 'string'
    },
    {
      typeOperation: 'string',
      element: 'string',
      dateOperation: 'string',
      responsableOperation: 'string'
    }
  ];

  actions: ActionConfig[] = [
    { label: 'consult', action: 'consult', icon: 'assets/images/icone/consult.svg' }
  ];
}
