import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Trace } from 'src/app/models/trace';
import { ActionConfig, ColumnConfig, FilterField } from 'src/app/shared/components/table/table.config';

@Component({
  selector: 'app-gestion-trace',
  templateUrl: './gestion-trace.component.html',
  styleUrl: './gestion-trace.component.scss'
})
export class GestionTraceComponent {
  constructor(private modalService: NgbModal, private formBuilder: FormBuilder, private router: Router) {}

  totalItemsTitle: string = "traces";
  totalItems: number = 15;

  columns: ColumnConfig[] = [
    { field: 'typeOperation', header: 'deposant.gestionTrace.table.typeOperation', type: 'text'},
    { field: 'element', header: 'deposant.gestionTrace.table.element', type: 'text'},
    { field: 'dateOperation', header: 'deposant.gestionTrace.table.dateOperation', type: 'date'},
    { field: 'responsableOperation', header: 'deposant.gestionTrace.table.responsableOperation', type: 'text'},
  ];

  filterFields: FilterField[] = [
    { name: 'typeOperation', placeholder: 'Type opération', type: 'select' , options:[{ value: 'true', label: 'opération 1'}, { value: 'false', label: "opération 2"},{ value: 'true', label: 'opération 3'}], style: 'width: 50%' },
    { name: 'element', placeholder: 'Elément', type: 'select' , options:[{ value: 'true', label: 'Element 1'}, { value: 'false', label: "Element 2"},{ value: 'true', label: 'Element 3'}], style: 'width: 50%' },
    { name: 'dateOperation', placeholder: 'Effectué le', type: 'date', style: 'width: 50%;'},
    { name: 'responsableOperation', placeholder: 'Effectué par', type: 'text', style: 'width: 30%;'},
  ];
  
  tableData: Trace[] = [
    {
      typeOperation: "test 1",
      element: "string",
      dateOperation: "12/05/2029",
      responsableOperation: "test"
    }
  ];

  actions: ActionConfig[] = [
    { label: 'consult', action: 'consult', icon: 'assets/images/icone/consult.svg' }
  ];

  onActionClick(): void {
      this.router.navigateByUrl('back-office/consult-trace');
  }

}
