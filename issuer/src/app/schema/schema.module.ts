import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { SchemaRoutingModule } from './schema-routing.module';
import { SchemaComponent } from './components/schema/schema.component';
import { NewSchemaComponent } from './components/new-schema/new-schema.component';
import { SchemaListComponent } from './components/schema-list/schema-list.component';
import { SchemaCardComponent } from './components/schema-card/schema-card.component';



@NgModule({
  declarations: [
    SchemaComponent,
    NewSchemaComponent,
    SchemaListComponent,
    SchemaCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    SchemaRoutingModule
  ]
})
export class SchemaModule { }
