import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AgentService } from 'src/app/services/agent.service';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-schema-list',
  templateUrl: './schema-list.component.html',
  styleUrls: ['./schema-list.component.scss']
})
export class SchemaListComponent implements OnInit {
  schemaIDs: any[] = [];
  issuerPublicDID: string;
  constructor(private agentService: AgentService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.agentService.getPublicDID()
      .pipe(
        //always return the first did in the wallet
        //TODO update this map to get only public DIDs
        map ((dids: any) => dids.results[0].did),
        map((did: any) => {
          this.issuerPublicDID = did;
        })
      )
      .subscribe()
  }

  onSearch() {
    this.agentService.getCreatedSchemas(this.issuerPublicDID)
      .pipe(
        map((schemas: any) => {
          this.schemaIDs = schemas.schema_ids;
        })
      )
      .subscribe()
  }

}
