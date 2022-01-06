import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AgentService } from 'src/app/services/agent.service';
import { SpinnerService } from 'src/app/services/spinner.service';
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

  loading$ = this.spinner.loading$;

  constructor(private fb: FormBuilder, private agentService: AgentService, public spinner: SpinnerService) { }

  ngOnInit(): void {
  }

  onSubmitCreationDefinition() {
    this.payload = new NewDefinitions().updateBodyPayLoadTemplate(this.definitionForm.value.schemaID, this.definitionForm.value.supportRevocation, this.definitionForm.value.revocationRegistrySize, this.definitionForm.value.tag);
    this.agentService.createDefinition(this.payload.bodyPayloadTemplate)
      .pipe(
        filter((definitions: any) => !!definitions),
        map((definition: any) => {
          this.definition = definition;
          this.definitionObject = this.definition && JSON.stringify(this.definition, null, 4) || '';
          this.definitionObject = JSON.parse(this.definitionObject);
        })
      )
      .subscribe(
        res => {
          console.log('Response in onSubmitCreationDefinition:', res);
        },
        err => {
          console.log('Error in onSubmitCreationDefinition', err);
        }
      );
  }

}
