import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltServicesComponent } from './info/alt-services/alt-services.component';

const routes: Routes = [
  {path: "cases", loadChildren: () => import('./case/case.module').then(m => m.CaseModule)},
  {path: "alternatives", component: AltServicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
