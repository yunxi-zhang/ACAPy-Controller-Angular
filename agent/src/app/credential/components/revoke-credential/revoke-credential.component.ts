import { Component, OnInit } from '@angular/core';
import { AgentService } from '../../../services/agent.service';
import { map, filter, tap } from 'rxjs/operators';
import { RevokeCredential } from '../../../models/revoke-credential';

@Component({
  selector: 'app-revoke-credential',
  templateUrl: './revoke-credential.component.html',
  styleUrls: ['./revoke-credential.component.scss']
})
export class RevokeCredentialComponent implements OnInit {
  connectionID: any;
  availableCredentialExchangeIDs: any[] = [];
  credentialExchangeID: any;
  revokedCredentialExchangeIDs: any[] = [];
  payload: any;
  AVAIL_SUFFIX: string = "_available";
  REVOKED_SUFFIX: string = "_revoked";
  revokeResult = "not yet started";

  constructor(private agentService: AgentService) { }

  ngOnInit(): void {
    //Currently only get the first connection id
    //TODO get all connection ids
    this.agentService.getConnections()
      .pipe(
        map((data: any) => { 
          this.connectionID = data[0].connection_id
          this.getCredentialExchangeIDs(this.connectionID);
        }),
      )
    .subscribe();
  }

  //get credential exchange ID from a list with a key: $connectionID_available in the local storage 
  //the list shows all credential exchange IDs related to non-revoked credentials
  getCredentialExchangeIDs(connectionID) {
    this.availableCredentialExchangeIDs = JSON.parse(localStorage.getItem(connectionID + this.AVAIL_SUFFIX));
  }

  //remove credential exchange ID from a list with a key: $connectionID_available in the local storage 
  //if a credential has been revoked
  removeCredentialExchangeIDs(connectionID, revokedCredentialExchangeID) {
    let index = this.availableCredentialExchangeIDs.indexOf(revokedCredentialExchangeID);
    if (index > -1) {
      this.availableCredentialExchangeIDs.splice(index, 1);
    }
    localStorage.setItem(connectionID + this.AVAIL_SUFFIX, JSON.stringify(this.availableCredentialExchangeIDs));
  }

  //create a new list with a key: $connectionID_revoked in the local storage 
  setRevokedCredentialExchangeIDs(connectionID, revokedCredentialExchangeID) {
    if (localStorage.getItem(connectionID + this.REVOKED_SUFFIX) !== null ) {
      this.revokedCredentialExchangeIDs = JSON.parse(localStorage.getItem(connectionID + this.REVOKED_SUFFIX));
    }
    this.revokedCredentialExchangeIDs.push(revokedCredentialExchangeID);
    localStorage.setItem(connectionID + this.REVOKED_SUFFIX, JSON.stringify(this.revokedCredentialExchangeIDs));
  }

  onSubmitRevoke() {
    this.payload = new RevokeCredential().updateBodyPayLoadTemplate(this.credentialExchangeID);
    this.agentService.revokeCredential(this.payload.bodyPayloadTemplate)
    .pipe(
      map(val => {
        this.removeCredentialExchangeIDs(this.connectionID, this.credentialExchangeID);
        this.setRevokedCredentialExchangeIDs(this.connectionID, this.credentialExchangeID);
      })
    )
    .subscribe(
      res => {
        console.log('Response in onSubmitPresentation:', res);
      },
      err => {
        console.log('Error in onSubmitPresentation', err);
        this.revokeResult = "failed";
      },
      () => {
        this.revokeResult = "success";
      }
    );
  }

}
