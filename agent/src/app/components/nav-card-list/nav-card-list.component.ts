import { Component, OnInit } from '@angular/core';
import { NavLink } from 'src/app/models/nav-link';
import { NavLinkService } from 'src/app/services/nav-link.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-card-list',
  templateUrl: './nav-card-list.component.html',
  styleUrls: ['./nav-card-list.component.scss']
})
export class NavCardListComponent implements OnInit {

  navLinks: NavLink[] = [];

  constructor(private navLinkService: NavLinkService, private translateService: TranslateService) { }

  ngOnInit() {
    //triggered when a user visits the website for the 1st time
    this.navLinks = this.navLinkService.getNavLinks();
    //triggered when a user choose another language
    this.translateService.onLangChange.subscribe(() => {
      this.navLinks = this.navLinkService.getNavLinks();
    });
  }

}
