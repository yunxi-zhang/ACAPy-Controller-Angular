import { Component, OnInit } from '@angular/core';
import { AgentService } from 'src/app/services/agent.service';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-credential-list',
  templateUrl: './credential-list.component.html',
  styleUrls: ['./credential-list.component.scss']
})
export class CredentialListComponent implements OnInit {
  credentials: any[] = [];
  credExRecords: any[] = [];

  constructor(private agentService: AgentService, private route: ActivatedRoute) { }

  ngOnInit() {
    //get issued credentials by calling the 'records' api in the agent 
    this.route.data
      .pipe(
        map((data: { CredentialResolverService: any[] }) => this.credExRecords = data.CredentialResolverService || []),
      )
      .subscribe();

    //get walleted credentials by calling the 'credential' api in the agent
    this.agentService.getCredentials()
      .pipe(
        map((credentials: any[]) => this.credentials = credentials)
      )
      .subscribe();
  }
}
