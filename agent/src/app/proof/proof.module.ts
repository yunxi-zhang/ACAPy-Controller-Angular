import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ProofRoutingModule } from './proof-routing.module';
import { ProofComponent } from './components/proof/proof.component';
import { ProofListComponent } from './components/proof-list/proof-list.component';
import { ProofCardComponent } from './components/proof-card/proof-card.component';
import { NewProofComponent } from './components/new-proof/new-proof.component';

@NgModule({
  declarations: [ProofComponent, ProofListComponent, ProofCardComponent, NewProofComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ProofRoutingModule
  ]
})
export class ProofModule { }
