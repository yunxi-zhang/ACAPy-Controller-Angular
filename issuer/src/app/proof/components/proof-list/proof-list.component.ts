import { Component, OnInit } from '@angular/core';
import { AgentService } from 'src/app/services/agent.service';
import { map, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-proof-list',
  templateUrl: './proof-list.component.html',
  styleUrls: ['./proof-list.component.scss']
})
export class ProofListComponent implements OnInit {
  proofs: any[] = [];

  constructor(private agentService: AgentService,  private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data
      .pipe(
        map((data) => this.proofs = data.ProofResolverService || []),
      )
      .subscribe();
  }

}
