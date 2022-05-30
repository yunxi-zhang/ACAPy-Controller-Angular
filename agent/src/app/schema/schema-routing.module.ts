import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchemaComponent } from './components/schema/schema.component';
import { NewSchemaComponent } from './components/new-schema/new-schema.component';
import { SchemaListComponent } from './components/schema-list/schema-list.component';
import { SchemaTaaComponent } from './components/schema-taa/schema-taa.component';

const routes: Routes = [
  {
    path: '',
    component: SchemaComponent,
    children: [
      { path: 'created', component: SchemaListComponent },
      { path: 'new', component: NewSchemaComponent },
      { path: 'taa', component: SchemaTaaComponent},
      { path: '', redirectTo: 'created' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchemaRoutingModule { }
