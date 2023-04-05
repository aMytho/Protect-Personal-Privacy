import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserComponent } from './browser/browser.component';
import { CommunicationComponent } from './communication/communication.component';
import { GuideComponent } from './guide.component';
import { WifiComponent } from './wifi/wifi.component';
import { SimpleComponent } from './simple/simple.component';

const routes: Routes = [
  {path: "browser", component: BrowserComponent},
  {path: "communication", component: CommunicationComponent},
  {path: "wifi", component: WifiComponent},
  {path: "simple", component: SimpleComponent},
  {path: "", component: GuideComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuideRoutingModule { }
