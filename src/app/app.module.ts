import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
