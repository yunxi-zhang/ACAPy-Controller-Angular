import { Component, OnInit } from '@angular/core';
import { AgentService } from 'src/app/services/agent.service';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-new-credential-request',
  templateUrl: './new-credential-request.component.html',
  styleUrls: ['./new-credential-request.component.scss']
})
export class NewCredentialRequestComponent implements OnInit {
  public request: any;
  public requestObject = '';
  public requestUrl = '';
  
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
        filter((request: any) => !!request),
        map((request: any) => {
          this.request = request;
          this.requestObject = this.request && JSON.stringify(this.request.request, null, 4) || '';
          this.requestUrl = this.request && this.request.request_url || '';
        })
      )
      .subscribe();
  }

}
