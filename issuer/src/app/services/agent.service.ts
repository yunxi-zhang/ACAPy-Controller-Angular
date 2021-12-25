import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AgentStatus } from '../enums/agent-status.enum';
import { Observable, of } from 'rxjs';
import { catchError, switchMap, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  constructor(private http: HttpClient) { }

  //Call POST APIs
  createSchemas(payload: any): Observable<any> {
    return this.http.post<any>('/schemas', payload)
      .pipe(
        switchMap((response: any) => of(response)),
        catchError(this.handleError<any>('createSchemas', null))
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

  //Call GET APIs
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

  getCreatedSchemas(issuerPublicDID: String): Observable<any[]> {
    return this.http.get<any[]>(`/schemas/created?schema_issuer_did=${issuerPublicDID}`)
      .pipe(
        switchMap((response: any) => of(response)),
        catchError(this.handleError<any[]>('getSchemas', []))
      );
  }

  getSchemas(schemaID: String): Observable<any[]> {
    return this.http.get<any[]>('/schemas/' + schemaID)
      .pipe(
        tap(res => console.log('response in schema:', res)),
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
