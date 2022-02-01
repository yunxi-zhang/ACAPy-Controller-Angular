import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { DefinitionRoutingModule } from './definition-routing.module';
import { DefinitionComponent } from './component/definition/definition.component';
import { DefinitionListComponent } from './component/definition-list/definition-list.component';
import { DefinitionCardComponent } from './component/definition-card/definition-card.component';
import { NewDefinitionComponent } from './component/new-definition/new-definition.component';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatButtonModule} from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    DefinitionComponent,
    DefinitionListComponent,
    DefinitionCardComponent,
    NewDefinitionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    DefinitionRoutingModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    TranslateModule
  ]
})
export class DefinitionModule { }
