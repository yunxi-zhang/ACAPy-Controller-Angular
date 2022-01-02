import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProofComponent } from './components/proof/proof.component';
import { ProofListComponent } from './components/proof-list/proof-list.component';
import { ProofResolverService } from './proof-resolver.resolver';
import { NewProofComponent } from './components/new-proof/new-proof.component';

const routes: Routes = [
  {
    path: '',
    component: ProofComponent,
    children: [
      { path: 'received', component: ProofListComponent, resolve: { ProofResolverService } },
      { path: 'requested', component: ProofListComponent, resolve: { ProofResolverService } },
      { path: 'new', component: NewProofComponent },
      { path: '', redirectTo: 'received' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProofRoutingModule { }
