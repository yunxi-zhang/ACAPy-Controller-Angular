import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AgentStatus } from '../enums/agent-status.enum';

import { Observable, of } from 'rxjs';
import { catchError, switchMap, map } from 'rxjs/operators';
import { NewCredentialRequest } from '../models/new-credential-request';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  constructor(private http: HttpClient) { }

  getStatus(): Observable<AgentStatus> {
    return this.http.get<any>('/status')
      .pipe(
        switchMap(() => of(AgentStatus.Up)),
        catchError(this.handleError<any>('getStatus', AgentStatus.Down))
      );
  }

  getConnections(): Observable<any[]> {
    return this.http.get<any[]>('/connections')
      .pipe(
        switchMap((response: any) => of(response.results)),
        catchError(this.handleError<any[]>('getConnections', []))
      );
  }

  getSchemas(schemaID: String): Observable<any[]> {
    return this.http.get<any[]>('/schemas/' + schemaID)
      .pipe(
        switchMap((response: any) => of(response.schema)),
        catchError(this.handleError<any[]>('getSchemas', []))
      );
  }

  removeConnection(connectionId: string): Observable<any> {
    if (!connectionId) {
      console.error('Must provide a connection ID');
      return;
    }
    return this.http.post<any>(`/connections/${connectionId}/remove`, {})
      .pipe(
        switchMap(() => of(connectionId)),
        catchError(this.handleError<any>('removeConnection', null))
      );
  }

  createInvitation(): Observable<any> {
    return this.http.post<any>('/connections/create-invitation', {})
      .pipe(
        switchMap((response: any) => of(response)),
        catchError(this.handleError<any>('createInvitation', null))
      );
  }

  createCredentialRequest(payload: any): Observable<any> {
    return this.http.post<any>('/issue-credential-2.0/send-proposal', payload)
      .pipe(
        switchMap((response: any) => of(response)),
        catchError(this.handleError<any>('createCredentialRequest', null))
      );
  }

  receiveInvitation(invitation: any): Observable<any> {
    return this.http.post<any>('/connections/receive-invitation', invitation)
      .pipe(
        switchMap((response: any) => of(response)),
        catchError(this.handleError<any>('receiveInvitation', null))
      );
  }

  getCredentialRequestRecords(): Observable<any[]> {
    return this.http.get<any[]>('/issue-credential-2.0/records')
      .pipe(
        switchMap((response: any) => of(response.results)),
        catchError(this.handleError<any[]>('getCredentials', []))
      );
  }

  getCredentials(): Observable<any[]> {
    return this.http.get<any[]>('/credentials')
      .pipe(
        switchMap((response: any) => of(response.results)),
        catchError(this.handleError<any[]>('getCredentials', []))
      );
  }

  getProofs(): Observable<any[]> {
    return this.http.get<any[]>('/present-proof/records')
      .pipe(
        switchMap((response: any) => of(response.results)),
        catchError(this.handleError<any[]>('getProofs', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      // Prevent application from completely erroring out.
      return of(result as T);
    };
  }
}
