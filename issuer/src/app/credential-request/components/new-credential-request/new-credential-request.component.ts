import { Component, OnInit } from '@angular/core';
import { AgentService } from 'src/app/services/agent.service';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-new-credential-request',
  templateUrl: './new-credential-request.component.html',
  styleUrls: ['./new-credential-request.component.scss']
})
export class NewCredentialRequestComponent implements OnInit {
  public credentialRequest: any;
  public credentialRequestObject = '';
  
  constructor(private agentService: AgentService) { }

  ngOnInit(): void {
  }

  copy(el: HTMLInputElement | HTMLTextAreaElement) {
    el.select();
    document.execCommand('copy');
  }

  onSubmit() {
    this.agentService.createCredentialRequest()
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
