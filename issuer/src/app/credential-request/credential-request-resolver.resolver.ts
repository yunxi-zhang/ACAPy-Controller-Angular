import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { AgentService } from '../services/agent.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CredentialRequestResolverResolver implements Resolve<any[]> {

  constructor(private agentService: AgentService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any[]> {
    return this.agentService.getCredentialRecords();
  }
}
