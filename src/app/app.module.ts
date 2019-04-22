import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { OrganizationComponent } from './organization/organization.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { AddeducationComponent } from './addeducation/addeducation.component';
import { AddcertificationComponent } from './addcertification/addcertification.component';
import { NotificationsComponent } from './notifications/notifications.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OrganizationComponent,
    LandingPageComponent,
    FooterComponent,
    AboutComponent,
    UserhomeComponent,
    AddeducationComponent,
    AddcertificationComponent,
    NotificationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
