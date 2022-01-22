import { Component, OnInit } from '@angular/core';
import { AgentService } from '../../../services/agent.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-validate-credential',
  templateUrl: './validate-credential.component.html',
  styleUrls: ['./validate-credential.component.scss']
})
export class ValidateCredentialComponent implements OnInit {
  connectionID: any;
  revokedCredentialExchangeIDs: any[] = [];
  revokedCredentialExchangeID: any;
  AVAIL_SUFFIX: string = "_available";
  REVOKED_SUFFIX: string = "_revoked";
  checkRevokedCredentialResultObject: any;

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

  //get credential exchange ID from two lists with their respective key: $connectionID_available and $connectionID_revoked in the local storage 
  //the list shows all credential exchange IDs related to credentials issued by the issuer regardless of whether they've been revoked or not
  getCredentialExchangeIDs(connectionID) {
    this.revokedCredentialExchangeIDs = JSON.parse(localStorage.getItem(connectionID + this.AVAIL_SUFFIX)).concat(JSON.parse(localStorage.getItem(connectionID + this.REVOKED_SUFFIX)));
  }

  onSubmit() {
    this.agentService.checkRevokedCredential(this.revokedCredentialExchangeID)
    .pipe(
      map((res:any) => {
        this.checkRevokedCredentialResultObject = res;
      })
    )
    .subscribe()
  }

}
