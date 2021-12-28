import { Component, OnInit, Input } from '@angular/core';
import { filter, map, tap } from 'rxjs/operators';
import { AgentService } from 'src/app/services/agent.service';
import { SendOffer } from 'src/app/models/send-offer';
import { IssueCredential } from 'src/app/models/issue-credential';

@Component({
  selector: 'app-credential-request-card',
  templateUrl: './credential-request-card.component.html',
  styleUrls: ['./credential-request-card.component.scss']
})
export class CredentialRequestCardComponent implements OnInit {
  @Input() credentialRequest: any;
  offer: any;
  offerObject: any;
  payload: any;
  issueCredentialPayload: any;
  issueCredentialComment: any
  credExID: any;
  comment: any;
  connectionID: any;
  attributes: any;
  definitionID: any;
  issuerDID: any;
  schemaID: any;
  schemaIssuerDID: any;
  schemaName: any;
  schemaVersion: any;
  autoIssue: any = false;
  autoRemove: any = true;
  trace: any = false;
  list: any[];
  approval: string;
  credentialRequestResult: string;
  issueCredentialResult: string;

  constructor(private agentService: AgentService) { }

  ngOnInit(): void {
    this.approval = "not yet";
    this.credentialRequestResult = "not started yet";
    this.issueCredentialResult = "not started yet";
  }

  getBodyPayloadParameters() {
    this.credExID = this.credentialRequest.cred_ex_record.cred_ex_id;
    this.connectionID = this.credentialRequest.cred_ex_record.conn_id;
    this.attributes = Array.from(this.credentialRequest.cred_ex_record.cred_preview.attributes);
    this.issuerDID = this.schemaID.split(':')[0];
    this.schemaIssuerDID = this.issuerDID;
    this.schemaName = this.schemaID.split(':')[2];
    this.schemaVersion = this.schemaID.split(':')[3];
  }

  onSubmitSenderOffer() {
    try {
      this.getBodyPayloadParameters();
      this.payload = new SendOffer().updateBodyPayLoadTemplate(this.comment, this.connectionID, this.attributes, this.definitionID, this.issuerDID, this.schemaID, this.schemaIssuerDID, this.schemaName, this.schemaVersion, this.autoIssue, this.autoRemove, this.trace);
      this.agentService.sendOffer(this.credExID, this.payload)
        .pipe(
          filter((offer: any) => !!offer),
          map((offer: any) => {
            this.offer = offer;
            this.offerObject = this.offer && JSON.stringify(this.offer, null, 4) || '';
            this.offerObject = JSON.parse(this.offerObject);
          })
        )
        .subscribe(
          res => {
            console.log('Response in onSubmitSenderOffer:', res);
          },
          err => {
            console.log('Error in onSubmitSenderOffer:', err);
            this.approval = "failed";
          },
          () => this.approval = "success"
        );
    } catch (e) {
      console.log('Error in onSubmitSenderOffer:', e);
      this.approval = "failed";
    }
  }

  onSubmitCredentialRequest() {
    this.agentService.sendRequest(this.credentialRequest.cred_ex_record.cred_ex_id)
      .pipe(
        filter((offer: any) => !!offer),
        map((offer: any) => {
          this.offer = offer;
          this.offerObject = this.offer && JSON.stringify(this.offer, null, 4) || '';
          this.offerObject = JSON.parse(this.offerObject);
        })
      )
      .subscribe(
        res => {
          console.log('Response in onSubmitCredentialRequest:', res);
        },
        err => {
          console.log('Error in onSubmitCredentialRequest:', err);
          this.credentialRequestResult = "failed";
        },
        () => this.credentialRequestResult = "success"
      );
  }

  onSubmitCredentialIssuance() {
    try {
      this.issueCredentialPayload = new IssueCredential().updateBodyPayLoadTemplate(this.issueCredentialComment);
      this.agentService.issueCredential(this.credentialRequest.cred_ex_record.cred_ex_id, this.issueCredentialPayload)
      .pipe(
        filter((offer: any) => !!offer),
        map((offer: any) => {
          this.offer = offer;
          this.offerObject = this.offer && JSON.stringify(this.offer, null, 4) || '';
          this.offerObject = JSON.parse(this.offerObject);
        })
      )
      .subscribe(
        res => {
          console.log('Response in onSubmitCredentialIssuance:', res);
        },
        err => {
          console.log('Error in onSubmitCredentialIssuance:', err);
          this.issueCredentialResult = "failed";
        },
        () => this.issueCredentialResult = "success"
      );
    }catch(e) {
      console.log('Error in onSubmitCredentialIssuance:', e);
      this.approval = "failed";
    }
   
  }

}
