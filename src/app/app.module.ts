import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { PricingComponent } from './pricing/pricing.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { MomentModule } from 'angular2-moment';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { appRoutes } from '../routes';
import { CookiesComponent } from './cookies/cookies.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { RegulationsComponent } from './regulations/regulations.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import {UsersService} from './users/users.service';
import {UserResolver} from './users/user/user-resolver.service';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import {CanDeactivateGuard} from './users/edit-user/can-deactivate-guard.service';
import {AuthService} from '../auth.service';
import {AuthGuard} from '../auth-guard.service';
import {AvatarModule} from 'ngx-avatar';
import { MailService } from './shared/mail.service';
import { NgxGalleryModule } from 'ngx-gallery';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroComponent,
    AboutComponent,
    PricingComponent,
    FaqComponent,
    ContactComponent,
    FooterComponent,
    HomeComponent,
    ErrorPageComponent,
    CookiesComponent,
    PrivacyComponent,
    RegulationsComponent,
    UsersComponent,
    UserComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MomentModule,
    AvatarModule,
    NgxGalleryModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService, AuthGuard, CanDeactivateGuard, MailService, UsersService, UserResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
