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
  public credentialRequestObject = '';
  public payload: any;
  public connectionID: String;
  public comment: String;
  public attributeName: any;
  public attributeValue: any;
  
  constructor(private agentService: AgentService) { }

  ngOnInit(): void {
  }

  copy(el: HTMLInputElement | HTMLTextAreaElement) {
    el.select();
    document.execCommand('copy');
  }

  onSubmit() {
    this.payload = new NewCredentialRequest().addNewAttributeKeyPair(this.attributeName, this.attributeValue, this.connectionID, this.comment);
    this.agentService.createCredentialRequest(this.payload.bodyPayloadTemplate)
      .pipe(
        filter((credentialRequest: any) => !!credentialRequest),
        map((credentialRequest: any) => {
          this.credentialRequest = credentialRequest;
          this.credentialRequestObject = this.credentialRequest && JSON.stringify(this.credentialRequest, null, 4) || '';
        })
      )
      .subscribe();
  }

}
