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
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { MomentModule } from 'angular2-moment';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { appRoutes } from '../routes';
import { CookiesComponent } from './cookies/cookies.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { RegulationsComponent } from './regulations/regulations.component';
import {AvatarModule} from 'ngx-avatar';
import { MailService } from './shared/mail.service';
import { NgxGalleryModule } from 'ngx-gallery';
import { IndividualTrainingComponent } from './individual-training/individual-training.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroComponent,
    AboutComponent,
    PricingComponent,
    ContactComponent,
    FooterComponent,
    HomeComponent,
    ErrorPageComponent,
    CookiesComponent,
    PrivacyComponent,
    RegulationsComponent,
    IndividualTrainingComponent
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
  providers: [MailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
