import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavCardListComponent } from './components/nav-card-list/nav-card-list.component';
import { MsalGuard } from '@azure/msal-angular';

const routes: Routes = [
  { path: '', component: NavCardListComponent },
  {
    path: 'schemas',
    loadChildren: () => import('./schema/schema.module').then(m => m.SchemaModule),
    canActivate: [
      MsalGuard
    ]
  },
  {
    path: 'definitions',
    loadChildren: () => import('./definition/definition.module').then(m => m.DefinitionModule),
    canActivate: [
      MsalGuard
    ]
  },
  {
    path: 'connections',
    loadChildren: () => import('./connection/connection.module').then(m => m.ConnectionModule),
    canActivate: [
      MsalGuard
    ]
  },
  {
    path: 'credentialRequests',
    loadChildren: () => import('./credential-request/credential-request.module').then(m => m.CredentialRequestModule),
    canActivate: [
      MsalGuard
    ]
  },
  {
    path: 'credentials',
    loadChildren: () => import('./credential/credential.module').then(m => m.CredentialModule),
    canActivate: [
      MsalGuard
    ]
  },
  {
    path: 'proofs',
    loadChildren: () => import('./proof/proof.module').then(m => m.ProofModule),
    canActivate: [
      MsalGuard
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
