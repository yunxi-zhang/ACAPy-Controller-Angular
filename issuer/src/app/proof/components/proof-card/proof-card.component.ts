import { Component, OnInit, Input } from '@angular/core';


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

  constructor() { }

  ngOnInit() {
    this.covertEpochToLocalDate(this.proof.presentation_request.non_revoked.to);
  }

  covertEpochToLocalDate(epoch) {
    this.proofValidUntil = new Date(epoch*1000);
    this.getAttributes();
    this.getPredicates();
  }

  getAttributes() {
    this.attributeKeys = Object.keys(this.proof.presentation_request.requested_attributes);
    this.attributeValues = Object.values(this.proof.presentation_request.requested_attributes);
  }

  getPredicates() {
    this.predicateKeys = Object.keys(this.proof.presentation_request.requested_predicates);
    this.predicateValues = Object.values(this.proof.presentation_request.requested_predicates);
  }

}
