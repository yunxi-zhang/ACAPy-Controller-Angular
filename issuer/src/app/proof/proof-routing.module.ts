import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProofComponent } from './components/proof/proof.component';
import { ProofListComponent } from './components/proof-list/proof-list.component';

const routes: Routes = [
  {
    path: '',
    component: ProofComponent,
    children: [
      { path: 'requested', component: ProofListComponent },
      { path: 'received', component: ProofListComponent },
      { path: '', redirectTo: 'requested' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProofRoutingModule { }
