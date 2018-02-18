import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import { AdvancedFeaturesComponent } from './advanced-features/advanced-features.component';
import { PricingComponent } from './pricing/pricing.component';
import { FaqComponent } from './faq/faq.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

import { MailService } from './shared/mail.service';

import { MomentModule } from 'angular2-moment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroComponent,
    AboutComponent,
    FeaturesComponent,
    AdvancedFeaturesComponent,
    PricingComponent,
    FaqComponent,
    GalleryComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    MomentModule
  ],
  providers: [MailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
