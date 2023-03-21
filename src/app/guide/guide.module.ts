import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuideRoutingModule } from './guide-routing.module';
import { GuideComponent } from './guide.component';
import { BrowserComponent } from './browser/browser.component';
import { CommunicationComponent } from './communication/communication.component';


@NgModule({
  declarations: [
    GuideComponent,
    BrowserComponent,
    CommunicationComponent
  ],
  imports: [
    CommonModule,
    GuideRoutingModule
  ]
})
export class GuideModule { }