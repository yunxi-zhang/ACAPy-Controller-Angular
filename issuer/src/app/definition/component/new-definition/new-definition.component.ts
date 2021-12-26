import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AgentService } from 'src/app/services/agent.service';
import { NewDefinitions } from 'src/app/models/new-definitions';
import { filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-new-definition',
  templateUrl: './new-definition.component.html',
  styleUrls: ['./new-definition.component.scss']
})
export class NewDefinitionComponent implements OnInit {
  payload: any;
  definitionObject: any;
  definition: any;
  definitionForm = this.fb.group({
    schemaID: [''],
    supportRevocation: [''],
    revocationRegistrySize: [''],
    tag: ['']
  });

  constructor(private fb: FormBuilder, private agentService: AgentService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.payload = new NewDefinitions().updateBodyPayLoadTemplate(this.definitionForm.value.schemaID, this.definitionForm.value.supportRevocation, this.definitionForm.value.revocationRegistrySize, this.definitionForm.value.tag);
    this.agentService.createDefinition(this.payload.bodyPayloadTemplate)
      .pipe(
        tap(val => console.log('response:', val)),
        filter((definitions: any) => !!definitions),
        map((definition: any) => {
          this.definition = definition;
          this.definitionObject = this.definition && JSON.stringify(this.definition, null, 4) || '';
          this.definitionObject = JSON.parse(this.definitionObject);
          console.log('definition:', this.definition);
          console.log('definitionObject:', this.definitionObject);
        })
      )
      .subscribe();
  }

}
