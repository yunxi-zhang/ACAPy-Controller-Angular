import { Component, OnInit, Input } from '@angular/core';
import { AgentService } from 'src/app/services/agent.service';
import { map, filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-credential-card',
  templateUrl: './credential-card.component.html',
  styleUrls: ['./credential-card.component.scss']
})
export class CredentialCardComponent implements OnInit {
  @Input() credential: any;
  @Input() credExRecord: any;
  payload: any;
  storeCredentialResult: any;


  constructor(private agentService: AgentService) { }

  ngOnInit() {
    this.storeCredentialResult = "not started yet";
  }

  onSubmitStoreCredential() {
    this.payload = this.agentService.storeCredential(this.credExRecord.cred_ex_record.cred_ex_id)
    .subscribe(
      res => {
        console.log('Response in onSubmitStoreCredential:', res);
      },
      err => {
        console.log('Error in onSubmitStoreCredential:', err);
        this.storeCredentialResult = "failed";
      },
      () => this.storeCredentialResult = "success"
    );
  }

}
