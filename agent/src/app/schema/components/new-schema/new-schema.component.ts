import { Component } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { NewSchemas } from '../../../models/new-schemas';
import { AgentService } from 'src/app/services/agent.service';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-new-schema',
  templateUrl: './new-schema.component.html',
  styleUrls: ['./new-schema.component.scss']
})
export class NewSchemaComponent {
  payload: any;
  schema: any;
  schemaObject: any;
  schemaForm = this.fb.group({
    schemaName: [''],
    schemaVersion: [''],
    attributes: this.fb.array([
      this.fb.control('')
    ])
  });

  constructor(private fb: FormBuilder, private agentService: AgentService) { }

  get attributes() {
    return this.schemaForm.get('attributes') as FormArray;
  }

  addAttribute() {
    this.attributes.push(this.fb.control(''));
  }

  onSubmit() {
    this.payload = new NewSchemas().updateBodyPayLoadTemplate(this.schemaForm.value.attributes, this.schemaForm.value.schemaName, this.schemaForm.value.schemaVersion);
    this.agentService.createSchemas(this.payload.bodyPayloadTemplate)
      .pipe(
        filter((schemas: any) => !!schemas),
        map((schemas: any) => {
          this.schema = schemas;
          this.schemaObject = this.schema && JSON.stringify(this.schema, null, 4) || '';
          this.schemaObject = JSON.parse(this.schemaObject);
        })
      )
      .subscribe();
  }
}
