import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-credential-request-list',
  templateUrl: './credential-request-list.component.html',
  styleUrls: ['./credential-request-list.component.scss']
})
export class CredentialRequestListComponent implements OnInit {
  credentialRequests: any[] = [];
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data
      .pipe(
        map((data: { CredentialRequestResolverService: any[] }) => this.credentialRequests = data.CredentialRequestResolverService || [])
      )
      .subscribe();
  }
}
