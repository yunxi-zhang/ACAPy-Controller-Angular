import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefinitionComponent } from './component/definition/definition.component';
import { DefinitionListComponent } from './component/definition-list/definition-list.component';
import { NewDefinitionComponent } from './component/new-definition/new-definition.component';

const routes: Routes = [
  {
    path: '',
    component: DefinitionComponent,
    children: [
      { path: 'created', component:  DefinitionListComponent},
      { path: 'new', component:  NewDefinitionComponent},
      { path: '', redirectTo: 'created' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefinitionRoutingModule { }
