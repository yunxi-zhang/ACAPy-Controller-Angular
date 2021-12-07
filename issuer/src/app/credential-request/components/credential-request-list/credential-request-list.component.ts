import { Component, OnInit } from '@angular/core';
import { AgentService } from 'src/app/services/agent.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-credential-request-list',
  templateUrl: './credential-request-list.component.html',
  styleUrls: ['./credential-request-list.component.scss']
})
export class CredentialRequestListComponent implements OnInit {
  credentialRequests: any[] = [];
  constructor(private agentService: AgentService) { }

  ngOnInit(): void {
    this.agentService.getCredentialRecords()
    .pipe(
      map((credentialRequests: any[]) => this.credentialRequests = credentialRequests)
    )
    .subscribe();
  }

}
