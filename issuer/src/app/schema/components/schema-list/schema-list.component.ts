import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AgentService } from 'src/app/services/agent.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
