import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { AgentService } from '../services/agent.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CredentialRequestResolverService implements Resolve<any[]> {

  constructor(private agentService: AgentService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any[]> {
    return this.agentService.getCredentialRequestRecords()
      .pipe(
        map((records: any[]) => {
          if (route.routeConfig.path === 'requested') {
            return records.filter((record: any) => record.cred_ex_record.state === 'proposal-sent' || record.cred_ex_record.state === 'offer-sent');
          } else if (route.routeConfig.path === 'received'){
            return records.filter((record: any) => record.cred_ex_record.state === 'proposal-received' || record.cred_ex_record.state === 'offer-received');
          }
        })
      );
  }
}
