import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-schema-card',
  templateUrl: './schema-card.component.html',
  styleUrls: ['./schema-card.component.scss']
})
export class SchemaCardComponent implements OnInit {
  @Input() schemaID: any;
  constructor() { }

  ngOnInit(): void {
  }

}
