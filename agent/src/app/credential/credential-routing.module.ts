import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CredentialComponent } from './components/credential/credential.component';
import { CredentialListComponent } from './components/credential-list/credential-list.component';
import { CredentialResolverService } from './credential-resolver.resolver';
import { RevokeCredentialComponent } from './components/revoke-credential/revoke-credential.component';

const routes: Routes = [
  {
    path: '',
    component: CredentialComponent,
    children: [
      { path: 'issued', component: CredentialListComponent, resolve: {CredentialResolverService} },
      { path: 'toRevoke', component: RevokeCredentialComponent },
      { path: 'revoked', component: CredentialListComponent },
      { path: '', redirectTo: 'issued' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CredentialRoutingModule { }
