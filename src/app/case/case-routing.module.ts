import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralComponent } from './general/general.component';

//Although we don't store routes, we still need this module so it can be lazy loaded.
//We switch cases (lol) by using the MD component and dynamically changing its SRC value.
//See general and case-side-bar components in this folder
const routes: Routes = [
  {
    path: '', component: GeneralComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaseRoutingModule { }
