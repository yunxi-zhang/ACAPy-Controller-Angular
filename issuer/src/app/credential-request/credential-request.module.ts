import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CredentialRequestRoutingModule } from './credential-request-routing.module'; 
import { CredentialRequestComponent } from './components/credential-request/credential-request.component';
import { CredentialRequestListComponent } from './components/credential-request-list/credential-request-list.component';
import { CredentialRequestCardComponent } from './components/credential-request-card/credential-request-card.component';


@NgModule({
  declarations: [
    CredentialRequestComponent,
    CredentialRequestListComponent,
    CredentialRequestCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CredentialRequestRoutingModule
  ]
})
export class CredentialRequestModule { }
