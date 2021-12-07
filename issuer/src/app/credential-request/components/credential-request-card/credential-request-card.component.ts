import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-credential-request-card',
  templateUrl: './credential-request-card.component.html',
  styleUrls: ['./credential-request-card.component.scss']
})
export class CredentialRequestCardComponent implements OnInit {
  @Input() credentialRequest: any;
  constructor() { }

  ngOnInit(): void {
  }

}
