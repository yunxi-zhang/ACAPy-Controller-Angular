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

  createDefinition(payload: any): Observable<any> {
    return this.http.post<any>('/credential-definitions', payload)
      .pipe(
        switchMap((response: any) => of(response)),
        catchError(this.handleError<any>('createDefinitions', null))
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

  sendOffer(credExID: any, payload: any): Observable<any[]> {
    return this.http.post<any[]>('/issue-credential-2.0/records/' + credExID + '/send-offer', payload)
      .pipe(
        switchMap((response: any) => of(response)),
        catchError(this.handleError<any>('sendOffer', null))
      );
  }

  sendRequest(credExID): Observable<any> {
    return this.http.post<any>('/issue-credential-2.0/records/' + credExID + '/send-request', null)
      .pipe(
        switchMap((response: any) => of(response)),
        catchError(this.handleError<any>('sendRequest', null))
      );
  }

  issueCredential(credExID: any, payload: any): Observable<any> {
    return this.http.post<any>('/issue-credential-2.0/records/' + credExID + '/issue', payload)
      .pipe(
        switchMap((response: any) => of(response)),
        catchError(this.handleError<any>('issueCredential', null))
      );
  }

  storeCredential(credExID: any): Observable<any> {
    return this.http.post<any>('/issue-credential-2.0/records/' + credExID + '/store', '{}')
      .pipe(
        switchMap((response: any) => of(response)),
        catchError(this.handleError<any>('storeCredential', null))
      );
  }

  sendProofRequest(payload: any): Observable<any> {
    return this.http.post<any>('/present-proof/send-request', payload)
      .pipe(
        switchMap((response: any) => of(response)),
        catchError(this.handleError<any>('sendProofRequest', null))
      );
  }

  sendProofPresentation(presentationExchangeID: any, payload: any): Observable<any> {
    return this.http.post<any>('/present-proof/records/' + presentationExchangeID + '/send-presentation', payload)
      .pipe(
        switchMap((response: any) => of(response)),
        catchError(this.handleError<any>('sendProofPresentation', null))
      );
  }

  verifyProofpresentation(presentationExchangeID: any): Observable<any> {
    return this.http.post<any>('/present-proof/records/' + presentationExchangeID + '/verify-presentation', null)
      .pipe(
        switchMap((response: any) => of(response)),
        catchError(this.handleError<any>('verifyProofpresentation', null))
      );
  }

  revokeCredential(payload: any): Observable<any> {
    return this.http.post<any>('/revocation/revoke', payload)
      .pipe(
        switchMap((response: any) => of(response)),
        catchError(this.handleError<any>('revokeCredential', null))
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

  getPublicDID(): Observable<any[]> {
    return this.http.get<any>('/wallet/did')
      .pipe(
        switchMap((response: any) => of(response)),
        catchError(this.handleError<any>('getPublicDID', []))
      );
  }

  getCreatedSchemas(issuerPublicDID: String): Observable<any[]> {
    return this.http.get<any[]>(`/schemas/created?schema_issuer_did=${issuerPublicDID}`)
      .pipe(
        switchMap((response: any) => of(response)),
        catchError(this.handleError<any[]>('getCreatedSchemas', []))
      );
  }

  getSchemas(schemaID: String): Observable<any> {
    return this.http.get<any>('/schemas/' + schemaID)
      .pipe(
        switchMap((response: any) => of(response.schema)),
        catchError(this.handleError<any[]>('getSchemas', []))
      );
  }

  getCreatedDefinitions(issuerPublicDID: String): Observable<any[]> {
    return this.http.get<any[]>(`/credential-definitions/created?issuer_did=${issuerPublicDID}`)
      .pipe(
        switchMap((response: any) => of(response)),
        catchError(this.handleError<any[]>('getCreatedDefinitions', []))
      );
  }

  getDefinitions(definitionID: String): Observable<any> {
    return this.http.get<any>('/credential-definitions/' + definitionID)
      .pipe(
        switchMap((response: any) => of(response.credential_definition)),
        catchError(this.handleError<any[]>('getDefinitions', []))
      );
  }

  getConnections(): Observable<any[]> {
    return this.http.get<any[]>('/connections')
      .pipe(
        switchMap((response: any) => of(response.results)),
        catchError(this.handleError<any[]>('getConnections', []))
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

  checkRevokedCredential(credentialExchangeID): Observable<any[]> {
    return this.http.get<any[]>(`/revocation/credential-record?cred_ex_id=${credentialExchangeID}`)
      .pipe(
        switchMap((response: any) => of(response.result)),
        catchError(this.handleError<any[]>('checkRevokedCredential', []))
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
