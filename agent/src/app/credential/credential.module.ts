import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { CredentialRoutingModule } from './credential-routing.module';
import { CredentialComponent } from './components/credential/credential.component';
import { CredentialListComponent } from './components/credential-list/credential-list.component';
import { CredentialCardComponent } from './components/credential-card/credential-card.component';
import { RevokeCredentialComponent } from './components/revoke-credential/revoke-credential.component';
import { ValidateCredentialComponent } from './components/validate-credential/validate-credential.component';

@NgModule({
  declarations: [CredentialComponent, CredentialListComponent, CredentialCardComponent, RevokeCredentialComponent, ValidateCredentialComponent],
  imports: [
    CommonModule,
    SharedModule,
    CredentialRoutingModule,
    FormsModule
  ]
})
export class CredentialModule { }
