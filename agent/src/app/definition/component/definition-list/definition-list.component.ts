import { Component, OnInit } from '@angular/core';
import { AgentService } from 'src/app/services/agent.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-definition-list',
  templateUrl: './definition-list.component.html',
  styleUrls: ['./definition-list.component.scss']
})
export class DefinitionListComponent implements OnInit {
  definitionIDs: any[] = [];
  issuerPublicDID: string;

  constructor(private agentService: AgentService) { }

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
    this.agentService.getCreatedDefinitions(this.issuerPublicDID)
    .pipe(
      map((definitions: any) => {
        this.definitionIDs = definitions.credential_definition_ids;
      })
    )
    .subscribe()
  }

}
