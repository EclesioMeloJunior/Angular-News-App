import { AuthService } from './_services/auth.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddComponent,
    LoginComponent
  ],
  imports: [
    AppRouting,
    BrowserModule,
    AngularFontAwesomeModule,
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
