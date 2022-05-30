import { Component, OnInit } from '@angular/core';
import { AcceptTAA } from 'src/app/models/accept-taa';
import { AgentService } from 'src/app/services/agent.service';

@Component({
  selector: 'app-schema-taa',
  templateUrl: './schema-taa.component.html',
  styleUrls: ['./schema-taa.component.scss']
})
export class SchemaTaaComponent implements OnInit {

  payload: any;
  acceptTAAResult = "not yet started";

  constructor(private agentService: AgentService) { }

  ngOnInit(): void {
  }

  onAcceptTAA() {
    this.payload = new AcceptTAA().bodyPayloadTemplate;
    this.agentService.agreeTAA(this.payload)
    .subscribe(
      res => {
        console.log('Response in onAcceptTAA:', res);
      },
      err => {
        console.log('Error in onAcceptTAA', err);
        this.acceptTAAResult = "failed";
      },
      () => {
        this.acceptTAAResult = "success";
      });
  }

}
