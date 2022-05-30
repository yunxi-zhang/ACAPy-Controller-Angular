import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SchemaRoutingModule } from './schema-routing.module';
import { SchemaComponent } from './components/schema/schema.component';
import { NewSchemaComponent } from './components/new-schema/new-schema.component';
import { SchemaListComponent } from './components/schema-list/schema-list.component';
import { SchemaCardComponent } from './components/schema-card/schema-card.component';
import { TranslateModule } from '@ngx-translate/core';
import { SchemaTaaComponent } from './components/schema-taa/schema-taa.component';

@NgModule({
  declarations: [
    SchemaComponent,
    NewSchemaComponent,
    SchemaListComponent,
    SchemaCardComponent,
    SchemaTaaComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    SchemaRoutingModule,
    TranslateModule
  ]
})
export class SchemaModule { }
