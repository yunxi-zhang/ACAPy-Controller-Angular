import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CredentialRequestComponent } from './components/credential-request/credential-request.component';
import { CredentialRequestListComponent } from './components/credential-request-list/credential-request-list.component';
import { NewCredentialRequestComponent } from './components/new-credential-request/new-credential-request.component';
import { CredentialRequestResolverService } from './credential-request-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: CredentialRequestComponent,
    children: [
      { path: 'requested', component: CredentialRequestListComponent, resolve: {CredentialRequestResolverService} },
      { path: 'received', component: CredentialRequestListComponent, resolve: {CredentialRequestResolverService} },
      { path: 'new', component: NewCredentialRequestComponent },
      { path: '', redirectTo: 'requested' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CredentialRequestRoutingModule { }
