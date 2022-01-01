import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-proof-card',
  templateUrl: './proof-card.component.html',
  styleUrls: ['./proof-card.component.scss']
})
export class ProofCardComponent implements OnInit {
  @Input() proof: any;
  proofValidUntil: any;
  attributeKey: any;
  attributeValue: any;
  predicateKey: any;
  predicateValue: any;

  constructor() { }

  ngOnInit() {
    this.covertEpochToLocalDate(this.proof.presentation_request.non_revoked.to);
  }

  covertEpochToLocalDate(epoch) {
    this.proofValidUntil = new Date(epoch*1000);
    this.getPredicates();
    this.getAttributes();
  }

  getPredicates() {
    this.predicateKey = Object.keys(this.proof.presentation_request.requested_predicates);
    this.predicateValue = Object.values(this.proof.presentation_request.requested_predicates)[0];
  }

  getAttributes() {
    this.attributeKey = Object.keys(this.proof.presentation_request.requested_attributes);
    this.attributeValue = Object.values(this.proof.presentation_request.requested_attributes)[0];
  }

}
