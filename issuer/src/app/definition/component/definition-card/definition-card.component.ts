import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-definition-card',
  templateUrl: './definition-card.component.html',
  styleUrls: ['./definition-card.component.scss']
})
export class DefinitionCardComponent implements OnInit {
  @Input() definitionID: any;
  constructor() { }

  ngOnInit(): void {
  }

  getDefinitionDetail() {}

}
