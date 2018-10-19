import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AuthService } from './_services/auth.service';
import { NewsApiService } from './_services/news-api.service';
import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    AppRouting,
    BrowserModule,
    BrowserModule,
    MatMenuModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
  ],
  providers: [
    AuthService,
    NewsApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
