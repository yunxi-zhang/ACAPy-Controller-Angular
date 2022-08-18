import { Component, OnInit, Inject } from '@angular/core';
import { AgentService } from 'src/app/services/agent.service';
import { AgentStatus } from 'src/app/enums/agent-status.enum';
import { map } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { MsalService, MsalBroadcastService, MSAL_GUARD_CONFIG, MsalGuardConfiguration } from '@azure/msal-angular';
import { AuthenticationResult, InteractionStatus, InteractionType, PopupRequest, RedirectRequest } from '@azure/msal-browser';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  agentStatus = AgentStatus;
  status = this.agentStatus.Loading;
  selectedLanguage: string;
  loginDisplay = false;

  constructor(
    private agentService: AgentService, 
    private translateService: TranslateService,
    @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration,
    private authService: MsalService,
    private msalBroadcastService: MsalBroadcastService
  ) { 
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

  setLoginDisplay() {
    this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;
    console.log('display:', this.loginDisplay);
  }

  login() {
    if (this.msalGuardConfig.interactionType === InteractionType.Popup) {
      if (this.msalGuardConfig.authRequest){
        this.authService.loginPopup({...this.msalGuardConfig.authRequest} as PopupRequest)
          .subscribe((response: AuthenticationResult) => {
            this.authService.instance.setActiveAccount(response.account);
          });
        } else {
          this.authService.loginPopup()
            .subscribe((response: AuthenticationResult) => {
              this.authService.instance.setActiveAccount(response.account);
            });
      }
    } else {
      if (this.msalGuardConfig.authRequest){
        this.authService.loginRedirect({...this.msalGuardConfig.authRequest} as RedirectRequest);
      } else {
        this.authService.loginRedirect();
      }
    }
  }

  logout() {
    this.authService.logout();
  }
}
