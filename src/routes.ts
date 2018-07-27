import {Routes} from '@angular/router';

import {AboutComponent} from './app/about/about.component';
import {ContactComponent} from './app/contact/contact.component';
import {ErrorPageComponent} from './app/error-page/error-page.component';
import {HomeComponent} from './app/home/home.component';
import {PricingComponent} from './app/pricing/pricing.component';
import {PrivacyComponent} from './app/privacy/privacy.component';
import {CookiesComponent} from './app/cookies/cookies.component';
import {RegulationsComponent} from './app/regulations/regulations.component';
import {UsersComponent} from './app/users/users.component';
import {UserComponent} from './app/users/user/user.component';
import {UserResolver} from './app/users/user/user-resolver.service';
import {EditUserComponent} from './app/users/edit-user/edit-user.component';
import {CanDeactivateGuard} from './app/users/edit-user/can-deactivate-guard.service';
import {AuthGuard} from './auth-guard.service';
import {IndividualTrainingComponent} from './app/individual-training/individual-training.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'page1' } },
  { path: 'o-klubie', component: AboutComponent, data: { animation: 'page2' } },
  { path: 'cookies', component: CookiesComponent, data: { animation: 'page3' } },
  { path: 'kontakt', component: ContactComponent, data: { animation: 'page4' } },
  // TODO: Numerate properly.
  { path: 'cennik', component: PricingComponent, data: { animation: 'page7' } },
  { path: 'prywatnosc', component: PrivacyComponent, data: { animation: 'page8' } },
  { path: 'regulamin', component: RegulationsComponent, data: { animation: 'page9' } },
  { path: 'trening-indywidualny', component: IndividualTrainingComponent, data: { animation: 'page14' } },
  // TODO: Remove users.
  // Apply guards to 'uzytkownicy' children.
  { path: 'uzytkownicy', canActivateChild: [AuthGuard], component: UsersComponent, data: { animation: 'page10' }, children: [
    {path: ':id', component: UserComponent, resolve: {user: UserResolver}, data: { animation: 'page11' } },
    {path: ':id/edytuj', component: EditUserComponent, canDeactivate: [CanDeactivateGuard], data: { animation: 'page12' } }
  ] },
  { path: 'nie-znaleziono', component: ErrorPageComponent, data: { animation: 'page13' } },
  // It's important that wildcard route has to be the last element in array of routes, because routes parses from top to bottom.
  { path: '**', // Wildcard path, which means to catch all other routes, not specified above.
    redirectTo: '/nie-znaleziono' // Alternative to component in routes, which redirects to specific path.
  }
];
