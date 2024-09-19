import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListeReclamationComponent} from "./liste-reclamation/liste-reclamation.component";
import {ConsultReclamationComponent} from "./consult-reclamation/consult-reclamation.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ListeReclamationComponent,
      },
      {
        path: ':id',
        component: ConsultReclamationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuiviReclamationRoutingModule { }
