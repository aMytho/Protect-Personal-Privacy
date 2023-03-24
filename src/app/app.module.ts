import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { InfoComponent } from './info/info.component';
import { AltServicesComponent } from './info/alt-services/alt-services.component';
import { GlobalaccessModule } from './globalaccess/globalaccess.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    InfoComponent,
    AltServicesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GlobalaccessModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
