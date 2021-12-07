import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CredentialRequestComponent } from './components/credential-request/credential-request.component';
import { CredentialRequestListComponent } from './components/credential-request-list/credential-request-list.component';

const routes: Routes = [
  {
    path: '',
    component: CredentialRequestComponent,
    children: [
      { path: 'new', component: CredentialRequestListComponent },
      { path: 'requested', component: CredentialRequestListComponent },
      { path: '', redirectTo: 'new' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CredentialRequestRoutingModule { }
