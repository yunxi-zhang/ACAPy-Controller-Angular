import { Component, OnInit } from '@angular/core';
import { AgentService } from '../../../services/agent.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-revoked-credential',
  templateUrl: './revoked-credential.component.html',
  styleUrls: ['./revoked-credential.component.scss']
})
export class RevokedCredentialComponent implements OnInit {
  connectionID: any;
  revokedCredentialExchangeIDs: any[] = [];
  revokedCredentialExchangeID: any;
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

  //get credential exchange ID from a list with a key: $connectionID_available in the local storage 
  //the list shows all credential exchange IDs related to non-revoked credentials
  getCredentialExchangeIDs(connectionID) {
    this.revokedCredentialExchangeIDs = JSON.parse(localStorage.getItem(connectionID + this.REVOKED_SUFFIX));
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
