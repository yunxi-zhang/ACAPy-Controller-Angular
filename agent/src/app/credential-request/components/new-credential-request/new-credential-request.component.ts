import { Component, OnInit, Input } from '@angular/core';
import { AgentService } from 'src/app/services/agent.service';
import { filter, map } from 'rxjs/operators';
import { NewCredentialRequest } from 'src/app/models/new-credential-request';

@Component({
  selector: 'app-new-credential-request',
  templateUrl: './new-credential-request.component.html',
  styleUrls: ['./new-credential-request.component.scss']
})
export class NewCredentialRequestComponent implements OnInit {
  public credentialRequest: any;
  public credentialRequestObject: any;
  public payload: any;
  public connectionID: String;
  public comment: String;
  public attributeValues: string[] = [];
  public schema: any;
  public schemaID: any;
  public attributeNumber: any;
  
  constructor(private agentService: AgentService) { }

  ngOnInit(): void {  }

  onSearch() {
    this.agentService.getSchemas(this.schemaID)
    .pipe(
      map((schema: any) => {
        this.schema = schema;
      })
    )
    .subscribe()
  }

  onSubmit() {
    this.payload = new NewCredentialRequest().addNewAttributeKeyPair(this.schema.attrNames, this.attributeValues, this.connectionID, this.comment);
    this.agentService.createCredentialRequest(this.payload.bodyPayloadTemplate)
      .pipe(
        filter((credentialRequest: any) => !!credentialRequest),
        map((credentialRequest: any) => {
          this.credentialRequest = credentialRequest;
          this.credentialRequestObject = this.credentialRequest && JSON.stringify(this.credentialRequest, null, 4) || '';
          this.credentialRequestObject = JSON.parse(this.credentialRequestObject);
        })
      )
      .subscribe();
  }
}
