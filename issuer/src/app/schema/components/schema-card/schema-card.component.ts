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
    this.agentService.getSchemas("MtSBSkitb28PSoCj9EpSDs:2:passport12:0.1")
      .pipe(
        map((schemaDetail: any) => {
          this.schemaDetail = schemaDetail;
        })
      )
      .subscribe()
  }

}
