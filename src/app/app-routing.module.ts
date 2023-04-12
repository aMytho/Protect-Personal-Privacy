import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltServicesComponent } from './info/alt-services/alt-services.component';
import { InfoComponent } from './info/info.component';
import { HomeComponent } from './home/home.component';

// Loads each major route. Cases and guide have subroutes for each case/guide respectively
const routes: Routes = [
  {path: "cases", loadChildren: () => import('./case/case.module').then(m => m.CaseModule)},
  {path: "guide", loadChildren: () => import("./guide/guide.module").then(m => m.GuideModule)},
  {path: "myself", component: InfoComponent},
  {path: "alternatives", component: AltServicesComponent},
  {path: "home", component: HomeComponent},
  {path: "", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
