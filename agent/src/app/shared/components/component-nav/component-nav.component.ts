import { Component, OnInit } from '@angular/core';
import { NavLink } from 'src/app/models/nav-link';
import { NavLinkService } from 'src/app/services/nav-link.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-component-nav',
  templateUrl: './component-nav.component.html',
  styleUrls: ['./component-nav.component.scss']
})
export class ComponentNavComponent implements OnInit {
  moreNavLinks: NavLink[] = [];

  constructor(private navLinkService: NavLinkService, private translateService: TranslateService) { }

  ngOnInit() {
    //triggered when a user visits the website for the 1st time
    this.moreNavLinks = this.navLinkService.getNavLinks();
    //triggered when a user choose another language
    this.translateService.onLangChange.subscribe(() => {
      this.moreNavLinks = this.navLinkService.getNavLinks();
    });
  }

}
