import { Component, OnInit, Input } from '@angular/core';
import { AgentService } from 'src/app/services/agent.service';
import { map } from 'rxjs/operators';
import { SendPresentation } from 'src/app/models/send-presentation';

@Component({
  selector: 'app-proof-card',
  templateUrl: './proof-card.component.html',
  styleUrls: ['./proof-card.component.scss']
})
export class ProofCardComponent implements OnInit {
  @Input() proof: any;
  proofValidUntil: any;
  attributeKeys: any;
  attributeValues: any;
  predicateKeys: any;
  predicateValues: any;
  credentials: any;

  //this variable stores the credential ID selected by a holder user in the Web UI to fulfil attribute requirements of a proof request
  credential: any;
  //this variable stores the credential ID selected by a holder user in the Web UI to fulfil predicate requirements of a proof request
  predCredential: any;
  presentationResult = "not yet started";
  proofVerificationResult = "not yet started";

  payload: any;

  //this attribute will store the assembled attribute Object of the body payload of the send proof presentation API
  attributeObject: any = {};
  //this attribute will store the assembled predicate Object of the body payload of the send proof presentation API
  predicateObject: any = {};

  constructor(private agentService: AgentService) { }

  ngOnInit() {
    this.covertEpochToLocalDate(this.proof.presentation_request.non_revoked.to);
    this.getAttributes();
    this.getPredicates();

    this.agentService.getCredentials()
      .pipe(
        map((credentials: any) => {
          this.credentials = credentials;
        })
      )
      .subscribe()
  }

  covertEpochToLocalDate(epoch) {
    this.proofValidUntil = new Date(epoch * 1000);
  }

  getAttributes() {
    this.attributeKeys = Object.keys(this.proof.presentation_request.requested_attributes);
    this.attributeValues = Object.values(this.proof.presentation_request.requested_attributes);
  }

  getPredicates() {
    this.predicateKeys = Object.keys(this.proof.presentation_request.requested_predicates);
    this.predicateValues = Object.values(this.proof.presentation_request.requested_predicates);
  }

  onSubmitPresentation() {
    this.constructAttributeObject(this.credential);
    this.constructPredicateObject(this.predCredential);
    this.payload = new SendPresentation().updateBodyPayLoadTemplate(this.attributeObject, this.predicateObject);
    this.agentService.sendProofPresentation(this.proof.presentation_exchange_id, this.payload.bodyPayloadTemplate)
      .subscribe(
        res => {
          console.log('Response in onSubmitPresentation:', res);
        },
        err => {
          console.log('Error in onSubmitPresentation', err);
          this.presentationResult = "failed";
        },
        () => {
          this.presentationResult = "success";
        });
  }

  onSubmitProofVerification() {
    this.agentService.verifyProofpresentation(this.proof.presentation_exchange_id)
      .pipe(
        
      )
      .subscribe(
        res => {
          console.log('Response in onSubmitProofVerification:', res);
        },
        err => {
          console.log('Error in onSubmitProofVerification', err);
          this.proofVerificationResult = "failed";
        },
        () => {
          this.proofVerificationResult = "success";
        });
  }

  constructAttributeObject(credentialID) {
    for (let i = 0; i < this.attributeKeys.length; i++) {
      this.attributeObject[this.attributeKeys[i]] = {
        "cred_id": credentialID,
        "revealed": true
      }
    }
  }

  constructPredicateObject(credentialID) {
    for (let i = 0; i < this.predicateKeys.length; i++) {
      this.predicateObject[this.predicateKeys[i]] = {
        "cred_id": credentialID,
        "timestamp": this.getEpochOfCurrentDate()
      }
    }
  }

  getEpochOfCurrentDate() {
    return Math.floor(new Date().getTime() / 1000);
  }
}
