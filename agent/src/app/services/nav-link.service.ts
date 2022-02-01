import { Injectable } from '@angular/core';
import { NavLink } from '../models/nav-link';
import { TranslateService } from '@ngx-translate/core';

// import navLinksJson from 'src/data/nav_links.json';
import navLinkJsonEN from '../../assets/i18n/en.json';
import navLinkJsonCN from '../../assets/i18n/cn.json';

@Injectable({
  providedIn: 'root'
})
export class NavLinkService {
  navLinks: NavLink[] = [];

  constructor(private translateService: TranslateService) {
    //triggered when a user visits the website for the 1st time
    this.navLinks = navLinkJsonEN.menu.map((nav) => new NavLink(this.translateService.instant(nav.label), nav.url));
    //triggered when a user choose another language
    this.translateService.onLangChange.subscribe(() => {
      switch(this.translateService.currentLang) {
        case "en":
          this.navLinks = navLinkJsonEN.menu.map((nav) => new NavLink(this.translateService.instant(nav.label), nav.url));
          break;
        case "cn":
          this.navLinks = navLinkJsonCN.menu.map((nav) => new NavLink(this.translateService.instant(nav.label), nav.url));
          break;
      }
    });
  }

  getNavLinks(): NavLink[] {
    return this.navLinks;
  }

}
