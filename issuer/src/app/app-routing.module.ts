import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavCardListComponent } from './components/nav-card-list/nav-card-list.component';

const routes: Routes = [
  { path: '', component: NavCardListComponent },
  {
    path: 'schemas',
    loadChildren: () => import('./schema/schema.module').then(m => m.SchemaModule),
  },
  {
    path: 'connections',
    loadChildren: () => import('./connection/connection.module').then(m => m.ConnectionModule),
  },
  {
    path: 'credentialRequests',
    loadChildren: () => import('./credential-request/credential-request.module').then(m => m.CredentialRequestModule),
  },
  {
    path: 'credentials',
    loadChildren: () => import('./credential/credential.module').then(m => m.CredentialModule),
  },
  {
    path: 'proofs',
    loadChildren: () => import('./proof/proof.module').then(m => m.ProofModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
