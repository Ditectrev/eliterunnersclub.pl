import {Routes} from '@angular/router';

import {AboutComponent} from './app/about/about.component';
import {ContactComponent} from './app/contact/contact.component';
import {ErrorPageComponent} from './app/error-page/error-page.component';
import {HomeComponent} from './app/home/home.component';
import {PrivacyComponent} from './app/privacy/privacy.component';
import {CookiesComponent} from './app/cookies/cookies.component';
import {RegulationsComponent} from './app/regulations/regulations.component';
import {ApplicationsComponent} from './app/applications/applications.component';
import {MembershipComponent} from './app/membership/membership.component';
import {BenefitsComponent} from './app/benefits/benefits.component';
import {JoinComponent} from './app/join/join.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'page1' } },
  { path: 'o-klubie', component: AboutComponent, data: { animation: 'page2' } },
  { path: 'cookies', component: CookiesComponent, data: { animation: 'page3' } },
  { path: 'kontakt', component: ContactComponent, data: { animation: 'page4' } },
  { path: 'prywatnosc', component: PrivacyComponent, data: { animation: 'page5' } },
  { path: 'regulamin', component: RegulationsComponent, data: { animation: 'page6' } },
  { path: 'korzysci', component: BenefitsComponent, data: { animation: 'page7' } },
  { path: 'aplikacje', component: ApplicationsComponent, data: { animation: 'page8' } },
  { path: 'czlonkostwo', component: MembershipComponent, data: { animation: 'page9' } },
  { path: 'dolacz-do-klubu', component: JoinComponent, data: { animation: 'page10' } },
  { path: 'nie-znaleziono', component: ErrorPageComponent, data: { animation: 'page11' } },
  // It's important that wildcard route has to be the last element in array of routes, because routes parses from top to bottom.
  { path: '**', // Wildcard path, which means to catch all other routes, not specified above.
    redirectTo: '/nie-znaleziono' // Alternative to component in routes, which redirects to specific path.
  }
];
