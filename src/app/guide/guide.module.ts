import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuideRoutingModule } from './guide-routing.module';
import { GuideComponent } from './guide.component';
import { BrowserComponent } from './browser/browser.component';
import { CommunicationComponent } from './communication/communication.component';
import { WifiComponent } from './wifi/wifi.component';
import { SimpleComponent } from './simple/simple.component';
import { PasswordComponent } from './password/password.component';
import { ToofaComponent } from './toofa/toofa.component';
import { PhoneComponent } from './phone/phone.component';
import { PcComponent } from './pc/pc.component';
import { UnsafeComponent } from './unsafe/unsafe.component';


@NgModule({
  declarations: [
    GuideComponent,
    BrowserComponent,
    CommunicationComponent,
    WifiComponent,
    SimpleComponent,
    PasswordComponent,
    ToofaComponent,
    PhoneComponent,
    PcComponent,
    UnsafeComponent
  ],
  imports: [
    CommonModule,
    GuideRoutingModule
  ]
})
export class GuideModule { }
