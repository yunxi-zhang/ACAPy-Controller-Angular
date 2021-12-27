import { Component, OnInit, Input } from '@angular/core';
import { filter, map, tap } from 'rxjs/operators';
import { AgentService } from 'src/app/services/agent.service';
import { SendOffer } from 'src/app/models/send-offer';

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

  constructor(private agentService: AgentService) { }

  ngOnInit(): void {
    this.approval = "not yet";
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

  onSubmit() {
    try {
      this.getBodyPayloadParameters();
      this.payload = new SendOffer().updateBodyPayLoadTemplate(this.comment, this.connectionID, this.attributes, this.definitionID, this.issuerDID, this.schemaID, this.schemaIssuerDID, this.schemaName, this.schemaVersion, this.autoIssue, this.autoRemove, this.trace);
      console.log('payload:', this.payload);
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
            console.log('response:', res);
          },
          err => {
            console.log('error:', err);
            this.approval = "failed";
          },
          () => this.approval = "success"
        );
    }catch (e) {
      console.log('Error:', e);
      this.approval = "failed";
    }
  }

}
