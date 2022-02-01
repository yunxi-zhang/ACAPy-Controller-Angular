import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CredentialRequestRoutingModule } from './credential-request-routing.module'; 
import { CredentialRequestComponent } from './components/credential-request/credential-request.component';
import { CredentialRequestListComponent } from './components/credential-request-list/credential-request-list.component';
import { CredentialRequestCardComponent } from './components/credential-request-card/credential-request-card.component';
import { NewCredentialRequestComponent } from './components/new-credential-request/new-credential-request.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    CredentialRequestComponent,
    CredentialRequestListComponent,
    CredentialRequestCardComponent,
    NewCredentialRequestComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CredentialRequestRoutingModule,
    FormsModule,
    TranslateModule
  ]
})
export class CredentialRequestModule { }
