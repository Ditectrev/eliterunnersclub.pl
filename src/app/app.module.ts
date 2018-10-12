import { BrowserModule } from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { MomentModule } from 'angular2-moment';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { appRoutes } from '../routes';
import { CookiesComponent } from './cookies/cookies.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { RegulationsComponent } from './regulations/regulations.component';
import { MembershipComponent } from './membership/membership.component';
import { ApplicationsComponent } from './applications/applications.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MailService} from './shared/mail.service';
import { BenefitsComponent } from './benefits/benefits.component';
import { JoinComponent } from './join/join.component';
import {NgxGalleryModule} from 'ngx-gallery';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    HomeComponent,
    ErrorPageComponent,
    CookiesComponent,
    PrivacyComponent,
    RegulationsComponent,
    MembershipComponent,
    ApplicationsComponent,
    BenefitsComponent,
    JoinComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MomentModule,
    MDBBootstrapModule.forRoot(),
    NgxGalleryModule,
    RouterModule.forRoot(appRoutes)
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [MailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
