import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AgentService } from '../services/agent.service';

@Injectable({
  providedIn: 'root'
})
export class CredentialResolverService implements Resolve<any[]> {

  constructor(private agentService: AgentService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any[]> {
    return this.agentService.getCredentialRequestRecords()
      .pipe(
        map((credReqRecords: any[]) => {
          if (route.routeConfig.path === 'issued') {
            return credReqRecords.filter((credReqRecord: any) => credReqRecord.cred_ex_record.state === 'credential-issued' || credReqRecord.cred_ex_record.state === 'credential-received');
          } 
        })
      );
  }
}
