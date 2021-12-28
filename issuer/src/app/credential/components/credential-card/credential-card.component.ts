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


  constructor(private agentService: AgentService) { }

  ngOnInit() {
    
  }

}
