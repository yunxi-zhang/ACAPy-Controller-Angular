import { Component, OnInit } from '@angular/core';
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
  public attributeName: any;
  public attributeValue: any[];
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
        this.attributeNumber = schema.attrNames.length;
        console.log('index:', this.attributeNumber);
      })
    )
    .subscribe()
  }

  onSubmit() {
    console.log('attribute value:', this.attributeValue);
    this.payload = new NewCredentialRequest().addNewAttributeKeyPair(this.attributeName, this.attributeValue, this.connectionID, this.comment);
    console.log('payload:', this.payload);
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
