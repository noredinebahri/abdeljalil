import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/auth/auth-guard ';
import { Authority } from 'src/app/enums/authority';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'marque',
    pathMatch: 'full'
  },
  {
    path: 'marque',
    canActivate: [AuthGuard],
    data: {roles : [Authority.ADMIN]},
    //loadChildren: () => import('./marque/marque.module').then(m => m.MarqueModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferentielRoutingModule { }
