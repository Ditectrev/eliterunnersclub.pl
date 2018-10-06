import {Component, OnInit} from '@angular/core';
import * as AOS from 'aos';
import {fadeAnimation} from './shared/fade.animation';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    AOS.init();
  }

  // TODO: Add animations.
  getRouterOutletState(routerOutlet: RouterOutlet) {
    const routeData = routerOutlet.activatedRouteData['animation'];
    return routeData ? routeData : 'rootPage';
  }

  onActivate(event) {
    const scrollToTop = window.setInterval(() => {
      const pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 8); // Each scroll step.
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 16);
  }
}
