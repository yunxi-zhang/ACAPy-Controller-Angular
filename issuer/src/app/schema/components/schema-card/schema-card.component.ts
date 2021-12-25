import { Component, OnInit, Input } from '@angular/core';
import { AgentService } from 'src/app/services/agent.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-schema-card',
  templateUrl: './schema-card.component.html',
  styleUrls: ['./schema-card.component.scss']
})
export class SchemaCardComponent implements OnInit {
  @Input() schemaID: any;
  schemaDetail: any;
  constructor(private agentService: AgentService) { }

  ngOnInit(): void {
  }

  getSchemaDetail() {
    this.agentService.getSchemas(this.schemaID)
      .pipe(
        map((schemaDetail: any) => {
          this.schemaDetail = schemaDetail;
        })
      )
      .subscribe()
  }

}
