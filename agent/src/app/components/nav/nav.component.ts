import { Component, OnInit } from '@angular/core';
import { AgentService } from 'src/app/services/agent.service';
import { AgentStatus } from 'src/app/enums/agent-status.enum';
import { map } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  agentStatus = AgentStatus;
  status = this.agentStatus.Loading;
  selectedLanguage: string;

  constructor(private agentService: AgentService, private translateService: TranslateService) { 
    this.translateService.addLangs(['en']);
    this.translateService.setDefaultLang('en');
  }

  ngOnInit() {
    this.agentService.getStatus()
      .pipe(
        map((status) => this.status = status)
      )
      .subscribe();
  }

  onChange(value) {
    this.translateService.use(value);
  }

}
